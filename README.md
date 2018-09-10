# Blekinge Tekniska Högskola (BTH) API for NodeJS
### A fully async API written in ES6 for retrieval of most parts of BTH's student portal
***
![npm badge](https://img.shields.io/npm/v/bth-api.svg)

### Setting up

##### Installing

```
npm install bth-api
```

##### Quickstart

```JavaScript
const api = require('bth-api');

// Fetch course books, fetches the available course plans,
//  picks the latest one, downloads the PDF and exctracts
//  ISBN numbers, which it returns
const books = await api.fetchCourseBooks('MA1444');

console.print(books[0]);
```

```
> ISBN 978-91-47-05291-2
```

_Note: For now, the API uses requires an auth parameter to authenticate. The key is received by signing in to the student portal at BTH's website and extracting the value for the cookie '.BTHAT'._

### Documentation

##### API

```JavaScript
  const api = require('bth-api');
  api.fetchUserInfo(auth);
  api.fetchScannedExams(auth);
  api.fetchScannedExams(examId, auth);
  api.fetchScannedExam(examId, auth);
  api.fetchExamRegistrations(auth);
  api.fetchCourseRegistrations(auth);
  api.fetchCoursePlans(courseId);
  api.fetchCoursePlan(courseId, revision, asText = false);
  api.fetchCourseBooks(courseId);
  api.fetchComingExams(from, to, courseId);
  api.fetchActiveCourses(auth);
  api.fetchAccessCards(auth);
  api.fetchCourseResults(auth, courseId, courseOccasion, courseCode);
```

_Note: the documentation is not yet completed. The API is still subject to change._

### Contributing

Any contribution is welcome. If you're not able to code it yourself, perhaps someone else is - so post an issue if there's anything on your mind.

###### Development

Clone the repository:
```
git clone https://github.com/AlexGustafsson/bth-api.git && cd bth-api
```

Set up for development:
```
npm install
```

Follow the conventions enforced:
```
npm test
```

### Disclaimer

_Although the project is very capable, it is not built with production in mind. Therefore there might be complications when trying to use the API for large-scale projects meant for the public. The API was created to easily fetch student related information from BTH's services programmatically and as such it might not promote best practices nor be performant. This project is not in any way affiliated with Blekinge Tekniska Högskola (BTH)._
