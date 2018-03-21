const { fetch } = require('./fetch');

function fetchCourseRegistrations(auth) {
  const url = 'ladok3/course_occasions/registrations';
  const params = {
    'onlyAvailableForRegistration': false
  };

  return fetch(url, auth, params);
}

module.exports = {
  fetchCourseRegistrations
};
