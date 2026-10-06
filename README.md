# NexaPlay - Aplicação Web Oficial

Aplicação web completa, responsiva e de alta conversão para o serviço de streaming e entretenimento **Nexa Play**, desenvolvida com **React 18**, **TypeScript**, **Vite** e **Tailwind CSS**, pronta para deploy imediato na **Vercel** ou qualquer provedor de hospedagem estática/SPA.

---

## 🚀 Tecnologias Utilizadas

- **React 18** + **TypeScript**
- **Vite 6** (Build ultrarrápido)
- **Tailwind CSS 3** (Design System moderno e responsivo)
- **Lucide React** (Ícones modernos e otimizados)
- **Vercel SPA Config** (`vercel.json`)

---

## 📱 Funcionalidades Preservadas e Implementadas

1. **Hero com Vídeo de Apresentação:**
   - Player interativo com controles de reprodução (Play, Pause, Barra de Progresso, Mudo/Volume, Tela Cheia).
   - Modal para configurar ou atualizar a URL de qualquer vídeo de apresentação (YouTube, Vimeo ou link direto MP4).
   - Badges de destaque: *Anti-Travamento Turbo*, *Smart TV & Celular*, *Garantia de 7 Dias*, *Ativação em 3 Minutos*.

2. **Duas Ofertas Estruturadas:**
   - **Plano Start por R$ 19,90/mês:** 1 tela simultânea, +40.000 conteúdos, qualidade SD/HD e suporte padrão.
   - **Plano Premium VIP por R$ 49,90/mês (Destaque):** até 4 telas simultâneas, Ultra HD 4K com HDR, +120.000 conteúdos (futebol ao vivo, cinema e séries de todos os streamings), CDN Anti-Travamento e suporte VIP 24/7.
   - Tabela comparativa detalhada (*Start vs. Premium*).

3. **Pop-up de R$ 29,90 em Caso de Recusa (Exit-Intent):**
   - Disparado automaticamente quando o usuário tenta sair da página (cursor saindo em direção à barra de abas no desktop) ou clica na opção de desconto no Plano Premium.
   - Oferece o **Plano Premium completo por apenas R$ 29,90/mês** com cronômetro regressivo ativo de 10 minutos.

4. **Provas Sociais Autênticas (WhatsApp & Instagram Direct):**
   - Abas interativas alternando entre conversas reais no estilo WhatsApp (balões com tiques duplos e horários) e Direct do Instagram (balões com reações de emoji e selo de verificado).

5. **Checkout Interativo e Integração WhatsApp `47 9 9714-4452`:**
   - Modal com resumo do plano selecionado.
   - Botão direto para ativação no WhatsApp com mensagens pré-configuradas para cada plano.
   - Chave PIX e código Copia e Cola funcional com botão de copiar em 1 clique.

6. **100% Responsivo e Otimizado:**
   - Experiência perfeita em computadores, notebooks, tablets, smartphones Android e iPhones.
   - Barra de conversão fixa inferior para telas móveis (*Sticky Bottom Bar*).
   - Botão flutuante pulsante de WhatsApp sempre acessível.

---

## 🛠️ Comandos para Desenvolvimento Local

```bash
# 1. Instalar dependências
npm install

# 2. Executar em modo de desenvolvimento (localhost:3000)
npm run dev

# 3. Gerar build de produção otimizado na pasta dist/
npm run build

# 4. Pré-visualizar o build localmente
npm run preview
```

---

## ☁️ Como Fazer o Deploy na Vercel

### Opção 1: Conectando via GitHub (Recomendado)
1. Crie um novo repositório no seu GitHub e envie os arquivos deste projeto.
2. Acesse o painel da [Vercel](https://vercel.com/) e clique em **"Add New Project"**.
3. Importe o repositório do NexaPlay.
4. A Vercel detectará automaticamente as configurações através do `vercel.json` e `package.json`:
   - **Framework Preset:** `Vite`
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`
5. Clique em **"Deploy"**. Sua aplicação web estará no ar em poucos segundos com link HTTPS gratuito!

### Opção 2: Deploy Direto via Vercel CLI
```bash
npm i -g vercel
vercel
```
