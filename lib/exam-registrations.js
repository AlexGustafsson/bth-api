const { fetch } = require('./fetch');

function fetchExamRegistrations(auth) {
  const url = 'exams/registrations';

  return fetch(url, auth);
}

module.exports = {
  fetchExamRegistrations
};
