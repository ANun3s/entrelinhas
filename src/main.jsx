import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import '@fontsource/courier-prime/400.css';
import BooksShowcase from './components/BooksShowcase';
import ArtScrollGallery from './components/ArtScrollGallery';
import CursorCard from './components/CursorCard';
import PaperCrumple from './components/PaperCrumple';
import Icon from './components/Icon';
import { publicAsset } from './publicAsset';
import { books } from './books';
import { linkChapterReferences } from './references';
import paperLetter from './assets/paper-crumple-letter.svg';
import './styles.css';
import './experience.css';
import './polish.css';

function BookMark({ className = '' }) {
  return <svg className={className} viewBox="0 0 100 80" fill="none" aria-hidden="true"><path d="M50 18C36 9 18 9 6 14v48c15-5 31-4 44 5 13-9 29-10 44-5V14c-12-5-30-5-44 4Zm0 0v49M13 22c10-3 20-1 29 3M13 31c10-3 20-1 29 3M13 40c10-3 20-1 29 3M13 49c10-3 20-1 29 3M58 25c9-4 19-6 29-3M58 34c9-4 19-6 29-3M58 43c9-4 19-6 29-3M58 52c9-4 19-6 29-3" stroke="currentColor" strokeWidth="1.4" /></svg>;
}

function LinkedParagraph({ text, index }) {
  return <p className="reading-paragraph" key={index}>{linkChapterReferences(text).map((part, partIndex) => part.reference
    ? <CursorCard key={`${part.reference.id}-${partIndex}`} image={part.reference.image} title={part.reference.title} date={part.reference.date} description={part.reference.description} imageCredit={part.reference.imageCredit} href={part.reference.href}>{part.text}</CursorCard>
    : <React.Fragment key={partIndex}>{part.text}</React.Fragment>)}</p>;
}

function readReaderRoute() {
  const match = window.location.hash.match(/^#leitura\/([^/]+)\/(\d+)$/);
  return match ? { bookId: decodeURIComponent(match[1]), chapterIndex: Math.max(0, Number(match[2]) - 1) } : null;
}

function chapterLabel(book, chapter, index) {
  if (!chapter) return book.chapter || 'Capítulo I';
  if (book.id === 'dom-casmurro' && index === 0) return book.chapter;
  let label = chapter.label || '';
  if (label.toLowerCase().startsWith(book.title.toLowerCase())) label = label.slice(book.title.length).replace(/^[,\s:—-]+/, '');
  if (/^(cap[ií]tulo|pr[oó]logo|dedicat[oó]ria|ao leitor|argumento|notas|carta|ep[ií]logo)/i.test(label)) return label;
  const finalPart = chapter.sourceTitle.split('/').at(-1);
  return /^[IVXLCDM]+$/.test(finalPart) ? `Capítulo ${finalPart} — ${label}` : label;
}

function readWikisourceParagraphs(markup) {
  const parsed = new DOMParser().parseFromString(markup, 'text/html');
  const content = parsed.querySelector('.mw-parser-output') || parsed.body;
  content.querySelectorAll('.ws-noexport, .noprint, .mw-editsection, .mw-references-wrap, .references, .reference, .pagenum, .ws-pagenum, .catlinks, script, style').forEach(node => node.remove());
  const blocks = [...content.querySelectorAll('p, blockquote, div.poem')]
    .map(node => (node.innerText || node.textContent || '').replace(/\s+/g, ' ').trim())
    .filter(text => text.length > 0);
  if (blocks.length) return blocks;
  return (content.innerText || content.textContent || '').split(/\n+/).map(text => text.trim()).filter(Boolean);
}

function ReaderPage({ book, chapterIndex, onBack, onNavigate, saved, onToggleSave, saveNotice }) {
  const chapterList = book.sourceChapters || [];
  const safeIndex = Math.min(Math.max(0, chapterIndex), Math.max(0, chapterList.length - 1));
  const chapter = chapterList[safeIndex];
  const [paragraphs, setParagraphs] = useState(safeIndex === 0 ? book.paragraphs || [] : []);
  const [loading, setLoading] = useState(Boolean(chapter));
  const [loadError, setLoadError] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (!chapter?.sourceTitle) {
      setLoading(false);
      return;
    }
    const controller = new AbortController();
    setLoading(true);
    setLoadError(false);
    if (safeIndex === 0 && book.paragraphs?.length) setParagraphs(book.paragraphs);
    else setParagraphs([]);

    const params = new URLSearchParams({
      action: 'parse',
      page: chapter.sourceTitle,
      prop: 'text',
      format: 'json',
      origin: '*',
    });
    fetch(`https://pt.wikisource.org/w/api.php?${params}`, { signal: controller.signal })
      .then(response => {
        if (!response.ok) throw new Error('Não foi possível carregar este capítulo.');
        return response.json();
      })
      .then(data => {
        const markup = data?.parse?.text?.['*'];
        if (!markup) throw new Error('A fonte não trouxe o texto deste capítulo.');
        const text = readWikisourceParagraphs(markup);
        if (!text.length) throw new Error('Não foi possível extrair o texto do capítulo.');
        setParagraphs(text);
      })
      .catch(error => {
        if (error.name !== 'AbortError') setLoadError(true);
      })
      .finally(() => {
        if (!controller.signal.aborted) setLoading(false);
      });
    return () => controller.abort();
  }, [book.id, chapter?.sourceTitle, safeIndex]);

  const sourceUrl = chapter
    ? `https://pt.wikisource.org/wiki/${chapter.sourceTitle.split('/').map(encodeURIComponent).join('/')}`
    : book.sourceUrl;
  const title = chapterLabel(book, chapter, safeIndex);

  return <main className="reader-page">
    <header className="reader-page-topbar">
      <button className="reader-back-button" type="button" onClick={onBack}>← <span>VOLTAR À ESTANTE</span></button>
      <a className="reader-page-brand" href="#inicio">entrelinhas</a>
      <span className="reader-page-edition">LEITURA ORIGINAL · VOL. {book.number}</span>
    </header>
    <div className="reader-page-layout">
      <aside className="reader-page-sidebar" aria-label="Dados do livro e navegação dos capítulos">
        <div className="reader-page-cover" style={{ '--cover': book.color, '--cover-ink': book.ink }}>
          <span>EDIÇÃO ENTRELINHAS · {book.year}</span>
          <strong>{book.title}</strong>
          <BookMark />
          <span>{book.author}</span>
        </div>
        <p className="eyebrow">{book.category} · {book.year}</p>
        <h1>{book.title}</h1>
        <p className="reader-page-author">{book.author}</p>
        <label className="reader-chapter-picker">
          <span>ÍNDICE · {chapterList.length} CAPÍTULOS</span>
          <select value={safeIndex} onChange={event => onNavigate(Number(event.target.value))}>
            {chapterList.map((item, index) => <option key={item.sourceTitle} value={index}>{String(index + 1).padStart(2, '0')} · {chapterLabel(book, item, index)}</option>)}
          </select>
        </label>
        <button className="reader-save-button" type="button" aria-pressed={saved.includes(book.id)} onClick={() => onToggleSave(book)}>
          {saved.includes(book.id) ? 'Guardado na estante ✓' : 'Guardar na estante +'}
        </button>
        <p className="save-notice" role="status">{saveNotice}</p>
      </aside>
      <article className="reader-manuscript">
        <div className="reader-manuscript-meta"><span>CAPÍTULO {String(safeIndex + 1).padStart(2, '0')}</span><span>{book.year} · {book.author.toUpperCase()}</span></div>
        <h2>{title}</h2>
        <p className="reader-manuscript-byline">{book.author}{book.translator ? ` · tradução de ${book.translator}` : ''}</p>
        <span className="reader-divider" aria-hidden="true">✳</span>
        {loading && !paragraphs.length && <p className="reader-loading" role="status">Abrindo a página original…</p>}
        {loadError && !paragraphs.length && <p className="reader-load-error" role="alert">Não consegui carregar este capítulo agora. <a href={sourceUrl} target="_blank" rel="noreferrer">Abrir a edição no Wikisource ↗</a></p>}
        {loadError && paragraphs.length > 0 && <p className="reader-source-note" role="status">Exibindo a transcrição local enquanto o Wikisource está indisponível.</p>}
        {paragraphs.map((paragraph, index) => <LinkedParagraph text={paragraph} index={index} key={`${book.id}-${safeIndex}-${index}`} />)}
        {!loading && !loadError && !paragraphs.length && <p className="reader-load-error">Este capítulo não tem transcrição disponível. <a href={sourceUrl} target="_blank" rel="noreferrer">Consultar a edição original ↗</a></p>}
        <p className="reader-end">— fim do capítulo —</p>
        <p className="reader-source">{book.sourceEdition}<br />Texto integral transcrito da edição em domínio público via <a href={sourceUrl} target="_blank" rel="noreferrer">Wikisource ↗</a>.</p>
        <nav className="reader-page-navigation" aria-label="Navegar entre capítulos">
          <button type="button" disabled={safeIndex === 0} onClick={() => onNavigate(safeIndex - 1)}>← <span>CAPÍTULO ANTERIOR</span></button>
          <span>{safeIndex + 1} / {chapterList.length}</span>
          <button type="button" disabled={safeIndex >= chapterList.length - 1} onClick={() => onNavigate(safeIndex + 1)}><span>PRÓXIMO CAPÍTULO</span> →</button>
        </nav>
      </article>
    </div>
  </main>;
}

function App() {
  const [filter, setFilter] = useState('Todos');
  const [readerRoute, setReaderRoute] = useState(readReaderRoute);
  const [saved, setSaved] = useState(() => {
    try { const value = JSON.parse(localStorage.getItem('entrelinhas-saved') || '[]'); return Array.isArray(value) ? value.filter(id => books.some(b => b.id === id)) : []; } catch { return []; }
  });
  const [saveNotice, setSaveNotice] = useState('');
  const filtered = books.filter(book => filter === 'Todos' || (filter === 'Guardados' ? saved.includes(book.id) : book.category === filter));

  useEffect(() => {
    const syncRoute = () => setReaderRoute(readReaderRoute());
    window.addEventListener('popstate', syncRoute);
    window.addEventListener('hashchange', syncRoute);
    return () => {
      window.removeEventListener('popstate', syncRoute);
      window.removeEventListener('hashchange', syncRoute);
    };
  }, []);

  function toggleSave(book) {
    const next = saved.includes(book.id) ? saved.filter(id => id !== book.id) : [...saved, book.id];
    setSaved(next);
    try { localStorage.setItem('entrelinhas-saved', JSON.stringify(next)); setSaveNotice(next.includes(book.id) ? 'Livro guardado neste navegador.' : 'Livro removido dos guardados.'); }
    catch { setSaveNotice('Livro guardado apenas durante esta visita.'); }
  }
  function openReader(book) {
    setSaveNotice('');
    window.history.pushState({ entrelinhasReader: true }, '', `#leitura/${book.id}/1`);
    setReaderRoute({ bookId: book.id, chapterIndex: 0 });
    window.scrollTo(0, 0);
  }
  function navigateReader(chapterIndex) {
    const book = books.find(item => item.id === readerRoute?.bookId);
    if (!book) return;
    const safeIndex = Math.max(0, Math.min(chapterIndex, (book.sourceChapters?.length || 1) - 1));
    window.history.replaceState({ entrelinhasReader: true }, '', `#leitura/${book.id}/${safeIndex + 1}`);
    setReaderRoute({ bookId: book.id, chapterIndex: safeIndex });
    window.scrollTo(0, 0);
  }
  function closeReader() {
    if (window.history.state?.entrelinhasReader) window.history.back();
    else {
      setReaderRoute(null);
      window.location.hash = '#acervo';
    }
  }

  const readingBook = readerRoute ? books.find(book => book.id === readerRoute.bookId) : null;
  if (readingBook) return <ReaderPage
    book={readingBook}
    chapterIndex={readerRoute.chapterIndex}
    onBack={closeReader}
    onNavigate={navigateReader}
    saved={saved}
    onToggleSave={toggleSave}
    saveNotice={saveNotice}
  />;

  return <>
    <a className="skip-link" href="#acervo">Pular para o acervo</a>
    <header className="masthead" id="inicio">
      <a className="brand" href="#inicio" aria-label="Entrelinhas — início"><BookMark /><span>entrelinhas</span></a>
      <p>UM ACERVO PARA O TEMPO DE AGORA.</p>
      <nav aria-label="Navegação principal"><a href="#acervo">O acervo <Icon /></a><a href="#telas">As telas <Icon /></a><a href="#sobre">Sobre nós <Icon /></a><a href="#colofao">Colofão <Icon /></a></nav>
    </header>
    <main>
      <BooksShowcase books={books} heroTitle="Entrelinhas" showNav={false} onRead={openReader} />
      <ArtScrollGallery />
      <section className="editorial-section" id="sobre" aria-labelledby="about-heading">
        <div className="section-rule"><span>02 / UMA CARTA AO LEITOR</span><span>LEITURA É PRESENÇA.</span></div>
        <div className="editorial-layout">
          <h2 id="about-heading">O tempo passa.<br />As histórias <em>ficam.</em></h2>
          <div className="editorial-copy"><p>Acreditamos nos livros que ganham orelhas, nas páginas que carregam marcas e nas palavras que encontram a gente na hora certa.</p><p>Entrelinhas é um pequeno refúgio para essas histórias. Um acervo feito de encontros, de curiosidade e do prazer de ler sem olhar o relógio.</p><a href="#acervo" className="text-link">Encontre sua próxima leitura <Icon /></a></div>
          <div className="editorial-paper" aria-label="Carta do Entrelinhas impressa em papel interativo">
            <PaperCrumple
              src={paperLetter}
              alt="Carta do Entrelinhas com o texto desta seção"
              width={320}
              height={400}
              sceneHeight={560}
              releaseBehavior="restore"
              crumpleAmount={0.85}
              crumpleDuration={0.55}
              releaseDuration={0.4}
              foldCount={6}
              foldSharpness={0.6}
              wrinkleDepth={0.65}
              creaseStrength={0.18}
              paperColor="#f4f0e8"
              paperTexture={0.08}
              draggable
              returnToOrigin
            />
          </div>
        </div>
      </section>
      <section className="collection" id="acervo" aria-labelledby="collection-heading">
        <div className="section-rule"><span>03 / A NOSSA ESTANTE</span><span>ESCOLHA UM COMEÇO.</span></div>
        <div className="collection-heading"><h2 id="collection-heading">Boas companhias.</h2><p>Pequenas edições.<br />Longas conversas.</p></div>
        <div className="filter-bar"><div className="filters" role="group" aria-label="Filtrar livros">{['Todos', 'Romance', 'Novela', 'Histórico', 'Guardados'].map(item => <button key={item} aria-pressed={filter === item} onClick={() => setFilter(item)}>{item}{item === 'Guardados' && saved.length > 0 ? ` (${saved.length})` : ''}</button>)}</div><span className="result-count" aria-live="polite">{String(filtered.length).padStart(2, '0')} {filtered.length === 1 ? 'LIVRO' : 'LIVROS'}</span></div>
        <div className="book-list">
          {filtered.map(book => <article className="book-row" key={book.id}>
            <span className="row-number">{book.number}</span>
            <button className="mini-cover" style={{ '--cover': book.color, '--cover-ink': book.ink }} aria-label={`Abrir a leitura de ${book.title}`} onClick={() => openReader(book)}><span>{book.author}</span><strong>{book.title}</strong><BookMark /></button>
            <div className="row-title"><p className="eyebrow">{book.category} · VOL. {book.number}</p><h3><button onClick={() => openReader(book)}>{book.title}</button></h3><p>{book.author}</p></div>
            <p className="row-description">{book.desc}</p>
            <button className="row-read" aria-label={`Abrir a leitura de ${book.title}`} onClick={() => openReader(book)}>Ler livro <Icon /></button>
          </article>)}
          {!filtered.length && <div className="empty-shelf"><BookMark /><p>Sua estante ainda está esperando uma história.</p><button className="text-link" onClick={() => setFilter('Todos')}>Explorar todos os livros ↗</button></div>}
        </div>
        <p className="collection-footnote">Clássicos em domínio público. Transcrições e edições de referência creditadas a cada leitura.</p>
      </section>
      <section className="closing-note" aria-label="Convite à leitura"><span className="asterisk">✳</span><p>Há um mundo inteiro<br />entre uma página <em>e outra.</em></p><a href="#inicio" className="text-link">Voltar ao começo <Icon name="arrow-up" /></a></section>
    </main>
    <footer id="colofao"><div className="footer-top"><a href="#inicio" className="brand"><BookMark /><span>entrelinhas</span></a><p>Um espaço independente de leitura.<br />Feito de papel, palavras e tempo.</p><p>EDIÇÃO DIGITAL · VOL. 01<br />BRASIL, 2026</p></div><div className="footer-bottom"><span>© 2026 ENTRELINHAS</span><a href={publicAsset("image-credits.html")} target="_blank" rel="noreferrer">CRÉDITOS DAS IMAGENS ↗</a><span>ABRA UM LIVRO. FIQUE UM POUCO.</span><a href="https://vol1.temporaryliveness.org" target="_blank" rel="noreferrer">REFERÊNCIA VISUAL ↗</a></div></footer>

  </>;
}
createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>);
