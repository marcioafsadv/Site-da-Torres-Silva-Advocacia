# Torres & Silva Advocacia - Website Institucional

Website institucional desenvolvido sob medida para a sociedade de advogados **Torres & Silva Advocacia**, inspirado no tema clássico de alto padrão (*Lawyer Zone / Ultimate Lawyer Theme*).

---

## 🏛️ Informações do Escritório
- **Escritório:** Torres & Silva Advocacia & Consultoria
- **Sócios Fundadores:** 
  - **Dr. Márcio Silva** (OAB/SP nº 385.787)
  - **Dr. Washington Torres** (OAB/SP nº 432.030)
- **E-mail:** [contato@torresesilvaadvocacia.com.br](mailto:contato@torresesilvaadvocacia.com.br)
- **Localização:** São Paulo/SP (Capital) e Itu/SP (Interior)
- **Telefone / WhatsApp:** [(11) 95599-6164](https://wa.me/5511955996164)

---

## 📂 Estrutura de Arquivos

```
TORRES & SILVA/
├── index.html                   # Página principal completa
├── README.md                    # Documentação do projeto
├── css/
│   └── style.css                # Estilização completa (responsivo, tema dourado/marinho)
├── js/
│   └── main.js                  # Lógica do Slider, Menu Mobile, Modal e WhatsApp
└── assets/
    └── images/
        ├── hero-columns.jpg     # Imagem do Slide 1 (Colunas clássicas)
        ├── hero-themis.jpg      # Imagem do Slide 2 (Deusa Themis / Justiça)
        ├── hero-office.jpg      # Imagem do Slide 3 (Escritório / Reunião)
        ├── about-office.jpg     # Imagem da seção Quem Somos
        ├── lawyer-marcio-silva.jpg        # Foto Dr. Marcio Silva
        └── lawyer-washington-torres.jpg   # Foto Dr. Washington Torres
```

---

## 🚀 Como Executar Localmente

### Opção 1: Direto no Navegador (Mais Rápido)
1. Dê um **duplo clique** no arquivo `index.html`.
2. O site abrirá imediatamente em qualquer navegador (Chrome, Edge, Firefox, Safari).

### Opção 2: Servidor Local (Node.js)
Caso queira testar via servidor local:
```bash
npx serve .
```
E acesse `http://localhost:3000`.

---

## ✨ Recursos Implementados

1. **Top Bar Superior:**
   - E-mail institucional com link direto `mailto:`.
   - Localização das unidades (São Paulo/SP e Itu/SP).
   - Telefone com link `tel:`.
   - Ícones de redes sociais (WhatsApp, Instagram, LinkedIn, Facebook).

2. **Cabeçalho Fixo (Sticky Header):**
   - Logomarca personalizada com ícone neoclássico e tipografia serifada de prestígio.
   - Menu de navegação suave para todas as seções.
   - Botão de ação rápida (*Agende sua Consulta*).
   - Menu hambúrguer adaptado para smartphones e tablets.

3. **Banner Principal com Slider Carrossel:**
   - 3 slides temáticos de alto impacto visual (Tribunal/Colunas, Themis/Balança e Escritório Moderno).
   - Transição automática a cada 6 segundos, com pausa ao passar o mouse.
   - Setas circulares de navegação e indicadores de paginação por pontos.
   - Suporte a toque (*touch swipe*) em dispositivos móveis.

4. **3 Cards Sobrepostos de Destaque:**
   - *Honorários Claros e Justos* (Transparência contratual).
   - *Atendimento Rápido & Dedicado* (Contato direto com os sócios).
   - *Atuação de Excelência* (Rigor técnico e advocacia artesanal).

5. **Seção Quem Somos (Institucional):**
   - Apresentação da história, valores e compromisso com o cliente.
   - Destaque das unidades físicas em São Paulo e Itu.
   - 4 pilares: Atendimento Direto, Transparência Integral, Agilidade & Estratégia e Rigor com a OAB.

6. **Grid de 8 Áreas de Atuação (Efeito Dotted):**
   - Design minimalista com bordas tracejadas e ícones dourados centrais.
   - Modal interativo: ao clicar em qualquer área, abre-se uma janela com detalhes aprofundados dos serviços prestados e botão direto para consulta no WhatsApp.

7. **Banner de Métricas & Diferenciais:**
   - Destaque das 2 Unidades (SP e Itu), 100% Atendimento Direto pelos Sócios, Atendimento Ágil e Conformidade Ética OAB.

8. **Seção de Advogados (Dr. Marcio Silva e Dr. Washington Torres):**
   - Fotografia corporativa com acabamento elegante.
   - Perfil de cada sócio com badge OAB/SP, resumo biográfico e tags de especialidades.
   - Botões de contato direto para cada advogado via WhatsApp e e-mail.

9. **Central de Atendimento & Formulário de Consulta:**
   - Dados detalhados de contato e horários de atendimento.
   - Formulário completo com seleção de unidade (SP, Itu ou Online) e área de interesse.
   - Integração inteligente com o WhatsApp: ao clicar em *"Falar via WhatsApp"*, o formulário formata uma mensagem pronta e direcionada para o número `(11) 95599-6164`.

10. **Conformidade Ética OAB:**
    - Aviso de conformidade com o Código de Ética e Disciplina da OAB e o Provimento nº 205/2021.

11. **Botão Flutuante do WhatsApp:**
    - Botão fixo no canto inferior direito com animação de pulso para conversão imediata de clientes.

---

## 🎨 Como Personalizar as Fotos e Dados

- **Fotos dos Advogados:** Basta substituir as imagens dentro de `assets/images/`:
  - `lawyer-marcio-silva.jpg` para a foto oficial do Dr. Marcio Silva.
  - `lawyer-washington-torres.jpg` para a foto oficial do Dr. Washington Torres.
- **Número de OAB:** No arquivo `index.html`, você pode adicionar o número específico de inscrição ao lado de `OAB/SP`.

---

## 🚀 Publicação Automática no GitHub & Hostinger

### 1. Enviar para o seu repositório no GitHub
Depois de criar um repositório no seu GitHub (exemplo: `torres-e-silva-site`):

```bash
git remote add origin https://github.com/SEU-USUARIO/torres-e-silva-site.git
git push -u origin main
```

### 2. Configurar o Deploy Automático na Hostinger
1. No painel da Hostinger (**hPanel**), acesse a seção **Avançado** > **Git**.
2. Conecte sua conta do GitHub ou insira o link do repositório:
   - **Repositório:** `https://github.com/SEU-USUARIO/torres-e-silva-site.git`
   - **Branch:** `main`
   - **Diretório:** `public_html`
3. Clique em **Criar / Deploy**.
4. A Hostinger fornecerá uma **Webhook URL**. Basta adicioná-la no seu GitHub em:
   `Settings` > `Webhooks` > `Add webhook` (Payload URL: Cole a URL da Hostinger, Content type: `application/json`).
5. Pronto! A partir desse momento, qualquer alteração enviada via `git push` atualiza o site na Hostinger automaticamente em poucos segundos!

