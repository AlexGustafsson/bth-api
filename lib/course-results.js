const { fetch } = require('./fetch');

function fetchCourseResults(auth, courseId, courseOccasion, courseCode) {
  const url = 'ladok3/student/result';

  return fetch(url, auth, {
    courseUid: courseId,
    courseOccasionUid: courseOccasion,
    courseCode
  });
}

module.exports = {
  fetchCourseResults
};
