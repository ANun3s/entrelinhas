import referenceImages from './reference-images.json';
// Context cards for proper names, historic figures and places in the chapters.
export const references = [
  { id: 'machado', labels: ['Machado de Assis'], title: 'Machado de Assis', date: '1839–1908', description: 'Escritor brasileiro. Autor de Dom Casmurro, Memórias Póstumas de Brás Cubas e O Alienista.', image: '/previews/writer.svg', href: 'https://pt.wikipedia.org/wiki/Machado_de_Assis' },
  { id: 'central', labels: ['trem da Central', 'Central'], title: 'Estrada de Ferro Central do Brasil', date: 'Rio de Janeiro', description: 'A Central do Brasil que dá nome à estação ferroviária do romance de Bentinho.', image: '/previews/train.svg', href: 'https://pt.wikipedia.org/wiki/Central_do_Brasil' },
  { id: 'engenho-novo', labels: ['Engenho Novo'], title: 'Engenho Novo', date: 'Rio de Janeiro', description: 'Bairro carioca mencionado por Bentinho como o lugar de sua casa.', image: '/previews/railway.svg', href: 'https://pt.wikipedia.org/wiki/Engenho_Novo' },
  { id: 'petropolis', labels: ['Petrópolis'], title: 'Petrópolis', date: 'Região Serrana, Rio de Janeiro', description: 'Cidade citada nos bilhetes dos amigos de Dom Casmurro.', image: '/previews/mountain.svg', href: 'https://pt.wikipedia.org/wiki/Petr%C3%B3polis' },
  { id: 'moises', labels: ['Moisés', 'Moysés'], title: 'Moisés', date: 'Tradição bíblica', description: 'Figura bíblica que Brás Cubas evoca ao comparar o começo de suas memórias ao Pentateuco.', image: '/previews/scroll.svg', href: 'https://pt.wikipedia.org/wiki/Mois%C3%A9s' },
  { id: 'pentateuco', labels: ['Pentateuco'], title: 'Pentateuco', date: 'Cinco primeiros livros da Bíblia', description: 'A tradição atribui a Moisés os cinco primeiros livros bíblicos, chamados Pentateuco.', image: '/previews/scroll.svg', href: 'https://pt.wikipedia.org/wiki/Pentateuco' },
  { id: 'hamlet', labels: ['Hamlet', 'moço príncipe'], title: 'Hamlet', date: 'William Shakespeare · c. 1600', description: 'Tragédia de Shakespeare cujo príncipe pondera sobre a vida e a morte. Brás cita uma fala célebre da peça.', image: '/previews/theatre.svg', href: 'https://pt.wikipedia.org/wiki/Hamlet' },
  { id: 'ilissos', labels: ['Ilysso', 'Ilisso'], title: 'Rio Ilisso', date: 'Atenas, Grécia', description: 'Curso d’água ateniense citado na imagem literária das cegonhas que Brás recorda.', image: '/previews/river.svg', href: 'https://pt.wikipedia.org/wiki/Ilissos' },
  { id: 'africa', labels: ['África'], title: 'África', date: 'Continente', description: 'Brás imagina a memória da anônima atravessando o tempo até uma África juvenil.', image: '/previews/africa.svg', href: 'https://pt.wikipedia.org/wiki/%C3%81frica' },
  { id: 'catumby', labels: ['Catumby', 'Catumbi'], title: 'Catumbi', date: 'Rio de Janeiro', description: 'Bairro tradicional do Rio onde Brás Cubas narra ter morrido, em sua chácara.', image: '/previews/rio.svg', href: 'https://pt.wikipedia.org/wiki/Catumbi' },
  { id: 'coimbra', labels: ['Coimbra'], title: 'Coimbra', date: 'Portugal', description: 'Cidade universitária portuguesa onde Simão Bacamarte estudou medicina, segundo as crônicas de Itaguaí.', image: '/previews/university.svg', href: 'https://pt.wikipedia.org/wiki/Coimbra' },
  { id: 'padua', labels: ['Pádua', 'Padua'], title: 'Pádua', date: 'Itália', description: 'Cidade italiana na qual Simão Bacamarte também teria estudado.', image: '/previews/university.svg', href: 'https://pt.wikipedia.org/wiki/P%C3%A1dua' },
  { id: 'brasil', labels: ['Brazil', 'Brasil'], title: 'Brasil', date: 'País', description: 'O narrador apresenta Bacamarte como um dos maiores médicos de seu tempo no Brasil.', image: '/previews/map.svg', href: 'https://pt.wikipedia.org/wiki/Brasil' },
  { id: 'portugal', labels: ['Portugal'], title: 'Portugal', date: 'País', description: 'A narrativa menciona Portugal ao apresentar a fama do Dr. Bacamarte.', image: '/previews/map.svg', href: 'https://pt.wikipedia.org/wiki/Portugal' },
  { id: 'espanhas', labels: ['Hespanhas', 'Espanhas'], title: 'Espanha', date: 'Península Ibérica', description: 'A comparação hiperbólica das crônicas inclui também as Espanhas.', image: '/previews/map.svg', href: 'https://pt.wikipedia.org/wiki/Espanha' },
  { id: 'lisboa', labels: ['Lisboa'], title: 'Lisboa', date: 'Portugal', description: 'A corte portuguesa queria que Bacamarte permanecesse em Lisboa.', image: '/previews/lisbon.svg', href: 'https://pt.wikipedia.org/wiki/Lisboa' },
  { id: 'itaguai', labels: ['Itaguahy', 'Itaguaí'], title: 'Itaguaí', date: 'Rio de Janeiro, Brasil', description: 'Vila fluminense que Machado de Assis imagina como cenário de O Alienista.', image: '/previews/asylum.svg', href: 'https://pt.wikipedia.org/wiki/Itagua%C3%AD' },
  { id: 'coran', labels: ['Alcorão', 'Corão'], title: 'Alcorão', date: 'Livro sagrado do Islã', description: 'A passagem menciona com humor a leitura que Bacamarte faz do texto sagrado.', image: '/previews/scroll.svg', href: 'https://pt.wikipedia.org/wiki/Alcor%C3%A3o' },
  { id: 'maome', labels: ['Maomé', 'Mahomet'], title: 'Maomé', date: 'c. 570–632', description: 'Profeta do Islã, a quem o conto atribui uma frase sobre as pessoas sem juízo.', image: '/previews/portrait.svg', href: 'https://pt.wikipedia.org/wiki/Maom%C3%A9' },
  { id: 'ala', labels: ['Alá'], title: 'Alá', date: 'Tradição islâmica', description: 'Nome árabe para Deus. Aparece na passagem em que Bacamarte cita o Alcorão.', image: '/previews/scroll.svg', href: 'https://pt.wikipedia.org/wiki/Al%C3%A1' },
  { id: 'bento', labels: ['Bento VIII', 'Benedito VIII'], title: 'Bento VIII', date: 'Papa · 1012–1024', description: 'Papa citado por Bacamarte ao atribuir a outra pessoa uma frase do Alcorão.', image: '/previews/portrait.svg', href: 'https://pt.wikipedia.org/wiki/Papa_Bento_VIII' },
  { id: 'rio', labels: ['Rio de Janeiro'], title: 'Rio de Janeiro', date: 'Brasil', description: 'A antiga capital aparece quando a esposa do alienista deseja visitar a cidade.', image: '/previews/rio.svg', href: 'https://pt.wikipedia.org/wiki/Rio_de_Janeiro' },
  { id: 'ruanova', labels: ['Rua Nova'], title: 'Rua Nova', date: 'Itaguaí, na ficção', description: 'É onde Bacamarte manda construir o edifício da Casa Verde, na vila de Itaguaí.', image: '/previews/asylum.svg', href: 'https://pt.wikipedia.org/wiki/Itagua%C3%AD' },
  { id: 'casaverde', labels: ['Casa Verde'], title: 'Casa Verde', date: 'Itaguaí, na ficção', description: 'O asilo imaginado por Simão Bacamarte. O nome vem das janelas verdes do edifício.', image: '/previews/asylum.svg', href: 'https://pt.wikipedia.org/wiki/O_Alienista' },
  { id: 'bernardo-guimaraes', labels: ['Bernardo Guimarães'], title: 'Bernardo Guimarães', date: '1825–1884', description: 'Romancista e poeta mineiro. Publicou A escrava Isaura em 1875, durante o Segundo Reinado.', image: '/previews/writer.svg', href: 'https://pt.wikipedia.org/wiki/Bernardo_Guimar%C3%A3es' },
  { id: 'dom-pedro-ii', labels: ['D. Pedro 2º', 'D. Pedro II'], title: 'D. Pedro II', date: 'Imperador do Brasil · 1825–1891', description: 'O romance situa o início da história nos primeiros anos de seu reinado, no Segundo Reinado (1840–1889).', image: '/previews/portrait.svg', href: 'https://pt.wikipedia.org/wiki/Pedro_II_do_Brasil' },
  { id: 'campos-goitacases', labels: ['Campos de Goitacases', 'Campos dos Goitacazes'], title: 'Campos dos Goitacazes', date: 'Norte fluminense, Rio de Janeiro', description: 'Região açucareira do norte fluminense onde Bernardo Guimarães ambienta a fazenda do começo do romance.', image: '/previews/plantation.svg', href: 'https://pt.wikipedia.org/wiki/Campos_dos_Goytacazes' },
  { id: 'parahyba', labels: ['Parahyba', 'Paraíba'], title: 'Rio Paraíba do Sul', date: 'Sudeste do Brasil', description: 'Rio citado na descrição da fazenda ficcional, na região de Campos dos Goitacazes.', image: '/previews/river.svg', href: 'https://pt.wikipedia.org/wiki/Rio_Para%C3%ADba_do_Sul' },
  { id: 'escravidao', labels: ['escravidão', 'escrava', 'captiva', 'cativa', 'senzala', 'senzalas'], title: 'Escravidão no Brasil', date: 'Abolição em 1888', description: 'A narrativa se passa sob a escravidão e expõe a contradição entre a educação de Isaura e sua condição legal de pessoa escravizada.', image: '/previews/plantation.svg', href: 'https://pt.wikipedia.org/wiki/Escravid%C3%A3o_no_Brasil' },
  { id: 'guerra-paraguai', labels: ['Guerra do Paraguai', 'guerra', 'Paraguai', 'paraguaios'], title: 'Guerra do Paraguai', date: '1864–1870', description: 'Conflito entre Paraguai e a Tríplice Aliança formada por Brasil, Argentina e Uruguai. Taunay narra a expedição brasileira pelo norte.', image: '/previews/paraguay-map.svg', href: 'https://pt.wikipedia.org/wiki/Guerra_do_Paraguai' },
  { id: 'humaita', labels: ['Humaitá'], title: 'Humaitá', date: 'Paraguai', description: 'Fortaleza às margens do rio Paraguai, que Taunay apresenta como posição estratégica durante a guerra.', image: '/previews/paraguay-map.svg', href: 'https://pt.wikipedia.org/wiki/Fortaleza_de_Humait%C3%A1' },
  { id: 'crimia', labels: ['Criméia', 'Crimeia'], title: 'Guerra da Crimeia', date: '1853–1856', description: 'Conflito usado pelo narrador como comparação para destacar a importância estratégica da fortaleza de Humaitá.', image: '/previews/paraguay-map.svg', href: 'https://pt.wikipedia.org/wiki/Guerra_da_Crimeia' },
  { id: 'solano-lopez', labels: ['Francisco Solano Lopes', 'Solano Lopes'], title: 'Francisco Solano López', date: 'Presidente do Paraguai · 1827–1870', description: 'Presidente paraguaio durante a Guerra do Paraguai; aparece no relato de Taunay como dirigente do país em guerra.', image: '/previews/portrait.svg', href: 'https://pt.wikipedia.org/wiki/Francisco_Solano_L%C3%B3pez' },
  { id: 'cuiaba', labels: ['Cuiabá'], title: 'Cuiabá', date: 'Mato Grosso, Brasil', description: 'Capital mato-grossense citada como ponto de partida previsto para a frente norte da campanha.', image: '/previews/map.svg', href: 'https://pt.wikipedia.org/wiki/Cuiab%C3%A1' },
  { id: 'uberaba', labels: ['Uberaba'], title: 'Uberaba', date: 'Minas Gerais, Brasil', description: 'Local onde, segundo o capítulo, a coluna expedicionária conseguiu reorganizar-se em julho de 1865.', image: '/previews/map.svg', href: 'https://pt.wikipedia.org/wiki/Uberaba' },
  { id: 'ouro-preto', labels: ['Ouro Preto'], title: 'Ouro Preto', date: 'Minas Gerais, Brasil', description: 'Cidade de onde partiram batalhões enviados para reforçar a expedição narrada por Taunay.', image: '/previews/map.svg', href: 'https://pt.wikipedia.org/wiki/Ouro_Preto' },
  { id: 'paranaiba', labels: ['Paranaíba'], title: 'Rio Paranaíba', date: 'Centro-Oeste do Brasil', description: 'Rio alcançado pela coluna durante o avanço em direção ao noroeste e a Mato Grosso.', image: '/previews/river.svg', href: 'https://pt.wikipedia.org/wiki/Rio_Parana%C3%ADba' },
  { id: 'maracaju', labels: ['Maracaju'], title: 'Serra de Maracaju', date: 'Mato Grosso do Sul', description: 'Serra mencionada no itinerário difícil da expedição, perto do Pantanal e da fronteira paraguaia.', image: '/previews/mountain.svg', href: 'https://pt.wikipedia.org/wiki/Serra_de_Maracaju' },
  { id: 'miranda', labels: ['Miranda'], title: 'Miranda', date: 'Mato Grosso do Sul, Brasil', description: 'Povoação que a coluna alcança depois de atravessar áreas alagadas e assoladas por doenças.', image: '/previews/map.svg', href: 'https://pt.wikipedia.org/wiki/Miranda_(Mato_Grosso_do_Sul)' },
  { id: 'caxias-river', labels: ['Coxim', 'rio Negro', 'Pantanal'], title: 'Coxim e o Pantanal', date: 'Mato Grosso do Sul, Brasil', description: 'O relato descreve enchentes, isolamento, fome e doenças durante a travessia da região pantaneira.', image: '/previews/river.svg', href: 'https://pt.wikipedia.org/wiki/Pantanal' },
  { id: 'triplice-alianca', labels: ['República Argentina', 'Argentina', 'República do Uruguai', 'Uruguai', 'Império do Brasil'], title: 'Tríplice Aliança', date: 'Brasil · Argentina · Uruguai', description: 'Aliança militar formada durante a Guerra do Paraguai pelos três países citados no capítulo.', image: '/previews/map.svg', href: 'https://pt.wikipedia.org/wiki/Tratado_da_Tr%C3%ADplice_Alian%C3%A7a' },
  { id: 'curupaiti', labels: ['Curupaiti', 'Curupayti'], title: 'Curupaiti', date: 'Paraguai', description: 'Local de uma batalha importante da Guerra do Paraguai, mencionado ao situar as operações no sul.', image: '/previews/paraguay-map.svg', href: 'https://pt.wikipedia.org/wiki/Batalha_de_Curupaiti' },
  { id: 'sebastopol', labels: ['Sebastopol'], title: 'Sebastopol', date: 'Crimeia', description: 'Cidade e fortaleza cuja importância estratégica serve de comparação para a posição de Humaitá.', image: '/previews/paraguay-map.svg', href: 'https://pt.wikipedia.org/wiki/Sebastopol' },
  { id: 'mato-grosso', labels: ['Mato Grosso'], title: 'Mato Grosso', date: 'Centro-Oeste do Brasil', description: 'A província de Mato Grosso era distante do litoral e difícil de abastecer; essa distância pesa no relato da expedição.', image: '/previews/map.svg', href: 'https://pt.wikipedia.org/wiki/Mato_Grosso' },
  { id: 'sao-paulo', labels: ['São Paulo'], title: 'São Paulo', date: 'Brasil', description: 'A coluna expedicionária atravessou a província de São Paulo a caminho do interior.', image: '/previews/map.svg', href: 'https://pt.wikipedia.org/wiki/S%C3%A3o_Paulo' },
  { id: 'minas-gerais', labels: ['Minas Gerais'], title: 'Minas Gerais', date: 'Brasil', description: 'Batalhões vindos de Ouro Preto e reforços atravessaram Minas Gerais durante a longa marcha.', image: '/previews/map.svg', href: 'https://pt.wikipedia.org/wiki/Minas_Gerais' },
  { id: 'segundo-reinado', labels: ['Segundo Reinado'], title: 'Segundo Reinado', date: 'Brasil · 1840–1889', description: 'Período imperial em que se passa o início de A escrava Isaura; a escravidão foi abolida em 1888, perto do fim do período.', image: '/previews/portrait.svg', href: 'https://pt.wikipedia.org/wiki/Segundo_Reinado' },
  { id: 'isaura', labels: ['Isaura'], title: 'Isaura', date: 'Personagem de ficção · 1875', description: 'Protagonista do romance de Bernardo Guimarães. A personagem é fictícia, mas sua situação remete à escravidão no Brasil.', image: '/paintings/redencao-de-cam.jpg', href: 'https://pt.wikisource.org/wiki/A_escrava_Isaura' },
  { id: 'leoncio', labels: ['Leoncio', 'Leôncio'], title: 'Leôncio', date: 'Personagem de ficção · 1875', description: 'Personagem do romance A escrava Isaura; sua chegada é anunciada no final do primeiro capítulo.', image: '/previews/portrait.svg', href: 'https://pt.wikisource.org/wiki/A_escrava_Isaura' },
  { id: 'simao-bacamarte', labels: ['Simão Bacamarte'], title: 'Simão Bacamarte', date: 'Personagem de ficção · 1882', description: 'Médico protagonista de O Alienista. A vila e a Casa Verde são elementos ficcionais de Machado de Assis.', image: '/previews/portrait.svg', href: 'https://pt.wikisource.org/wiki/O_Alienista' },
];

for (const reference of references) {
  const photo = referenceImages[reference.id];
  if (photo) {
    reference.image = photo.image;
    reference.imageCredit = photo;
  }
}

const plain = (text) => text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLocaleLowerCase('pt-BR');
const escapedLabels = references.flatMap((reference) => reference.labels.map((label) => ({ reference, label: plain(label) })))
  .sort((a, b) => b.label.length - a.label.length);
const escapeRegExp = (value) => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const termPattern = new RegExp(`(^|[^\\p{L}\\p{N}])(${escapedLabels.map((entry) => escapeRegExp(entry.label)).join('|')})(?=$|[^\\p{L}\\p{N}])`, 'gu');

export function linkChapterReferences(text) {
  const normalized = [];
  const offsets = [];
  let originalOffset = 0;
  for (const character of text) {
    const value = plain(character);
    for (const unit of value) {
      normalized.push(unit);
      offsets.push({ start: originalOffset, end: originalOffset + character.length });
    }
    originalOffset += character.length;
  }
  const source = normalized.join('');
  termPattern.lastIndex = 0;
  const parts = [];
  let cursor = 0;
  for (const match of source.matchAll(termPattern)) {
    const prefixLength = match[1].length;
    const start = match.index + prefixLength;
    const entry = escapedLabels.find(({ label }) => label === match[2]);
    if (!entry || !offsets[start] || !offsets[start + match[2].length - 1]) continue;
    const originalStart = offsets[start].start;
    const originalEnd = offsets[start + match[2].length - 1].end;
    if (originalStart < cursor) continue;
    if (originalStart > cursor) parts.push({ text: text.slice(cursor, originalStart) });
    parts.push({ text: text.slice(originalStart, originalEnd), reference: entry.reference });
    cursor = originalEnd;
  }
  if (cursor < text.length) parts.push({ text: text.slice(cursor) });
  return parts;
}
