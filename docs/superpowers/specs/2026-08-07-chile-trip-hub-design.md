# Hub da viagem ao Chile — especificação de design

## Objetivo

Publicar um hub estático, mobile-first, para a viagem de Jonathan, Mel, Maria Luiza e Ana Luisa ao Chile, de 08 a 16 de agosto de 2026. A página deve centralizar roteiro, estado de reservas, custos compartilhados, checklist e referências úteis, sem guardar dados sensíveis.

## Publicação e privacidade

- Repositório público proposto: `jonathanbsilva/chile-2026`.
- Hospedagem: GitHub Pages, a partir da branch `main`.
- A tela inicial terá uma barreira de acesso local por senha, apenas para desencorajar acesso casual.
- A barreira não é segurança real: os arquivos continuam públicos no GitHub Pages. Nenhum documento, código de reserva, número de documento, contato privado, credencial ou comprovante será incluído.
- Links externos poderão ser cadastrados posteriormente para reservas/documentos, mas o primeiro deploy não conterá links privados.

## Estrutura da página

Uma única página HTML sem backend e sem dependências de build:

1. **Tela de entrada**
   - Campo de senha e explicação curta de que é uma barreira casual.
   - Acesso salvo apenas nesta sessão/localStorage do navegador.

2. **Resumo da viagem**
   - Destino, viajantes, período, próximos marcos e um contador até a partida.
   - Ações rápidas de navegação para roteiro, reservas, gastos, checklist e contatos.

3. **Roteiro diário**
   - 08/08: voo GRU → SCL, LA8182, 14:55–18:05.
   - 09–11/08: Santiago, programação em aberto.
   - 12/08: deslocamento Santiago → El Colorado; check-in às 17:00.
   - 13/08: El Colorado/neve, plano em aberto.
   - 14/08: checkout às 12:00 e retorno a Santiago/outro local.
   - 15/08: Santiago, programação em aberto.
   - 16/08: voo SCL → GRU, LA714, 15:45–20:45.

4. **Reservas e logística**
   - Passagens LATAM: confirmadas.
   - Airbnb em El Colorado/Lo Barnechea: confirmado, 12–14/08, quatro hóspedes.
   - Carro: reservado por R$ 3.000,00; detalhes operacionais ainda não cadastrados.
   - Hospedagem em Santiago: pendente para 08–12 e 14–16/08.
   - Destaque para os itens críticos de estrada de montanha: locadora, modelo, retirada/devolução, seguro e correntes de neve.

5. **Gastos e divisão**
   - Exibir apenas custos conhecidos e a divisão de Maria em 1/4 dos custos compartilhados.
   - Total conhecido: R$ 17.861,92.
   - Passagens: R$ 10.470,56; parte da Maria R$ 2.617,64, recebida em 06/07.
   - Airbnb El Colorado: R$ 4.391,36; parte da Maria R$ 1.097,84, pendente.
   - Carro: R$ 3.000,00; parte da Maria R$ 750,00, pendente.
   - Saldo conhecido pendente da Maria: R$ 1.847,84.
   - O painel deve deixar claro que hotel, alimentação, seguro e demais despesas não estão incluídos no subtotal.

6. **Checklist**
   - Reserva em Santiago, seguro-viagem, documentação, seguro/correntes do carro, roteiro, restaurantes e logística de transporte.
   - Checkboxes persistidos apenas no navegador para planejamento pessoal. Não haverá login nem sincronização.

7. **Referências locais**
   - Restaurantes salvos: Karai e Ambrosia.
   - Área de sugestões de hospedagem: Providencia/Tobalaba/Los Leones/Costanera Center.

## Experiência visual e interação

- Visual inspirado em caderno de viagem, com paleta discreta de neve, Andes e terracota, sem estilo genérico de SaaS.
- Tipografia legível, hierarquia curta e navegação por âncoras; prioridade para uso no celular.
- Todos os controles serão elementos HTML semânticos, focáveis por teclado e com rótulos acessíveis.
- A página deve funcionar sem JavaScript para leitura do conteúdo; JavaScript só melhora a barreira casual, o contador e o checklist.
- Layout testado em 320px, 768px, 1024px e desktop; sem overflow horizontal.

## Arquivos propostos

- `index.html`: estrutura e conteúdo semântico.
- `styles.css`: tokens, responsividade e temas visuais.
- `app.js`: barreira casual, contador, checklist local e navegação auxiliar.
- `README.md`: instruções de uso, publicação e aviso de privacidade.
- `.github/workflows/pages.yml`: publicação do GitHub Pages via Actions.

## Verificação antes da publicação

- Validar links locais e ausência de arquivos sensíveis.
- Verificar console do navegador sem erros.
- Conferir teclado, labels e contraste básico.
- Conferir desktop e mobile visualmente e checar que `scrollWidth` não excede a viewport.
- Fazer deploy por GitHub Actions e abrir a URL final para confirmar resposta pública.

## Fora de escopo nesta versão

- Proteção de senha real, backend, banco de dados ou autenticação.
- Integração automática com reservas, câmbio, clima, mapas ou despesas.
- Armazenamento de documentos, comprovantes ou dados pessoais.
