const test = require('ava').test;

const {
  fetchScannedExams
} = require('../lib/scanned-exams');

test('Can fetch scanned exams', async t => {
  const scannedExams = await fetchScannedExams();

  t.true(typeof scannedExams === 'object');
});
