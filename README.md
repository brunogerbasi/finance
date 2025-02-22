# Finances

Projeto React com TypeScript utilizando Vite.

## Visão Geral

Este projeto foi criado com React com TypeScript para oferecer uma base moderna e performática para aplicações web. O ESLint já está configurado para ajudar a manter a consistência e qualidade do código.

## Pré-requisitos

- [Node.js](https://nodejs.org/) (versão recomendada: 14 ou superior)
- Gerenciador de pacotes: **Yarn** ou **NPM**

## Instalação

### Usando Yarn ou NPM

1. **Clone o repositório:**

   ```bash
   git clone <https://github.com/brunogerbasi/finance.git>


2. **Entre no diretório do projeto:**

cd finances

3. **Instale as dependências:**

yarn install
ou
npm install


### Iniciar o Servidor de Desenvolvimento

yarn dev
ou
npm run dev

**Após iniciar, abra o navegador e acesse a URL exibida (geralmente http://localhost:3000).**


### Executar o Linter (ESLint)

yarn lint
ou
npm run lint


### Estrutura do Projeto

finances/
├── node_modules/          # Dependências do projeto
├── public/                # Arquivos públicos (ex: index.html)
├── src/                   # Código fonte
│   ├── assets/            # Recursos estáticos (imagens, fontes)
│   ├── components/        # Componentes reutilizáveis
│   ├── context/           # Contexto global (Redux, Zustand ...)
│   ├── pages/             # Páginas da aplicação
│   ├── hooks/             # Hooks customizados
│   ├── services/          # Integração com APIs e lógica de negócios
│   ├── utils/             # Funções utilitárias
│   ├── App.tsx            # Componente raiz
│   └── main.tsx           # Ponto de entrada da aplicação
├── .eslintignore          # Arquivos e pastas ignorados pelo ESLint
├── eslint.config.js       # Configuração do ESLint
├── package.json           # Gerenciador de dependências e scripts
└── README.md              # Este arquivo