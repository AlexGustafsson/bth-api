const { fetch } = require('./fetch');

function fetchScannedExams() {
  const url = 'exams/scanned';

  return fetch(url);
}

module.exports = {
  fetchScannedExams
};
