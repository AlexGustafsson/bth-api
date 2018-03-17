const { fetch } = require('./fetch');

function fetchExamRegistrations() {
  const url = 'exams/registrations';

  return fetch(url);
}

module.exports = {
  fetchExamRegistrations
};
