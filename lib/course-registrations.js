const { fetch } = require('./fetch');

function fetchCourseRegistrations() {
  const url = 'ladok3/course_occasions/registrations';
  const params = {
    'onlyAvailableForRegistration': false
  };

  return fetch(url, params);
}

module.exports = {
  fetchCourseRegistrations
};
