
Readme · MD
# dev-journey-art
 
<!-- TODO: escreva aqui uma ou duas frases descrevendo o que este projeto faz -->
 
## 🚀 Stack
 
- **Build tool:** [Vite](https://vitejs.dev/)
- **Framework:** React 18 + TypeScript
- **Estilo:** Tailwind CSS + [shadcn/ui](https://ui.shadcn.com/) (componentes Radix)
- **Roteamento:** React Router
- **Dados assíncronos:** TanStack Query
- **Formulários:** React Hook Form + Zod
- **Testes unitários:** Vitest + Testing Library
- **Testes E2E:** Playwright
- **Lint:** ESLint
> Este projeto foi criado com [Lovable](https://lovable.dev).
 
## 📦 Como rodar localmente
 
Pré-requisitos: Node.js 18+ e um gerenciador de pacotes (veja a nota abaixo sobre lockfiles).
 
\`\`\`bash
# instalar dependências
npm install
 
# rodar em modo desenvolvimento
npm run dev
 
# build de produção
npm run build
 
# preview do build de produção
npm run preview
\`\`\`
 
## 🧪 Testes
 
\`\`\`bash
# testes unitários (Vitest)
npm run test
npm run test:watch
 
# testes end-to-end (Playwright)
npx playwright test
\`\`\`
 
## 📜 Scripts disponíveis
 
| Script          | O que faz                                      |
| --------------- | ----------------------------------------------- |
| \`dev\`           | Sobe o servidor de desenvolvimento (Vite)       |
| \`build\`         | Gera o build de produção                        |
| \`build:dev\`     | Gera o build em modo development                |
| \`lint\`          | Roda o ESLint em todo o projeto                 |
| \`preview\`       | Serve o build de produção localmente            |
| \`test\`          | Roda os testes unitários uma vez                |
| \`test:watch\`    | Roda os testes unitários em modo watch          |
 
## ⚠️ Nota sobre lockfiles
 
Este repositório atualmente tem três lockfiles (\`bun.lock\`, \`bun.lockb\`, \`package-lock.json\`). Isso pode causar inconsistência de dependências dependendo de qual gerenciador é usado para instalar. Recomenda-se manter **apenas um** — escolha \`npm\` (com \`package-lock.json\`) ou \`bun\` (com \`bun.lock\`), remova o outro, e documente a escolha aqui.
 
## 📄 Licença
 
Este projeto está licenciado sob a licença MIT — veja o arquivo [LICENSE](./LICENSE) para mais detalhes.
 
