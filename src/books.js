import { sourceChapters } from './chapter-index.js';

// Clássicos em domínio público, transcritos das edições indicadas.
function chapterData(id) {
  const chapters = sourceChapters[id] || [];
  return { sourceChapters: chapters, chapters: chapters.slice(0, 9).map(chapter => chapter.label) };
}

function cover({ bg, ink, title, author, year, art }) {
  return (x, w, h) => {
    x.fillStyle = bg; x.fillRect(0, 0, w, h);
    let seed = 7143;
    const random = () => ((seed = (seed * 16807) % 2147483647) - 1) / 2147483646;
    for (let i = 0; i < 28000; i++) {
      x.fillStyle = `rgba(33,22,12,${random() * .07})`;
      x.fillRect(random() * w, random() * h, 1 + random() * 2, 1 + random() * 3);
    }
    x.strokeStyle = ink; x.fillStyle = ink; x.textAlign = 'center';
    x.lineWidth = 3; x.strokeRect(47, 47, w - 94, h - 94);
    x.lineWidth = 1; x.strokeRect(59, 59, w - 118, h - 118);
    x.font = '26px Georgia'; x.fillText('E D I Ç Õ E S   E N T R E L I N H A S', w / 2, 115);
    x.lineWidth = 1.4; x.beginPath(); x.moveTo(100, 158); x.lineTo(w - 100, 158); x.stroke();
    x.font = '30px Georgia'; x.fillText(author.toUpperCase(), w / 2, 245);
    x.font = '95px Georgia';
    title.forEach((line, i) => x.fillText(line, w / 2, 392 + i * 108));
    x.save(); x.translate(w / 2, 1000);
    if (art === 'train') {
      x.lineWidth = 4;
      // Engraved rails converge beneath the Central do Brasil train clock.
      x.beginPath(); x.arc(0, -100, 91, Math.PI, Math.PI * 2); x.lineTo(91, 28); x.lineTo(-91, 28); x.closePath(); x.stroke();
      x.font = '32px Georgia'; x.fillText('CENTRAL', 0, -50);
      x.font = '72px Georgia'; x.fillText('✳', 0, -125);
      x.beginPath(); x.moveTo(-220, 250); x.lineTo(-25, 32); x.lineTo(25, 32); x.lineTo(220, 250); x.stroke();
      for (let i = 0; i < 6; i++) { x.beginPath(); x.moveTo(-150 + i * 24, 103 + i * 25); x.lineTo(150 - i * 24, 103 + i * 25); x.stroke(); }
      x.beginPath(); x.arc(-100, -224, 48, Math.PI * 1.1, Math.PI * 1.95); x.stroke();
    } else if (art === 'mourning') {
      // A black-bordered memorial cartouche and crossed, engraved quills.
      x.lineWidth = 3; x.beginPath(); x.ellipse(0, 0, 165, 240, 0, 0, Math.PI * 2); x.stroke();
      x.lineWidth = 5; x.beginPath(); x.moveTo(-122, 118); x.lineTo(0, -158); x.lineTo(125, 118); x.closePath(); x.stroke();
      x.beginPath(); x.moveTo(-122, 118); x.lineTo(125, 118); x.stroke();
      x.font = '74px Georgia'; x.fillText('✳', 0, -13);
      for (let i = 0; i < 12; i++) {
        x.save(); x.rotate(i * Math.PI / 6); x.beginPath(); x.moveTo(0, -178); x.quadraticCurveTo(50, -248, 0, -280); x.quadraticCurveTo(-42, -234, 0, -178); x.stroke(); x.restore();
      }
    } else if (art === 'plantation') {
      // Landscape and colonial farmhouse, with the river and cane fields.
      x.lineWidth = 4;
      x.beginPath(); x.moveTo(-270, 55); x.quadraticCurveTo(-130, -110, 0, 25); x.quadraticCurveTo(120, -90, 270, 36); x.stroke();
      x.beginPath(); x.moveTo(-270, 72); x.lineTo(270, 72); x.stroke();
      x.beginPath(); x.moveTo(-205, 56); x.lineTo(-90, -20); x.lineTo(25, 56); x.stroke();
      x.strokeRect(-180, 56, 180, 118); x.strokeRect(-125, 97, 50, 77); x.strokeRect(-20, 84, 43, 43);
      for (let i = -3; i <= 3; i++) { x.beginPath(); x.moveTo(i * 70, 180); x.lineTo(i * 70 - 25, 290); x.stroke(); }
      x.font = '28px Georgia'; x.fillText('CAMPOS · PARAÍBA', 0, 332);
    } else if (art === 'campaign') {
      // Engraved campaign map and winding river.
      x.lineWidth = 3; x.beginPath(); x.ellipse(0, 35, 235, 260, 0, 0, Math.PI * 2); x.stroke();
      x.beginPath(); x.moveTo(-180, -190); x.bezierCurveTo(150, -135, -130, 25, 170, 185); x.stroke();
      x.beginPath(); x.moveTo(-145, 210); x.lineTo(110, -215); x.stroke();
      for (const [px, py] of [[-115, -120], [80, -30], [-25, 125]]) { x.beginPath(); x.arc(px, py, 12, 0, Math.PI * 2); x.fill(); }
      x.font = '28px Georgia'; x.fillText('ALTO PARAGUAI', 0, 325);
    } else if (art === 'coast') {
      x.lineWidth = 4;
      x.beginPath(); x.moveTo(-245, 42); x.quadraticCurveTo(-90, -3, 20, 45); x.quadraticCurveTo(130, 91, 245, 37); x.stroke();
      x.beginPath(); x.moveTo(-245, 88); x.quadraticCurveTo(-80, 43, 22, 91); x.quadraticCurveTo(143, 132, 245, 83); x.stroke();
      x.beginPath(); x.moveTo(110, 41); x.bezierCurveTo(83, -15, 98, -98, 112, -175); x.stroke();
      x.beginPath(); x.moveTo(110, -151); x.quadraticCurveTo(33, -196, 21, -164); x.quadraticCurveTo(70, -164, 110, -151); x.quadraticCurveTo(124, -224, 157, -218); x.quadraticCurveTo(145, -177, 110, -151); x.quadraticCurveTo(183, -188, 212, -162); x.quadraticCurveTo(167, -145, 110, -151); x.stroke();
      x.font = '28px Georgia'; x.fillText('LENDA DO CEARÁ', 0, 260);
    } else if (art === 'forest') {
      x.lineWidth = 4;
      x.beginPath(); x.moveTo(-255, 96); x.quadraticCurveTo(-120, -15, 0, 85); x.quadraticCurveTo(118, -8, 255, 90); x.stroke();
      x.beginPath(); x.moveTo(-230, 132); x.quadraticCurveTo(-50, 96, 30, 134); x.quadraticCurveTo(130, 173, 245, 127); x.stroke();
      for (const cx of [-190, -118, -46, 42, 119, 189]) {
        const top = cx % 2 ? -135 : -95;
        x.beginPath(); x.moveTo(cx, 130); x.lineTo(cx, top + 95); x.moveTo(cx - 31, top + 85); x.lineTo(cx, top); x.lineTo(cx + 31, top + 85); x.stroke();
      }
      x.font = '28px Georgia'; x.fillText('SERTÃO DO PAQUEQUER', 0, 255);
    } else if (art === 'seminary') {
      x.lineWidth = 4;
      x.strokeRect(-165, -65, 330, 250);
      x.beginPath(); x.moveTo(-196, -65); x.lineTo(0, -205); x.lineTo(196, -65); x.closePath(); x.stroke();
      x.strokeRect(-42, 54, 84, 131);
      x.strokeRect(-122, -15, 56, 69); x.strokeRect(66, -15, 56, 69);
      x.beginPath(); x.moveTo(0, -205); x.lineTo(0, -253); x.moveTo(-22, -237); x.lineTo(22, -237); x.stroke();
      x.font = '28px Georgia'; x.fillText('MINAS GERAIS · 1872', 0, 260);
    } else {
      // The green, shuttered Casa Verde, the town's new asylum.
      x.lineWidth = 4; x.beginPath(); x.moveTo(-226, -30); x.lineTo(-180, -105); x.lineTo(180, -105); x.lineTo(226, -30); x.closePath(); x.stroke();
      x.strokeRect(-202, -28, 404, 244);
      for (const cx of [-147, -49, 49, 147]) {
        x.strokeRect(cx - 29, 5, 58, 70); x.beginPath(); x.moveTo(cx, 5); x.lineTo(cx, 75); x.moveTo(cx - 29, 40); x.lineTo(cx + 29, 40); x.stroke();
      }
      x.strokeRect(-35, 111, 70, 105);
      x.font = '36px Georgia'; x.fillText('CASA VERDE', 0, 280);
      for (const side of [-1, 1]) {
        x.beginPath(); x.arc(side * 230, 105, 42, Math.PI, 0); x.lineTo(side * 272, 210); x.lineTo(side * 188, 210); x.closePath(); x.stroke();
      }
    }
    x.restore();
    x.font = 'italic 28px Georgia'; x.fillText(`RIO DE JANEIRO · ${year}`, w / 2, h - 140);
    x.font = '24px Georgia'; x.fillText('BIBLIOTECA DE CLÁSSICOS', w / 2, h - 88);
    const shading = x.createLinearGradient(0, 0, 48, 0); shading.addColorStop(0, 'rgba(0,0,0,.2)'); shading.addColorStop(1, 'rgba(0,0,0,0)'); x.fillStyle = shading; x.fillRect(0, 0, 48, h);
  };
}

export const books = [
  {
    id: 'dom-casmurro', title: 'Dom Casmurro', author: 'Machado de Assis', year: '1899', number: '01',
    ...chapterData('dom-casmurro'),
    category: 'Romance', color: '#43342d', ink: '#e4d3ad',
    desc: 'Uma viagem de trem, versos interrompidos e a origem do apelido que dá nome a um dos romances mais conhecidos da literatura brasileira.',
    chapter: 'Capítulo I — Do título', sourceYear: '1899', sourceEdition: 'H. Garnier, Livreiro-Editor, 1899, pp. 1–2',
    sourceUrl: 'https://pt.wikisource.org/wiki/Dom_Casmurro/I',
    paragraphs: [
      'Uma noite destas, vindo da cidade para o Engenho Novo, encontrei no trem da Central um rapaz aqui do bairro, que eu conheço de vista e de chapéo. Comprimentou-me, sentou-se ao pé de mim, falou da lua e dos ministros, e acabou recitando-me versos. A viagem era curta, e os versos pôde ser que não fossem inteiramente maus. Succedeu, porém, que como eu estava cançado, fechei os olhos tres ou quatro vezes; tanto bastou para que elle interrompesse a leitura e mettesse os versos no bolso.',
      '— Continue, disse eu accordando.',
      '— Já acabei, murmurou elle.',
      '— São muito bonitos.',
      'Vi-lhe fazer um gesto para tiral-os outra vez do bolso, mas não passou do gesto; estava amuado. No dia seguinte entrou a dizer de mim nomes feios, e acabou alcunhando-me Dom Casmurro. Os visinhos, que não gostam dos meus hábitos reclusos e calados, deram curso á alcunha, que afinal pegou. Nem por isso me zanguei.',
      'Contei a anecdota aos amigos da cidade, e elles, por graça, chamam-me assim, alguns em bilhetes: «Dom Casmurro, domingo vou jantar com você.» — «Vou para Petropolis, Dom Casmurro; a casa é a mesma da Rhenania; vê se deixas essa caverna do Engenho Novo, e vae lá passar uns quinze dias commigo.» — «Meu caro Dom Casmurro, não cuide que o dispenso do theatro amanhã; venha e dormirá aqui na cidade; dou-lhe camarote, dou-lhe chá, dou-lhe cama; só não lhe dou moça.»',
      'Não consultes diccionarios. Casmurro não está aqui no sentido que elles lhe dão, mas no que lhe poz o vulgo de homem calado e mettido comsigo. Dom veiu por ironia, para attribuir-me fumos de fidalgo. Tudo por estar cochilando! Também não achei melhor titulo para a minha narração; se não tiver outro d’aqui até ao fim do livro, vae este mesmo. O meu poeta do trem ficará sabendo que não lhe guardo rancor. E com pequeno esforço, sendo o titulo seu, poderá cuidar que a obra é sua.',
      'Ha livros que apenas terão isso dos seus autores; alguns nem tanto.',
    ],
    spineBg: '#332721', spineInk: '#e4d3ad', backBg: '#43342d', backInk: '228,211,173', edge: '#d6c49d',
    front: cover({ bg: '#43342d', ink: '#e4d3ad', title: ['Dom', 'Casmurro'], author: 'Machado de Assis', year: '1899', art: 'train' }),
  },
  {
    id: 'bras-cubas', title: 'Memórias Póstumas de Brás Cubas', author: 'Machado de Assis', year: '1881', number: '02',
    ...chapterData('bras-cubas'),
    category: 'Romance', color: '#403a35', ink: '#e1d5bd',
    desc: 'O narrador começa pelo fim: da sepultura, recorda o próprio enterro e apresenta a ideia que, segundo ele, foi a verdadeira causa de sua morte.',
    chapter: 'Capítulo I — Óbito do autor', sourceYear: '1881', sourceEdition: 'Typographia Nacional, 1881, pp. 9–12',
    sourceUrl: 'https://pt.wikisource.org/wiki/Mem%C3%B3rias_P%C3%B3stumas_de_Br%C3%A1s_Cubas/I',
    paragraphs: [
      'Algum tempo hesitei se devia abrir estas memorias pelo principio ou pelo fim, isto é, se poria em primeiro logar o meu nascimento ou a minha morte. Supposto o uso vulgar seja começar pelo nascimento, duas considerações me levaram a adoptar differente methodo: a primeira é que eu não sou propriamente um autor defunto, mas um defunto autor, para quem a campa foi outro berço; a segunda é que o escripto ficaria assim mais galante e mais novo.',
      'Moysés, que tambem contou a sua morte, não a poz no introito, mas no cabo: differença radical entre este livro e o Pentateuco.',
      'Dito isto, expirei ás duas horas da tarde de uma sexta feira do mez de agosto de 1869, na minha bella chacara de Catumby. Tinha uns sessenta e quatro annos, rijos e prosperos, era solteiro, possuia cerca de tresentos contos e fui acompanhado ao cemiterio por onze amigos. Onze amigos! Verdade é que não houve cartas nem annuncios.',
      'Accresce que chovia — peneirava — uma chuvinha miuda, triste e constante, tão constante e tão triste, que levou um daquelles fieis da ultima hora a intercalar esta engenhosa idéa no discurso que proferiu á beira de minha cova: — «Vós, que o conhecestes, meus senhores, vós podeis dizer commigo que a natureza parece estar chorando a perda irreparavel de um dos mais bellos caracteres que tem honrado a humanidade.',
      'Este ar sombrio, estas gotas do céu, aquellas nuvens escuras que cobrem o azul como um crepe funereo, tudo isso é a dor crua e má que lhe róe á natureza as mais intimas entranhas; tudo isso é um sublime louvor ao nosso illustre finado.»',
      'Bom e fiel amigo! Não, não me arrependo das vinte apolices que lhe deixei. E foi assim que cheguei á clausula dos meus dias; foi assim que me encaminhei para o undiscovered country de Hamlet, sem as ancias nem as duvidas do moço principe, mas pausado e tropego, como quem se retira tarde do expectaculo. Tarde e aborrecido. Viram-me ir umas nove ou dez pessoas, entre ellas tres senhoras, — minha irmã Sabina, casada com o Cotrim, — a filha, um lyrio do valle, — e...',
      'Tenham paciencia! daqui a pouco lhes direi quem era a terceira senhora. Contentem-se de saber que essa anonyma, ainda que não parenta, padeceu mais do que as parentas. É verdade, padeceu mais. Não digo que se carpisse, não digo que se deixasse rolar pelo chão, epileptica. Nem o meu obito era cousa altamente dramatica... Um solteirão que expira aos sessenta e quatro annos, não parece que reuna em si todos os elementos de uma tragedia. E dado que sim, o que menos convinha a essa anonyma era apparental-o.',
      'De pé, á cabeceira da cama, com os olhos estupidos, a boca entreaberta, a triste senhora mal podia crer na minha extincção.',
      '— Morto! morto! dizia consigo.',
      'E a imaginação della, como as cegonhas que um illustre viajante viu desferirem o vôo desde o Ilysso ás ribas africanas, sem embargo das ruinas e dos tempos, — a imaginação dessa senhora também voou por sobre os destroços presentes até ás ribas de uma Africa juvenil... Deixal-a ir; lá iremos mais tarde; lá iremos quando eu me restituir aos primeiros annos.',
      'Agora, quero morrer tranquillamente, methodicamente, ouvindo os soluços das damas, as fallas baixas dos homens, a chuva que tamborila nas folhas de tinhorão da chacara, e o som estridulo de uma navalha que um amolador está afiando lá fóra, à porta de um correeiro. Juro-lhes que essa orchestra da morte foi muito menos triste do que podia parecer. De certo ponto em deante chegou a ser deliciosa.',
      'A vida estrebuchava-me no peito, com uns impetos de vaga marinha, esvaia-se-me a consciencia, eu descia á immobilidade physica e moral, e o corpo fazia-se-me planta, e pedra, e lodo, e cousa nenhuma.',
      'Morri de uma pneumonia; mas se lhe disser que foi menos a pneumonia, do que uma idéa grandiosa e util, a causa da minha morte, é possível que o leitor me não creia, e todavia é verdade. Vou expor-lhe summariamente o caso. Julgue-o por si mesmo.',
    ],
    spineBg: '#34302b', spineInk: '#e1d5bd', backBg: '#403a35', backInk: '225,213,189', edge: '#d6cbb9',
    front: cover({ bg: '#403a35', ink: '#e1d5bd', title: ['Memórias', 'Póstumas de', 'Brás Cubas'], author: 'Machado de Assis', year: '1881', art: 'mourning' }),
  },
  {
    id: 'alienista', title: 'O Alienista', author: 'Machado de Assis', year: '1882', number: '03',
    ...chapterData('alienista'),
    category: 'Novela', color: '#40533e', ink: '#eadbb9',
    desc: 'Em Itaguaí, o médico Simão Bacamarte decide dedicar-se ao estudo da mente e convence a vila a construir a Casa Verde.',
    chapter: 'Capítulo I — De como Itaguaí ganhou uma casa de Orates', sourceYear: '1882', sourceEdition: 'Lombaerts & C., 1882, pp. 1–7',
    sourceUrl: 'https://pt.wikisource.org/wiki/O_Alienista/I',
    paragraphs: [
      'As chronicas da villa de Itaguahy dizem que em tempos remotos vivera alli um certo medico, o Dr. Simão Bacamarte, filho da nobreza da terra e o maior dos medicos do Brazil, de Portugal e das Hespanhas. Estudára em Coimbra e Padua. Aos trinta e quatro annos regressou ao Brazil, não podendo el-rei alcançar delle que ficasse em Coimbra, regendo a universidade, ou em Lisboa, expedindo os negocios da monarchia.',
      '— “A sciencia, disse elle a Sua Magestade, é o meu emprego unico; Itaguahy é o meu universo.”',
      'Dito isto, metteu-se em Itaguahy, e entregou-se de corpo e alma ao estudo da sciencia, alternando as curas com as leituras, e demonstrando os theoremas com cataplasmas. Aos quarenta annos casou com D. Evarista da Costa e Mascarenhas, senhora de vinte e cinco annos, viuva de um juiz de fóra, e não bonita nem sympathica. Um dos tios delle, caçador de pacas perante o Eterno, e não menos franco, admirou-se de semelhante escolha e disse-lh’o. Simão Bacamarte explicou-lhe que D. Evarista reunia condições physiologicas e anatomicas de primeira ordem, digeria com facilidade, dormia regularmente, tinha bom pulso, e excellente vista; estava assim apta para dar-lhe filhos robustos, sãos e intelligentes. Se além dessas prendas, — unicas dignas da preoccupação de um sabio, D. Evarista era mal composta de feições, longe de lastimal-o, agradecia-o a Deus, porquanto não corria o risco de preterir os interesses da sciencia na contemplação exclusiva, miuda e vulgar da consorte.',
      'D. Evarista mentiu ás esperanças do Dr. Bacamarte, não lhe deu filhos robustos nem mofinos. A indole natural da sciencia é a longanimidade; o nosso medico esperou tres annos, depois quatro, depois cinco. Ao cabo desse tempo fez um estudo profundo da materia, releu todos os escriptores arabes e outros, que trouxera para Itaguahy, enviou consultas ás universidades italianas e allemãs, e acabou por aconselhar á mulher um regimen alimenticio especial. A illustre dama, nutrida exclusivamente com a bella carne de porco de Itaguahy, não atendeu ás admoestações do esposo; e á sua resistencia, — explicavel, mas inqualificavel, — devemos a total extincção da dynastia dos Bacamartes.',
      'Mas a sciencia tem o ineffavel dom de curar todas as maguas; o nosso medico mergulhou inteiramente no estudo e na pratica da medicina. Foi então que um dos recantos desta lhe chamou especialmente a attenção, — o recanto psychico, o exame de pathologia cerebral. Não havia na colonia, e ainda no reino, uma só autoridade em semelhante materia, mal explorada, ou quasi inexplorada.',
      'Simão Bacamarte comprehendeu que a sciencia lusitana, e particularmente a brazileira, podia cobrir-se de “louros immarcesciveis”, — expressão usada por elle mesmo, mas em um arroubo de intimidade domestica; exteriormente era modesto, segundo convém aos sabedores.',
      '— A saude da alma, bradou elle, é a occupação mais digna do medico.',
      '— Do verdadeiro medico, emendou Crispim Soares, boticario da villa, e um dos seus amigos e commensaes.',
      'A vereança de Itaguahy, entre outros peccados de que é arguida pelos chronistas, tinha o de não fazer caso dos dementes. Assim é que cada louco furioso era trancado em uma alcova, na propria casa, e, não curado, mas descurado, até que a morte o vinha defraudar do beneficio da vida; os mansos andavam á solta pela rua.',
      'Simão Bacamarte entendeu desde logo reformar tão ruim costume; pediu licença á Camara para agasalhar e tratar no edificio que ia construir todos os loucos de Itaguahy, e das demais villas e cidades, mediante um estipendio, que a Camara lhe daria quando a familia do enfermo o não pudesse fazer. A proposta excitou a curiosidade de toda a villa, e encontrou grande resistencia, tão certo é que difficilmente se desarraigam habitos absurdos, ou ainda maus.',
      'A idéa de metter os loucos na mesma casa, vivendo em commum, pareceu em si mesma um symptoma de demencia e não faltou quem o insinuasse á propria mulher do medico.',
      '— Olhe, D. Evarista, disse-lhe o Padre Lopes, vigario do logar, veja se seu marido dá um passeio ao Rio de Janeiro. Isso de estudar sempre, sempre, não é bom, vira o juizo.',
      'D. Evarista ficou aterrada, foi ter com o marido, disse-lhe que estava com desejos, um principalmente, o de vir ao Rio de Janeiro e comer tudo o que a elle lhe parecesse adequado a certo fim. Mas aquelle grande homem, com a rara sagacidade que o distinguia, penetrou a intenção da esposa e redarguiu-lhe sorrindo que não tivesse medo.',
      'Dalli foi á Camara, onde os vereadores debatiam a proposta, e defendeu-a com tanta eloquencia, que a maioria resolveu autorisal-o ao que pedia, votando ao mesmo tempo um imposto destinado a subsidiar o tratamento, alojamento e mantimento dos doidos pobres. A materia do imposto não foi facil achal-a; tudo estava tributado em Itaguahy. Depois de longos estudos, assentou-se em permittir o uso de dous penachos nos cavallos dos enterros.',
      'Quem quizesse emplumar os cavallos de um coche mortuario pagaria dous tostões á Camara, repetindo-se tantas vezes esta quantia quantas fossem as horas decorridas entre o fallecimento e a ultima benção na sepultura. O escrivão perdeu-se nos calculos arithmeticos do rendimento possivel da nova taxa; e um dos vereadores, que não acreditava na empreza do medico, pediu que se relevasse o escrivão de um trabalho inutil.',
      '— Os calculos não são precisos, disse elle, porque o Dr. Bacamarte não arranja nada. Quem é que viu agora metter todos os doidos dentro da mesma casa?',
      'Enganava-se o digno magistrado; o medico arranjou tudo. Uma vez empossado da licença começou logo a construir a casa. Era na Rua Nova, a mais bella rua de Itaguahy n’aquelle tempo; tinha cincoenta janellas por lado, um pateo no centro, e numerosos cubiculos para os hospedes. Como fosse grande arabista, achou no Alcorão que Mahomet declara veneraveis os doidos, pela consideração de que Alá lhes tira o juizo para que não pequem.',
      'A idéa pareceu-lhe bonita e profunda, e elle a fez gravar no frontispicio da casa; mas, como tinha medo ao vigario, e por tabella ao bispo, attribuiu o pensamento a Bento VIII, merecendo com essa fraude, aliás pia, que o Padre Lopes lhe contasse, ao almoço, a vida d’aquelle pontifice eminente.',
      'A Casa Verde foi o nome dado ao asylo, por allusão á côr das janellas, que pela primeira vez appareciam verdes em Itaguahy. Inaugurou-se com immensa pompa; de todas as villas e povoações proximas, e até remotas, e da propria cidade do Rio de Janeiro, correu gente para assistir ás ceremonias, que duraram sete dias. Muitos dementes já estavam recolhidos; e os parentes tiveram occasião de ver o carinho paternal e a caridade christã com que elles iam ser tratados. D. Evarista, contentissima com a gloria do marido, vestiu-se luxuosamente, cobriu-se de joias, flores e sedas.',
      'Ella foi uma verdadeira rainha naquelles dias memoraveis; ninguem deixou de ir visital-a duas e tres vezes, apesar dos costumes caseiros e recatados do seculo, e não só a cortejavam como a louvavam; porquanto, — e este facto é um documento altamente honroso para a sociedade do tempo, — porquanto viam nella a feliz esposa de um alto espirito, de um varão illustre, e, se lhe tinham inveja, era a santa e nobre inveja dos admiradores.',
      'Ao cabo de sete dias expiraram as festas publicas; Itaguahy tinha finalmente uma casa de Orates.',
    ],
    spineBg: '#354535', spineInk: '#eadbb9', backBg: '#40533e', backInk: '234,219,185', edge: '#e1d4b4',
    front: cover({ bg: '#40533e', ink: '#eadbb9', title: ['O', 'Alienista'], author: 'Machado de Assis', year: '1882', art: 'casa-verde' }),
  },
  {
    id: 'escrava-isaura', title: 'A escrava Isaura', author: 'Bernardo Guimarães', year: '1875', number: '04',
    ...chapterData('escrava-isaura'),
    category: 'Histórico', color: '#76513f', ink: '#f0dfbe',
    desc: 'Romance ambientado no Segundo Reinado. O primeiro capítulo contrapõe a paisagem de Campos à condição de Isaura, escravizada apesar da educação que recebeu.',
    chapter: 'Capítulo I', sourceYear: '1875', sourceEdition: 'B. L. Garnier, Rio de Janeiro, 1875, pp. 15–24',
    sourceUrl: 'https://pt.wikisource.org/wiki/A_escrava_Isaura/I',
    sourceNote: 'A cantiga central foi abreviada nesta leitura; a transcrição integral está na fonte.',
    paragraphs: [
      'Era nos primeiros annos do reinado do S^{r} D. Pedro 2º.',
      'No fertil e opulento municipio de Campos de Goitacases, á margem do Parahyba, a pouca distancia da villa de Campos, havia uma linda e magnifica fazenda.',
      'Era um edificio de harmoniosas proporções, vasto e luxuoso, situado em aprazivel vargedo ao sopé de elevadas collinas cobertas de mata em parte devastada pelo machado do lavrador.',
      'Longe em derredor a natureza ostentava-se ainda em toda a sua primitiva e selvatica rudeza; mas por perto, em torno da deliciosa vivenda, a mão do homem tinha convertido a bronca selva, que cobria o solo, em jardins e pomares deleitosos, em viçosos gramáes e pingues pastagens, sombreados aqui e acolá por gameleiras gigantescas, peróbas, cedros e copahybas, que attestavão o vigor da antiga floresta.',
      'Quasi não se via ahi muro, cerca, nem vallado; jardim, horta, pomar, pastagens, e plantios circumvisinhos erão divididos por viçosas e verdejantes sebes de bambús, piteiras, espinheiros e gravatás, que davão ao todo o aspecto do mais aprazivel e delicioso vergél.',
      'A casa apresentava a frente ás collinas. Entrava-se nella por um lindo alpendre todo enredado de flores trepadeiras, ao qual subia-se por uma escada de cantaria de seis a sete degráos. Os fundos erão occupados por outros edificios accessorios, senzalas, pateos, curraes e celeiros, por trás dos quaes se estendia o jardim, a horta, e um immenso pomar, que ia perder-se na barranca do grande rio.',
      'Era por uma linda e calmosa tarde de outubro. O sol não era ainda posto, e parecia boiar no horizonte suspenso sobre rolos de espuma de cores cambiantes orlados de fevras de ouro. A viração saturada de balsamicos effluvios se espreguiçava ao longo das ribanceiras accordando apenas frouxos rumores pela copa dos arvoredos, e fazendo farfalhar de leve o tope dos coqueiros, que miravão-se garbosos nas lucidas e tranquillas agoas da ribeira.',
      'Corria um bello tempo; a vegetação reanimada por moderadas chuvas ostentava-se fresca, viçosa e luxuriante; a agoa do rio ainda não turvada pelas grandes inchentes, rolando com magestosa lentidão, reflectia em toda a pureza os esplendidos coloridos do horizonte, e o nitido verdor das selvosas ribanceiras. As aves, dando repouso ás azas fatigadas do continuo voejar pelos pomares, prados e balsedos visinhos, começavão a preludiar seos cantos vespertinos.',
      'O clarão do sol poente por tal sorte abraseava as vidraças do edificio, que este parecia estar sendo devorado pelas chammas de um incendio interior. Entretanto quer no interior quer em derredor reinava fundo silencio, e perfeita tranquillidade. Bois truculentos, e nedias novilhas deitadas pelo gramal, ruminavão tranquillamente á sombra de altos troncos.',
      'As aves domesticas grasinavão em torno da casa, balavão as ovelhas, e mugião algumas vacas, que vinhão por si mesmas procurando os curraes; mas não se ouvia, nem se divisava vóz nem figura humana. Parecia que ali não se achava morador algum. Sómente as vidraças arregaçadas de um grande salão da frente e os batentes da porta da entrada abertos de par em par denunciavão, que nem todos os habitantes daquella sumptuosa propriedade se achavão ausentes.',
      'A favor desse quasi silencio harmonioso da natureza ouvia-se distinctamente o harpejo de um piano casando-se a uma voz de mulher, voz melodiosa, suave, apaixonada, e do timbre o mais puro e fresco que se pode imaginar.',
      'Posto que um tanto abafado, o canto tinha uma vibração sonora, ampla e volumosa, que revelava excellente e vigorosa organisação vocal. O tom velado e melancolico da cantiga, parecia gemido suffocado de uma alma solitaria e soffredora.',
      'Era essa a unica voz, que quebrava o silencio da vasta e tranquilla vivenda. Por fora tudo parecia escutal-a em mistico e profundo recolhimento.',
      'As coplas, que cantava, dizião assim? Desd’o berço respirando os ares da escravidão… [As estrofes seguintes foram abreviadas nesta leitura.]',
      'As notas sentidas e maviosas daquelle cantar escapando pelas janellas abertas e echoando ao longe em derredor, dão vontade de conhecer a sereia, que tão lindamente canta. Se não é sereia, sómente um anjo pode cantar assim.',
      'Subamos os degráos, que conduzem ao alpendre, todo engrinaldado de viçosos festões e lindas flores, que serve de vestibulo ao edificio. Entremos sem cerimonia. Logo á direita do corredor encontramos aberta uma larga porta, que dá entrada á sala de recepção, vasta e luxuosamente mobiliada. Acha-se ali sósinha e sentada ao piano uma bella e nobre figura de moça. As linhas do perfil desenhão-se distinctamente entre o ébano da caixa do piano, e as bastas madeixas ainda mais negras do que elle.',
      'São tão puras e suaves essas linhas, que fascinão os olhos, enlevão a mente, e para lisão toda analyse. A tez é como o marfim do teclado, alva que não deslumbra, embaçada por uma nuança delicada, que não saberieis dizer se é leve palidez ou cor de rosa desmaiada. O collo donoso e do mais puro lavor sustenta com graça ineffavel o busto maravilhoso.',
      'Os cabellos soltos e fortemente ondulados se despenhão caracolando pelos hombros em espessos e luzidios rolos, e como franjas negras escondião quasi completamente o dorso da cadeira, a que se achava recostada. Na fronte calma e lisa como marmore polido, a luz do occaso esbatia um roseo e suave reflexo; dil-a-hieis mysteriosa lampada de alabastro guardando no seio diaphano o fogo celeste da inspiração. Tinha a face voltada para as janellas, e o olhar vago pairava-lhe pelo espaço.',
      'Os encantos da gentil cantora erão ainda realçados pela singeleza, e diremos quasi pobreza do modesto trajar. Um vestido de chita ordinaria azul-clara desenhava-lhe perfeitamente com encantadora simplicidade o porte esbelto e a cintura delicada, e desdobrando-se-lhe em roda em amplas ondulações parecia uma nuvem, do seio da qual se erguia a cantora como Venus nascendo da espuma do mar, ou como um anjo surgindo d’entre brumas vaporosas.',
      'Uma pequena cruz de azeviche presa ao pescoço por uma fita preta constituia o seu unico ornamento.',
      'Apenas terminado o canto, a moça ficou um momento a cismar com os dedos sobre o teclado como escutando os derradeiros echos da sua canção.',
      'Entretanto abre-se subtilmente a cortina de cassa de uma das portas interiores, e uma nova personagem penetra no salão. Era tambem uma formosa dama ainda no viço da mocidade, bonita, bem feita e elegante. A riqueza e o primoroso esmero do trajar, o porte altivo e senhoril, certo balanceio affectado e languoroso dos movimentos davão-lhe esse ar pretencioso, que acompanha toda a moça bonita e rica, ainda mesmo quando está sozinha.',
      'Mas com todo esse luxo e donaire de grande senhora nem por isso sua grande belleza deixava de ficar algum tanto eclypsada em presença das formas puras e correctas, da nobre singeleza, e dos tão naturaes e modestos ademanes da cantora. Todavia Malvina era linda, encantadora mesmo, e posto que vaidosa de sua formosura e alta posição, transluzia-lhe nos grandes e meigos olhos azues toda a nativa bondade de seo coração.',
      'Malvina approximou-se de manso e sem ser presentida para junto da cantora, collocando-se por detrás della esperou que terminasse a ultima copla.',
      '— Isaura!... disse ella pousando de leve a delicada mãosinha sobre o hombro da cantora.',
      '— Ah! é a senhora?! — respondeo Isaura voltando-se sobressaltada. — Não sabia, que estava ahi me escutando.',
      '— Pois que tem isso?... continúa a cantar;... tens a voz tão bonita!... mas eu antes quizéra que cantasses outra cousa; por que é, que você gosta tanto dessa cantiga tão triste, que você aprendeo não sei onde?...',
      '— Gosto della, porque acho-a bonita, e porque... ah! não devo fallar...',
      '— Falla, Isaura. Já não te disse, que nada me deves esconder, e nada recear de mim?...',
      '— Porque me faz lembrar de minha mãe, que eu não conheci, coitada!... Mas se a senhora não gosta dessa cantiga, não a cantarei mais.',
      '— Não gosto que a cantes, não, Isaura. Hão de pensar que és maltratada, que és uma escrava infeliz, victima de senhores barbaros e crueis. Entretanto passas aqui uma vida, que faria inveja a muita gente livre. Gozas da estima de teos senhores. Derão-te uma educação, como não tiverão muitas ricas e illustres damas, que eu conheço. És formosa, e tens uma cor tão linda, que ninguem dirá que gyra em tuas veias uma só gota de sangue africano.',
      'Bem sabes, quanto minha boa sogra antes de expirar te recommendava a mim e a meo marido. Hei-de respeitar sempre as recommendações daquella santa mulher, e tu bem vês, sou mais tua amiga, do que tua senhora. Oh! não; não cabe em tua boca essa cantiga lastimosa, que tanto gostas de cantar. — Não quero, — continuou em tom de branda reprehensão, — não quero que a cantes mais, ouviste, Isaura?... senão, fecho-te o meo piano.',
      '— Mas, senhora, apezar de tudo isso que sou eu mais do que uma simples escrava? Essa educação, que me derão, e essa belleza, que tanto me gabão, de que me servem?... são trastes de luxo collocados na senzala do africano. A senzala nem por isso deixa de ser o que é; uma senzala.',
      '— Queixas-te da tua sorte, Isaura?...',
      '— Eu, não senhora; não tenho motivo;... o que quero dizer com isto é que apezar de todos esses dotes e vantagens, que me attribuem, sei conhecer o meo lugar.',
      '— Anda lá; já sei o que te amofina; a tua cantiga bem o diz. Bonita como és, não podes deixar de ter algum namorado.',
      '— Eu, senhora!... por quem é, não pense nisso.',
      '— Tu mesma; pois que tem isso?... não te vexes; pois é alguma cousa do outro mundo? Vamos já, confessa; tens um amante, e é por isso, que lamentas não teres nascido livre para poder amar aquelle que te agradou, e a quem cahiste em graça, não é assim?...',
      '— Perdôe-me, sinhá Malvina; — replicou a escrava com um candido sorriso. — Está muito enganada; estou tão longe de pensar nisso!',
      '— Qual longe!... não me enganas, minha rapariguinha!... tu amas, e és mui linda e bem prendada para te inclinares a um escravo; só se fosse um escravo, como tu és, o que duvido que haja no mundo. Uma menina como tu, bem pode conquistar o amor de algum guapo mocetão, e eis ahi a causa da choradeira de tua canção. Mas não te afflijas, minha Isaura; eu te protesto, que ámanhã mesmo terás a tua liberdade; deixa Leoncio chegar; é uma vergonha, que uma rapariga como tu se veja ainda na condição de escrava.',
      '— Deixe-se disso, senhora; eu não penso em amores e muito menos em liberdade; ás vezes fico triste á toa, sem motivo nenhum...',
      '— Não importa. Sou eu, quem quero que sejas livre, e has-de sel-o.',
      'Neste ponto a conversação foi cortada por um tropel de cavalleiros, que chegavão e apeavão-se á porta da fazenda.',
      'Malvina e Isaura correrão á janella a ver quem erão.',
    ],
    spineBg: '#694535', spineInk: '#f0dfbe', backBg: '#76513f', backInk: '240,223,190', edge: '#e2d1ae',
    front: cover({ bg: '#76513f', ink: '#f0dfbe', title: ['A escrava', 'Isaura'], author: 'Bernardo Guimarães', year: '1875', art: 'plantation' }),
  },
  {
    id: 'retirada-laguna', title: 'A Retirada da Laguna', author: 'Visconde de Taunay', year: '1874', number: '05',
    ...chapterData('retirada-laguna'),
    category: 'Histórico', color: '#3c4845', ink: '#ead9b8',
    desc: 'Relato de campanha da Guerra do Paraguai. O primeiro capítulo explica as distâncias, as dificuldades logísticas e o plano de avançar pelo norte.',
    chapter: 'Capítulo I — Formação de um corpo de Exército destinado a atuar, pelo norte, sobre o Alto Paraguai. Distâncias e dificuldades de organização.', sourceYear: '1874', sourceEdition: 'Tradução de Salvador de Mendonça; edição de 1874', translator: 'Salvador de Mendonça',
    sourceUrl: 'https://pt.wikisource.org/wiki/A_Retirada_da_Laguna/I',
    paragraphs: [
      'Para dar uma idéia, algum tanto exata, dos lugares onde, em 1867, ocorreram os acontecimentos cuja narrativa se vai ler, convém lembrar que, ao finalizar de 1864, havendo o Paraguai atacado e invadido, simultaneamente, o Império do Brasil e a República Argentina, achava-se, decorridos dois anos, após tal investida, reduzido a defender o próprio território, invadido do lado do sul, pelas forças conjuntas das duas potências aliadas, a quem coadjuvava pequeno contingente de tropas da República do Uruguai.',
      'Ao rio oferecia o caudaloso Paraguai mais vantagens à expugnação da fortaleza de Humaitá, que, pela posição especial, se convertera na chave estratégica do país, assumindo, nesta porfia encarniçada, a importância de Sebastopol, na Campanha da Criméia.',
      'Ao norte, do lado de Mato Grosso, eram as operações infinitamente mais difíceis, não só porque ocorriam a milhares de quilômetros do litoral atlântico, onde se concentram todos os recursos do Brasil, como ainda por causa das inundações do rio Paraguai, que, cortando na parte superior do curso terras baixas e planas, transborda anualmente, a submergir então regiões extensíssimas.',
      'Consistia o plano de ataque mais natural em subir as águas do Paraguai, do lado da Argentina, até o coração da república inimiga e, do Brasil, descê-las a partir de Cuiabá, a capital mato-grossense que os paraguaios não haviam ocupado.',
      'Teria impedido à guerra arrastar-se durante cinco anos consecutivos esta conjugação de esforços simultâneos. Mas era-lhe a realização extraordinariamente difícil, devido às enormes distâncias a transpor. Basta lançar os olhos sobre um mapa da América do rio e examinar o interior do Brasil, em grande parte desabitado, para que qualquer observador de tal se convença logo.',
      'No momento em que se enceta esta narrativa, estava, pois, a atenção geral das potências aliadas quase exclusivamente voltada para o sul, para as operações de guerra, travadas em torno de Curupaiti e Humaitá. Quanto ao plano primitivo fora ele mais ou menos abandonado; quando muito ia servir de pretexto a que se infligissem as mais terríveis provações a uma pequena coluna expedicionária, quase perdida nos imensos e desertos sertões brasileiros.',
      'Em 1865 — ao arrebentar a guerra que Francisco Solano Lopes, o presidente do Paraguai, na América do rio suscitara sem maior motivo do que os ditames da ambição pessoal; quando muito a invocar o vão pretexto da manutenção do equilíbrio internacional — o Brasil, obrigado a defender honra e direitos, dispôs-se, denodadamente, para a luta.',
      'A fim de reagir contra o inimigo, em todos os pontos onde podia enfrentá-lo, o plano da invasão do Paraguai setentrional acudiu naturalmente a todos os espíritos; preparou-se uma expedição para este fim.',
      'Não foi infelizmente este projeto de diversão realizado nas proporções que sua importância exigia; e, mais infelizmente ainda, os contingentes acessórios sobre os quais contávamos, para avolumar o corpo de Exército expedicionário, durante a longa jornada através de São Paulo e Minas Gerais, falharam em grande parte ou desapareceram devido à cruel epidemia de varíola e às deserções que esta provocou.',
      'Marchou-se lentamente: provinha a demora de muitas causas, sobretudo da dificuldade do abastecimento de víveres.',
      'Foi somente em julho (partira do Rio de Janeiro em abril) que a coluna pôde organizar-se em Uberaba, chegando-lhe os quadros a atingir cerca de três mil homens. Reforçavam-na vários batalhões que, de Ouro Preto, trouxera o coronel José Antônio da Fonseca Galvão.',
      'Não sendo esta força ainda suficiente para uma ofensiva, seu comandante, Manuel Pedro Drago, encaminhou-a para a capital de Mato Grosso, a fim de avolumá-la. Assim se adiantou em direção ao noroeste, até as margens do Paranaíba, quando ali recebeu peremptórias ordens do governo, levando-lhe instruções formais de marchar para o distrito de Miranda, então ocupado pelo inimigo.',
      'Tal injunção, no ponto a que chegáramos, impunha como forçado corolário obrigar-nos a descer em direção ao rio Coxim e a contornar em seguida a serra de Maracaju, por sua base ocidental, anualmente invadida pelas águas do Paraguai. Assim, pois, estava a expedição condenada a atravessar extensíssima região empestada pelas febres palustres.',
      'A 20 de dezembro atingiu o Coxim, ainda sob o comando do coronel Galvão, recentemente investido da chefia e, pouco depois, graduado em brigadeiro.',
      'Embora sem valor algum estratégico, tinha pelo menos o acampamento do Coxim uma altitude que lhe garantia a salubridade. Não tardou, porém, que a enchente havendo-o ilhado e isolado, ali passasse a força pelas mais cruéis privações, sofrendo até fome.',
      'Após longas hesitações, forçoso se tornou romper ao acaso, através do pestilento pantanal, onde a coluna foi desde o princípio provada pelas febres. Uma das primeiras vítimas veio a ser o próprio e infeliz chefe, falecido à margem do rio Negro. Afinal, arrastando-se penosamente, conseguiu atingir a povoação de Miranda a 396 quilômetros para o Sul. Aí uma epidemia climática de novo gênero, a paralisia reflexa, ou beribéri, acabrunhou-a, dizimando-a ainda mais.',
      'Dois anos quase haviam decorrido, desde a nossa partida do Rio de Janeiro. Lentamente descrevêramos imenso circuito de dois mil cento e doze quilômetros. E já um terço de nossa gente perecera.',
    ],
    spineBg: '#303a39', spineInk: '#ead9b8', backBg: '#3c4845', backInk: '234,217,184', edge: '#c9bd9d',
    front: cover({ bg: '#3c4845', ink: '#ead9b8', title: ['A Retirada', 'da Laguna'], author: 'Visconde de Taunay', year: '1874', art: 'campaign' }),
  },
  {
    id: 'iracema', title: 'Iracema', author: 'José de Alencar', year: '1865', number: '06',
    ...chapterData('iracema'),
    category: 'Histórico', color: '#596b4d', ink: '#eee3c9',
    desc: 'Lenda do Ceará ambientada no encontro entre povos indígenas e colonizadores portugueses.',
    chapter: 'Capítulo I — Verdes mares', sourceYear: '1865', sourceEdition: 'Typ. de Vianna & Filhos, Rio de Janeiro, 1865',
    sourceUrl: 'https://pt.wikisource.org/wiki/Iracema/I', paragraphs: [],
    spineBg: '#46543d', spineInk: '#eee3c9', backBg: '#596b4d', backInk: '238,227,201', edge: '#d1c29d',
    front: cover({ bg: '#596b4d', ink: '#eee3c9', title: ['Iracema'], author: 'José de Alencar', year: '1865', art: 'coast' }),
  },
  {
    id: 'o-guarani', title: 'O Guarani', author: 'José de Alencar', year: '1857', number: '07',
    ...chapterData('o-guarani'),
    category: 'Histórico', color: '#3e5147', ink: '#eee3c9',
    desc: 'Romance histórico no Brasil colonial, entre a família de D. Antônio de Mariz e o indígena Peri.',
    chapter: 'Primeira Parte — Capítulo I: Cenário', sourceYear: '1857', sourceEdition: 'Edição de 1857, disponibilizada pela Wikisource',
    sourceUrl: 'https://pt.wikisource.org/wiki/O_Guarani/I/I', paragraphs: [],
    spineBg: '#34443c', spineInk: '#eee3c9', backBg: '#3e5147', backInk: '238,227,201', edge: '#cdbd99',
    front: cover({ bg: '#3e5147', ink: '#eee3c9', title: ['O Guarani'], author: 'José de Alencar', year: '1857', art: 'forest' }),
  },
  {
    id: 'o-seminarista', title: 'O Seminarista', author: 'Bernardo Guimarães', year: '1872', number: '08',
    ...chapterData('o-seminarista'),
    category: 'Romance', color: '#6a5040', ink: '#f0dfbe',
    desc: 'Romance de costumes ambientado no interior de Minas Gerais, publicado em 1872.',
    chapter: 'Capítulo I', sourceYear: '1872', sourceEdition: 'Rio de Janeiro: B. L. Garnier, 1875',
    sourceUrl: 'https://pt.wikisource.org/wiki/O_Seminarista/I', paragraphs: [],
    spineBg: '#594234', spineInk: '#f0dfbe', backBg: '#6a5040', backInk: '240,223,190', edge: '#d6c49d',
    front: cover({ bg: '#6a5040', ink: '#f0dfbe', title: ['O', 'Seminarista'], author: 'Bernardo Guimarães', year: '1872', art: 'seminary' }),
  },
];
