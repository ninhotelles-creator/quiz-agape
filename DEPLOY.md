# Deploy — Quiz Livraria Ágape

## 1. Configurar o Supabase

1. Crie um projeto em [supabase.com](https://supabase.com)
2. Vá em **SQL Editor** e execute em ordem:
   - `supabase/schema.sql`
   - `supabase/seed.sql`
3. Copie as credenciais em **Project Settings → API**

## 2. Variáveis de ambiente

Crie o arquivo `.env.local` na raiz do projeto:

```env
NEXT_PUBLIC_SUPABASE_URL=https://SEU_PROJETO.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=sua_anon_key_aqui
SUPABASE_SERVICE_ROLE_KEY=sua_service_role_key_aqui
ADMIN_PASSWORD=sua_senha_admin_aqui
```

## 3. Deploy na Vercel

```bash
npm install -g vercel
vercel --prod
```

Configure as variáveis de ambiente no painel da Vercel em:
**Settings → Environment Variables**

## 4. Configurar o Pixel Meta

1. Acesse `/admin/login` com a senha configurada
2. Vá em **Marketing → Meta Pixel**
3. Cole o seu Pixel ID e clique em **Salvar**

## 5. Adicionar capas dos livros

1. Acesse `/admin/livros`
2. Clique em **Editar** em cada livro
3. Cole a URL da imagem da capa (use Google Images, Amazon, etc.)

## Estrutura de páginas

| Rota | Descrição |
|---|---|
| `/` | Quiz completo (5 etapas) |
| `/carregando` | Loading 8s com versículo |
| `/resultado/[id]` | Resultado + botão WhatsApp |
| `/admin/login` | Login do painel admin |
| `/admin/dashboard` | Métricas de cliques |
| `/admin/livros` | CRUD de livros + capas |
| `/admin/perguntas` | Visualização da árvore do quiz |
| `/admin/marketing` | Pixel Meta + WhatsApp |
