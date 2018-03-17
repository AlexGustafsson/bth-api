const { fetchCoursePlans } = require('./course-plans');
const { fetchCoursePlan } = require('./course-plan');

function fetchCourseBooks(courseId) {
  return fetchCoursePlans(courseId)
    .then(courseIds => {
      if (courseIds.length === 0)
        return Promise.resolve([]);

      const latest = courseIds[0];
      const revision = latest.revision;

      return fetchCoursePlan(courseId, revision, true)
        .then(text => {
          const matchList = /ISBN [0-9-]{10,17}/g;

          let match = null;
          const matches = [];
          do {
            match = matchList.exec(text);
            if (match)
              matches.push(match[0]);
          } while (match);

          return Promise.resolve(matches);
        });
    });
}

module.exports = {
  fetchCourseBooks
};
