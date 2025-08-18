# Prodoeste App - Peças Originais Mercedes-Benz

Aplicativo web moderno para a Prodoeste, especializada em peças originais Mercedes-Benz para caminhões, ônibus e vans.

## 🚀 Tecnologias Utilizadas

- **React 18** com TypeScript
- **Vite** para build e desenvolvimento
- **Tailwind CSS** para estilização
- **Framer Motion** para animações
- **React Router DOM** para roteamento
- **React Hook Form** para formulários
- **Lucide React** para ícones

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   ├── Header.tsx      # Cabeçalho da aplicação
│   ├── Footer.tsx      # Rodapé da aplicação
│   ├── ProductCard.tsx # Card de produto
│   ├── CookiesModal.tsx # Modal de cookies
│   └── SuccessModal.tsx # Modal de sucesso
├── pages/              # Páginas da aplicação
│   ├── HomePage.tsx    # Página inicial
│   ├── CatalogPage.tsx # Catálogo de produtos
│   ├── ProductPage.tsx # Página de produto
│   ├── CategoryPage.tsx # Página de categoria
│   ├── AboutPage.tsx   # Página sobre
│   └── ContactPage.tsx # Página de contato
├── data/               # Dados estáticos
│   └── products.ts     # Produtos e categorias
├── types/              # Tipos TypeScript
│   └── index.ts        # Definições de tipos
├── App.tsx             # Componente principal
└── main.tsx            # Ponto de entrada
```

## 🛠️ Instalação e Execução

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn

### Instalação
```bash
# Instalar dependências
npm install

# Executar em modo desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview da build
npm run preview
```

### Scripts Disponíveis
- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria build de produção
- `npm run preview` - Visualiza build de produção
- `npm run lint` - Executa linting do código

## 🌟 Funcionalidades

### Páginas Principais
- **Homepage** - Apresentação da empresa e produtos em destaque
- **Catálogo** - Lista completa de produtos com filtros
- **Produtos** - Detalhes individuais de cada produto
- **Categorias** - Produtos organizados por categoria
- **Sobre** - Informações sobre a empresa
- **Contato** - Formulário de contato

### Recursos
- Design responsivo para todos os dispositivos
- Animações suaves com Framer Motion
- Sistema de filtros e busca
- Navegação intuitiva
- Formulários validados
- Modais interativos

## 🎨 Design System

### Cores
- **Primária**: Preto (#000000)
- **Secundária**: Azul (#3B82F6)
- **Acentos**: Verde (#10B981), Vermelho (#EF4444)

### Tipografia
- **Inter** - Fonte principal para texto
- **Poppins** - Fonte para títulos

### Componentes
- Botões com estados hover e focus
- Cards com sombras e transições
- Formulários com validação visual
- Modais com backdrop e animações

## 📱 Responsividade

O projeto é totalmente responsivo e funciona em:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🔧 Configurações

### Vite
- Alias `@` para pasta `src`
- Plugin React com TypeScript
- Base path configurado para `/`

### Tailwind CSS
- Configuração customizada com cores da marca
- Componentes utilitários pré-definidos
- Sistema de grid responsivo

### TypeScript
- Configuração estrita para melhor qualidade de código
- Path mapping para imports limpos
- Tipos bem definidos para todos os dados

## 📦 Dependências Principais

### Runtime
- `react` - Biblioteca principal
- `react-dom` - Renderização DOM
- `react-router-dom` - Roteamento

### UI/UX
- `framer-motion` - Animações
- `lucide-react` - Ícones
- `tailwindcss` - Estilização

### Formulários
- `react-hook-form` - Gerenciamento de formulários
- `react-hot-toast` - Notificações

## 🚀 Deploy

### Build de Produção
```bash
npm run build
```

### Servidor Estático
O build gera arquivos estáticos que podem ser servidos por qualquer servidor web.

### Variáveis de Ambiente
- `VITE_API_URL` - URL da API (se necessário)
- `VITE_APP_TITLE` - Título da aplicação

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature
3. Commit suas mudanças
4. Push para a branch
5. Abra um Pull Request

## 📄 Licença

Este projeto é proprietário da Prodoeste.

## 📞 Suporte

Para suporte técnico, entre em contato com a equipe de desenvolvimento.

---

**Prodoeste** - Especialistas em peças originais Mercedes-Benz desde 1990. 