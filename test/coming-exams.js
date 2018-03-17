const test = require('ava').test;

const {
  fetchComingExams
} = require('../lib/coming-exams');

test('Can fetch coming exams', async t => {
  const comingExams = await fetchComingExams();

  t.true(typeof comingExams === 'object');
});
