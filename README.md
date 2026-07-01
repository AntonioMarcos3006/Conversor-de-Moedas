# 🌍 GlobalFX — Conversor de Moedas em Tempo Real

Aplicação web para conversão de moedas de praticamente qualquer país do mundo, com cotações atualizadas em tempo real, histórico de conversões e interface responsiva com tema claro/escuro.

🔗 **Acesse online:** https://currency-converter67.netlify.app/

## ✨ Funcionalidades

- Conversão entre mais de 150 moedas, com nome completo e bandeira do país
- Cotações em tempo real, com atualização automática a cada 5 minutos
- Busca rápida de moedas por nome ou código
- Botão de inverter moedas (troca origem/destino)
- Histórico das últimas conversões realizadas
- Cópia rápida do resultado da conversão
- Ticker no topo com as principais cotações em destaque
- Tema claro/escuro com persistência de preferência
- Cache local das cotações para evitar chamadas desnecessárias à API
- Sistema de fallback: caso a API principal falhe, uma segunda API é usada automaticamente

## 🛠️ Tecnologias

- **HTML5** — estrutura da página
- **CSS3** — estilização, tema claro/escuro e responsividade
- **JavaScript (Vanilla)** — lógica de conversão, cache, histórico e integração com APIs
- **Fetch API** — requisições às APIs de câmbio

## 🌐 APIs utilizadas

- [open.er-api.com](https://open.er-api.com) — fonte principal de cotações
- [frankfurter.app](https://frankfurter.app) — fonte de fallback, usada automaticamente se a principal estiver indisponível

## 📁 Estrutura do projeto

```
conversor-moedas/
├── index.html    # Estrutura da página
├── style.css     # Estilos e temas
└── script.js     # Lógica de conversão, cache e integração com as APIs
```

## ▶️ Como executar localmente

Não é necessário nenhuma instalação ou build. Basta:

1. Baixar os três arquivos (`index.html`, `style.css`, `script.js`) mantendo-os na mesma pasta
2. Abrir o arquivo `index.html` no navegador

Ou, para evitar bloqueios de CORS em alguns navegadores, rodar um servidor local simples:

```bash
npx serve .
```

## 📌 Observações

- O projeto depende de conexão com a internet para buscar as cotações atualizadas.
- As cotações ficam em cache local por 5 minutos para reduzir chamadas às APIs.

---

Desenvolvido por **Antonio Marques** — 2026
