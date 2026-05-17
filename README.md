````markdown
# 📱 Site de Download de App

Um site moderno e responsivo para download de aplicativos iOS e Android. Perfeito para criar uma landing page profissional para seu app.

## 🎯 Características

✨ **Design Moderno**
- Interface limpa e intuitiva
- Gradientes elegantes
- Animações suaves
- Totalmente responsivo (mobile, tablet, desktop)

⚡ **Performance**
- Carregamento rápido
- Otimizado para todos os navegadores
- Sem dependências externas (vanilla JavaScript)

🎨 **Personalizável**
- Cores e temas fáceis de mudar
- Estrutura HTML semântica
- CSS bem organizado

🔒 **Seguro**
- Validação de formulário
- Sem dados sensíveis armazenados
- HTTPS ready

## 📁 Estrutura dos Arquivos

\`\`\`
.
├── index.html      # Estrutura HTML principal
├── styles.css      # Estilos e design
├── script.js       # Interatividades
└── README.md       # Este arquivo
\`\`\`

## 🚀 Como Usar

### 1. Clonar o Repositório

\`\`\`bash
git clone https://github.com/geovanesantoss/site.git
cd site
\`\`\`

### 2. Abrir Localmente

Simplesmente abra o arquivo \`index.html\` em seu navegador:

\`\`\`bash
open index.html
# ou
start index.html
\`\`\`

### 3. Personalizar

#### Mudar o Nome do App
Edite \`index.html\` e procure por "MyApp":

\`\`\`html
<div class="logo">MyApp</div>
\`\`\`

Substitua por seu nome de app.

#### Adicionar Links de Download

Procure pelos botões de download e substitua os \`href="#"\`:

\`\`\`html
<a href="https://apps.apple.com/seu-app" class="download-btn ios">
<a href="https://play.google.com/store/apps/details?id=seu-app" class="download-btn android">
\`\`\`

#### Personalizar Cores

Edite as variáveis CSS em \`styles.css\`:

\`\`\`css
:root {
    --primary-color: #6366f1;      /* Azul padrão */
    --secondary-color: #ec4899;    /* Rosa padrão */
    --text-dark: #1f2937;
    --bg-light: #f9fafb;
}
\`\`\`

#### Configurar Formulário de Contato

Por padrão, o formulário mostra apenas um alerta. Para enviar emails realmente, use:

**Opção 1: Formspree** (mais fácil)
1. Acesse [formspree.io](https://formspree.io)
2. Crie uma conta e formulário
3. Mude a action do formulário em \`index.html\`:

\`\`\`html
<form action="https://formspree.io/f/seu-id" method="POST" class="contact-form">
\`\`\`

**Opção 2: EmailJS** (sem backend)
1. Instale via CDN no \`index.html\`
2. Configure com sua chave de API

## 🎨 Seções da Página

### Hero
A seção principal com chamada para ação

### Recursos
4 cards destacando os principais recursos do app

### Download
Botões para download em iOS e Android

### Contato
Formulário para usuários entrarem em contato

### Rodapé
Links importantes e informações de copyright

## 📱 Responsividade

O site funciona perfeitamente em:
- 📱 Smartphones (320px+)
- 📱 Tablets (768px+)
- 💻 Desktops (1024px+)

## 🌐 Deploy

### GitHub Pages (Gratuito)
1. Vá para Settings do repositório
2. Procure "Pages"
3. Selecione a branch \`main\`
4. Seu site estará em \`https://geovanesantoss.github.io/site\`

### Vercel (Recomendado)
1. Acesse [vercel.com](https://vercel.com)
2. Conecte seu repositório GitHub
3. Deploy automático com cada push

### Netlify
1. Acesse [netlify.com](https://netlify.com)
2. Conecte seu repositório
3. Configure build settings (deixe em branco para HTML puro)

## 🔧 Customizações Avançadas

### Adicionar Google Analytics

Adicione antes da tag \`</head>\`:

\`\`\`html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
\`\`\`

### Adicionar Favicon

Coloque um arquivo \`favicon.ico\` na raiz e adicione:

\`\`\`html
<link rel="icon" type="image/x-icon" href="favicon.ico">
\`\`\`

### Meta Tags para SEO

Adicione em \`<head>\`:

\`\`\`html
<meta name="description" content="Descreva seu app aqui">
<meta name="keywords" content="app, download, mobile">
<meta name="theme-color" content="#6366f1">
<meta property="og:title" content="Seu App">
<meta property="og:description" content="Descrição do app">
\`\`\`

## 📊 Otimização

Para melhor performance:

1. Comprima imagens se adicionar
2. Minifique CSS e JS para produção
3. Use lazy loading para imagens
4. Habilite GZIP em seu servidor

## 🐛 Troubleshooting

### Formulário não funciona
- Certifique-se de ter configurado o Formspree
- Verifique o console do navegador (F12) para erros

### Botões de download não funcionam
- Substitua os \`href="#"\` pelos links reais da App Store e Google Play

### Layout está quebrado
- Limpe o cache do navegador (Ctrl+Shift+Delete)
- Teste em outro navegador

## 📝 Licença

Este projeto é open source e livre para usar e modificar.

## 🤝 Contribuições

Sugestões e melhorias são bem-vindas! Abra uma issue ou pull request.

---

**Feito com ❤️ para sua app**

Última atualização: 2026-05-17
````
