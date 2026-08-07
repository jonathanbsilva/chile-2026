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
  'R$ 2.377,98',
  'Airbnb confirmado',
  'SUV 4x4 no aeroporto SCL',
  'El Colorado',
  'Karai',
  'Ambrosia',
  'data-checklist-item',
]) assert.ok(html.includes(text), `missing content: ${text}`);
for (const forbidden of ['passaporte', 'código de reserva', 'numero de cartão', 'número de cartão']) {
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
