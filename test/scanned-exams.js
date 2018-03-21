const test = require('ava').test;

const {
  fetchScannedExams
} = require('../lib/scanned-exams');

test('Can fetch scanned exams', async t => {
  const scannedExams = await fetchScannedExams(process.env['BTH_AUTH_KEY']);

  t.true(typeof scannedExams === 'object');
});
