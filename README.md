# Portfolio Juan Silva

Portfólio pessoal de um desenvolvedor Full Stack, construído com HTML semântico, Tailwind CSS e JavaScript vanilla. Os projetos são puxados em tempo real via API do GitHub.

**Acesse:** [afkjuandev.github.io/portfolio](https://afkjuandev.github.io/portfolio)

---

## Funcionalidades

- **Hero section** com gradiente animado e indicador de status pulsante
- **Projetos GitHub** carregados em tempo real via API pública
- **Tecnologias categorizadas** (Frontend, Backend, Banco de Dados, Ferramentas)
- **Menu responsivo** com hamburger animado para mobile
- **Seção Contato** com links para LinkedIn e GitHub
- **100% responsivo** — funciona em desktop, tablet e mobile
- **Acessível** — `aria-labels`, `sr-only`, semântica HTML5 correta
- **Header sticky** com backdrop blur ao rolar

---

## Estrutura

```
portfolio/
├── src/
│   ├── index.html      # Estrutura HTML semântica
│   ├── index.js         # Lógica: menu mobile, GitHub API, tecnologias
│   ├── input.css        # Fonte base (Tailwind)
│   └── output.css       # CSS compilado pelo Tailwind
├── package.json
└── tailwind.config.js
```

---

## Tecnologias Utilizadas

| Camada       | Tecnologias                                    |
|-------------|------------------------------------------------|
| **Frontend** | HTML5, CSS3, JavaScript, Tailwind CSS          |
| **API**      | GitHub REST API                                |
| **Ícones**   | Font Awesome 6.5                              |
| **Fonte**    | Google Fonts (Dancing Script)                  |
| **Build**    | Tailwind CSS CLI v4.3.3                        |

---

## Como Rodar

```bash
# Clonar o repositório
git clone https://github.com/afkjuandev/portfolio.git
cd portfolio

# Instalar dependências
npm install

# Iniciar o build do Tailwind (watch mode)
npm run build

# Abrir src/index.html no navegador
```

---

## Como Personalizar

- **Usuário GitHub:** altere a constante `GITHUB_USER` em `src/index.js`
- **Tecnologias:** edite o array `techCategories` em `src/index.js`
- **Gradiente do hero:** altere as classes `from-*` e `to-*` na `<section>` do hero
- **Cor do nome:** modifique `text-sky-400` no `<span>` do `<h1>`

---

## Licença

Este projeto é de uso pessoal.
