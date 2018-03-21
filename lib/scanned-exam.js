const { fetch } = require('./fetch');

function fetchScannedExam(examId, auth) {
  const url = `exams/scanned/${examId}`;
  const options = {
    responseType: 'arraybuffer'
  };

  return fetch(url, auth, options);
}

module.exports = {
  fetchScannedExam
};
