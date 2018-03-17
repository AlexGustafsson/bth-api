const { fetch } = require('./fetch');

function fetchActiveCourses() {
  const url = 'ladok3/student/activecourses';

  return fetch(url);
}

module.exports = {
  fetchActiveCourses
};
