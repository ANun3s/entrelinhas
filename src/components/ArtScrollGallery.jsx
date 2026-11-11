import React, { useState } from 'react';
import { ScrollDissolveReveal } from './ScrollDissolveReveal';
import { paintings } from '../paintings';
import { publicAsset } from '../publicAsset';

export default function ArtScrollGallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const painting = paintings[activeIndex];
  const nextPainting = paintings[(activeIndex + 1) % paintings.length];

  function choosePainting(index) {
    setActiveIndex(index);
    document.getElementById('telas-anima')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  return <section className="art-gallery" id="telas" aria-labelledby="art-heading">
    <div className="art-gallery-inner">
      <div className="section-rule"><span>01 / HISTÓRIA EM IMAGENS</span><span>MEMÓRIA TAMBÉM SE PINTA.</span></div>
      <div className="art-heading-row">
        <div>
          <p className="eyebrow">PINTURA · HISTÓRIA · LEITURA</p>
          <h2 id="art-heading">O passado<br />ganha <em>cor.</em></h2>
        </div>
        <p>Escolha uma obra e role a página: a imagem se desfaz para revelar a próxima, como na animação do caderno que você enviou.</p>
      </div>

      <div className="painting-options" role="group" aria-label="Escolher a pintura inicial da animação">
        {paintings.map((item, index) => <article className={`painting-option${index === activeIndex ? ' is-active' : ''}`} key={item.id}>
          <button className="painting-select" type="button" aria-pressed={index === activeIndex} onClick={() => choosePainting(index)}>
            <img src={publicAsset(item.image)} alt={`Pintura ${item.title}, de ${item.artist}`} loading="lazy" />
            <span className="painting-select-label"><span>{item.year} · {item.artist}</span><strong>{item.title}</strong></span>
          </button>
          <p>{item.description}</p>
          <a className="painting-source" href={item.sourceUrl} target="_blank" rel="noreferrer">FICHA E IMAGEM ↗</a>
          {item.criticalSource && <a className="painting-source painting-context-source" href={item.criticalSource} target="_blank" rel="noreferrer">LEITURA CRÍTICA ↗</a>}
        </article>)}
      </div>

      <div className="art-transition-meta" aria-live="polite">
        <span><b>DESFAZ-SE</b> {painting.title}</span>
        <span className="art-transition-arrow" aria-hidden="true">→</span>
        <span><b>REVELA</b> {nextPainting.title}</span>
      </div>
      <div id="telas-anima" className="art-animation-anchor">
        <ScrollDissolveReveal imageFront={publicAsset(painting.image)} imageBack={publicAsset(nextPainting.image)} />
      </div>
      <p className="art-credit">Reproduções de obras em domínio público via Wikimedia Commons. A interpretação de <em>A Redenção de Cam</em> é controversa e ligada à ideologia do branqueamento; veja a ficha crítica abaixo.</p>
    </div>
  </section>;
}
