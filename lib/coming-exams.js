const { fetch } = require('./fetch');

function fetchComingExams(from, to, courseId) {
  const url = 'exams';
  const params = {
    'fromDate': '2018-03-17',
    'toDate': '2018-06-07'
  };

  if (from)
    params['fromDate'] = from;
  if (to)
    params['toDate'] = to;
  if (courseId)
    params['courseId'] = courseId;

  return fetch(url, params);
}

module.exports = {
  fetchComingExams
};
