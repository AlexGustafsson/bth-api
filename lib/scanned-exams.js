const { fetch } = require('./fetch');

function fetchScannedExams(auth) {
  const url = 'exams/scanned';

  return fetch(url, auth);
}

module.exports = {
  fetchScannedExams
};
