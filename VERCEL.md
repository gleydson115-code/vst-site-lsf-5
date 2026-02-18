# Deploy na Vercel - Versato Steel Frame

Para fazer o deploy deste projeto na Vercel, siga estas instruções:

## 1. Preparação
Certifique-se de que o código está em um repositório no seu GitHub.

## 2. Importação na Vercel
1. Acesse [vercel.com](https://vercel.com).
2. Clique em **"Add New"** > **"Project"**.
3. Importe o repositório deste projeto.

## 3. Configurações de Build
Na tela de configuração da Vercel, utilize os seguintes parâmetros:

- **Framework Preset:** `Vite`
- **Build Command:** `npm run build`
- **Output Directory:** `dist/public`

## 4. Deploy
Clique em **"Deploy"**. A Vercel criará automaticamente o link de visualização do seu site.

---
*Este é um projeto Frontend (React/Vite). Não é necessário configurar variáveis de ambiente de backend para a versão de visualização.*
