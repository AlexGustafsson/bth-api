const { fetch } = require('./fetch');

function fetchScannedExam(examId) {
  const url = `exams/scanned/${examId}`;
  const options = {
    responseType: 'arraybuffer'
  };

  return fetch(url, options);
}

module.exports = {
  fetchScannedExam
};
