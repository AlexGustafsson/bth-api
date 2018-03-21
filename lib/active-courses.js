const { fetch } = require('./fetch');

function fetchActiveCourses(auth) {
  const url = 'ladok3/student/activecourses';

  return fetch(url, auth);
}

module.exports = {
  fetchActiveCourses
};
