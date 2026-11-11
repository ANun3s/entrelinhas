# Entrelinhas

Acervo editorial em português com capas de livros em 3D, pinturas históricas e leitura por capítulo. O site traz oito clássicos brasileiros e mantém o papel antigo, os vincos e as bordas rasgadas como parte da identidade visual.

## Desenvolvimento

```sh
npm ci
npm run dev
```

Para gerar os arquivos estáticos:

```sh
npm run build
npm run preview
```

## Leitura

O índice inclui todos os capítulos e textos preliminares das edições selecionadas. O texto integral de cada página é carregado da Wikisource quando o leitor abre o capítulo; por isso, a leitura integral requer conexão com a internet. Cada capítulo mostra sua edição de referência e um link para a fonte.

## Publicação

O workflow em `.github/workflows/pages.yml` publica automaticamente na GitHub Pages a cada atualização da branch `main` e em execuções manuais. O endereço esperado é <https://anun3s.github.io/entrelinhas/>.

## Créditos

- As transcrições literárias são obras em domínio público fornecidas pela Wikisource.
- As reproduções de pinturas têm atribuição e links de origem na própria galeria.
- O carrossel Three.js, a animação de dissolução e o componente PaperCrumple foram adaptados para este site.
