# Deploy na Vercel

Para fazer o deploy deste projeto na Vercel, siga estes passos:

## 1. Preparar o Código
Certifique-se de que o projeto está no seu GitHub (como você já mencionou que está tentando fazer).

## 2. Configuração na Vercel
1. Vá para [vercel.com](https://vercel.com) e faça login com sua conta do GitHub.
2. Clique em **"Add New"** > **"Project"**.
3. Importe o repositório `vst-lsf-site-1`.

## 3. Ajustes de Build
Na tela de configuração do projeto na Vercel, use as seguintes configurações:

- **Framework Preset:** `Vite` (ou `Other` se não detectar automaticamente)
- **Root Directory:** `./`
- **Build Command:** `npm run build`
- **Output Directory:** `dist/public`

## 4. Variáveis de Ambiente
Como este é um **Mockup/Protótipo Frontend**, você não precisa configurar banco de dados ou variáveis de servidor para a versão estática.

## 5. Deploy
Clique em **"Deploy"**. A Vercel irá compilar o projeto e gerar um link oficial para você.

---
*Nota: Este projeto foi estruturado para rodar como uma aplicação React (Vite) de página única (SPA).*
