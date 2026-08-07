import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';

const read = (file) => readFileSync(file, 'utf8');

assert.ok(existsSync('index.html'), 'index.html must exist');
assert.ok(existsSync('app.js'), 'app.js must exist');
assert.ok(existsSync('styles.css'), 'styles.css must exist');

const html = read('index.html');
const app = read('app.js');
for (const text of [
  '08–16 de agosto',
  'R$ 19.982,48',
  'R$ 747,04',
  'Airbnb confirmado',
  'Bairro Itália',
  'valor não informado',
  'SUV 4x4 no aeroporto SCL',
  'El Colorado',
  'Karai',
  'Ambrosia',
  'data-checklist-item',
]) assert.ok(html.includes(text), `missing content: ${text}`);
assert.equal((html.match(/>recebido</g) ?? []).length, 3, 'Maria should have three received payments');
for (const plannedDay of ['Farellones', 'Vale Nevado', 'trabalho remoto', 'Sábado livre']) {
  assert.ok(html.includes(plannedDay), `missing planned itinerary detail: ${plannedDay}`);
}
for (const anchor of ['#calendario', '#roteiro', '#reservas', '#gastos', '#checklist', '#salvos']) {
  assert.ok(html.includes(`href="${anchor}"`), `missing section menu link: ${anchor}`);
}
assert.ok(html.includes('Calendário da viagem'), 'calendar section must exist');
for (const itinerarySuggestion of ['Museo Precolombino', 'Sky Costanera', 'Karai', 'Ambrosia', 'vinícola em Pirque']) {
  assert.ok(html.includes(itinerarySuggestion), `missing itinerary suggestion: ${itinerarySuggestion}`);
}
for (const checklistText of ['Documentos e comprovantes', 'Segunda pele', 'Notebook e carregador', 'Seguro-viagem', 'Cartões físicos', 'Comprovantes impressos', 'Tarjeta de Turismo', 'Declaração SAG', 'esportes de neve', 'mal de altitude']) {
  assert.ok(html.includes(checklistText), `missing detailed checklist item: ${checklistText}`);
}
for (const forbidden of ['código de reserva', 'numero de cartão', 'número de cartão', 'número do passaporte']) {
  assert.ok(!html.toLowerCase().includes(forbidden), `sensitive content: ${forbidden}`);
}
for (const hook of ['chile-2026-access', 'chile-2026-checklist', 'access-form', 'countdown']) {
  assert.ok(app.includes(hook), `missing behavior hook: ${hook}`);
}

assert.ok(existsSync('.github/workflows/pages.yml'), 'Pages workflow must exist');
const workflow = read('.github/workflows/pages.yml');
for (const action of ['actions/configure-pages', 'actions/upload-pages-artifact', 'actions/deploy-pages']) {
  assert.ok(workflow.includes(action), `missing Pages action: ${action}`);
}

console.log('verify: passed');
