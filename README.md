# Oliveira Segurança Executiva — Landing Page

Landing page estática e institucional para a **Oliveira Segurança Executiva**, empresa de proteção pessoal, escolta VIP e segurança executiva. Site premium, em tons de preto e dourado, focado em gerar contato via WhatsApp.

## Tecnologias

- [Vite](https://vitejs.dev/) + [React](https://react.dev/)
- CSS puro, modularizado por seção (sem Tailwind)
- [lucide-react](https://lucide.dev/) para ícones
- Google Fonts: **Bebas Neue** (títulos) e **Inter** (textos)
- Sem backend, sem banco de dados, sem painel admin

## Como rodar localmente

```bash
npm install
npm run dev
```

O projeto abre em `http://localhost:5173`.

## Como gerar o build de produção

```bash
npm run build
```

Os arquivos finais são gerados na pasta `dist/`. Para visualizar o build localmente:

```bash
npm run preview
```

## Deploy na Vercel

1. Suba o projeto para o GitHub (veja seção abaixo).
2. Acesse [vercel.com](https://vercel.com), clique em **New Project** e importe o repositório.
3. Framework preset: **Vite** (detectado automaticamente).
4. Build command: `npm run build` — Output directory: `dist` (padrão).
5. Clique em **Deploy**.

## Subindo para o GitHub

```bash
git init
git add .
git commit -m "feat: cria landing page Oliveira Segurança Executiva"
```

**Opção A — repositório já criado no GitHub:**

```bash
git branch -M main
git remote add origin URL_DO_REPOSITORIO
git push -u origin main
```

**Opção B — usando GitHub CLI:**

```bash
gh repo create oliveira-seguranca-executiva --public --source=. --remote=origin --push
```

## Estrutura de pastas

```
oliveira-seguranca-executiva/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/                 # imagens reais do projeto (ver observação abaixo)
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── Services.jsx
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── ServiceCard.jsx
│   │   ├── StatCard.jsx
│   │   └── WhatsAppButton.jsx
│   ├── data/
│   │   └── siteData.js         # todos os textos, telefone e links em um só lugar
│   ├── styles/
│   │   ├── global.css
│   │   ├── header.css
│   │   ├── hero.css
│   │   ├── services.css
│   │   ├── about.css
│   │   ├── contact.css
│   │   ├── footer.css
│   │   └── responsive.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

## Observação sobre imagens

O projeto está pronto com **placeholders em gradiente escuro** no lugar das fotos do profissional (seções Hero e Sobre), para manter o visual premium mesmo sem as imagens finais.

Para usar as fotos reais:

1. Coloque o arquivo da foto em `src/assets/oliveira-hero.png` (hero) e, se houver uma segunda foto, em `src/assets/oliveira-about.png` (seção Sobre).
2. Em `src/styles/hero.css`, na classe `.hero__mediaPlaceholder`, troque o `background` pelo comentário indicado:
   ```css
   background-image: url('../assets/oliveira-hero.png');
   background-size: cover;
   background-position: center;
   ```
3. Faça o mesmo em `src/styles/about.css`, na classe `.about__mediaPlaceholder`.
4. Para a imagem de compartilhamento em redes sociais, adicione um arquivo `og-image.jpg` (1200×630px) na pasta `public/`.

## Editando textos, telefone e links

Todo o conteúdo textual (telefone, slogan, serviços, diferenciais, links de navegação) está centralizado em `src/data/siteData.js`. Não é necessário tocar nos componentes para alterar textos ou o número de WhatsApp.
