const { fetchUserInfo } = require('./user');
const { fetchScannedExams } = require('./scanned-exams');
const { fetchScannedExam } = require('./scanned-exam');
const { fetchExamRegistrations } = require('./exam-registrations');
const { fetchCourseRegistrations } = require('./course-registrations');
const { fetchCoursePlans } = require('./course-plans');
const { fetchCoursePlan } = require('./course-plan');
const { fetchCourseBooks } = require('./course-books');
const { fetchComingExams } = require('./coming-exams');
const { fetchActiveCourses } = require('./active-courses');

module.exports = {
  fetchUserInfo,
  fetchScannedExams,
  fetchScannedExam,
  fetchExamRegistrations,
  fetchCourseRegistrations,
  fetchCoursePlans,
  fetchCoursePlan,
  fetchCourseBooks,
  fetchComingExams,
  fetchActiveCourses
};
