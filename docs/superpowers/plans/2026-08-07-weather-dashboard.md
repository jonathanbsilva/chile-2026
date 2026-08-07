# Weather Dashboard Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use `executing-plans` to implement task-by-task.

**Goal:** Exibir previsão por manhã, tarde e noite em cartões visuais e corrigir o espaçamento lateral móvel de roteiro e financeiro.

**Architecture:** `index.html` mantém dados estáticos da previsão atual do Open-Meteo. `styles.css` fornece cartões responsivos e corrige as seções de largura total com `box-sizing: border-box`. `verify.mjs` preserva uma checagem estática mínima dos novos elementos.

**Tech Stack:** HTML, CSS e Node assert; sem dependências.

## Global Constraints

- Não expor dados sensíveis de viagem.
- Não adicionar dependências ou integração dinâmica de clima.
- Atualizar a página estática com dados obtidos em 07/08/2026.

---

### Task 1: Painel climático diário

**Files:**
- Modify: `index.html`
- Modify: `verify.mjs`

- [ ] Adicionar asserções estáticas para `Manhã`, `Tarde`, `Noite`, `weather-day` e `Condição da estrada`.
- [ ] Rodar `node verify.mjs` e observar a falha antes da marcação HTML existir.
- [ ] Substituir as tabelas de clima por cartões para Santiago (08–11 e 14–16/08) e El Colorado (12–14/08), cada um com temperatura e precipitação/neve nos três períodos.
- [ ] Rodar `node verify.mjs` e confirmar `verify: passed`.

### Task 2: Layout responsivo e publicação

**Files:**
- Modify: `styles.css`

- [ ] Aplicar `box-sizing: border-box` às faixas `itinerary` e `costs`; manter 16px de padding lateral no mobile e o alinhamento de 1120px no desktop.
- [ ] Criar o grid de cartões de clima em CSS, com coluna única no mobile e mais colunas em telas largas.
- [ ] Rodar `node verify.mjs`, `git diff --check` e inspecionar em navegador.
- [ ] Commit e push após a validação visual.
