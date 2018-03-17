const axios = require('axios');

const ENDPOINT = 'http://edu.bth.se/utbildning/';

function formatCoursePlans(source) {
  const matchList = /<li> (<a href="utb_kursplan.asp\?Kurskod=.*)<\/li>/g;

  let match = null;
  const matches = [];
  do {
    match = matchList.exec(source);
    if (match) {
      const item = match[0];
      const revisionMatch = item.match(/RevisionsNr=(.*)&/);
      const createdMatch = item.match(/([0-9]{4}-[0-9]{2}-[0-9]{2})/); // eslint-disable-line unicorn/regex-shorthand
      const revision = revisionMatch ? revisionMatch[1] : null;
      const created = createdMatch ? createdMatch[1] : null;
      matches.push({revision, created});
    }
  } while (match);

  return Promise.resolve(matches);
}

function fetchCoursePlans(courseId) {
  const params = {
    'sok': courseId,
    'sortering': 'Kurskod',
    'lang': 'sv'
  };

  return axios.get(ENDPOINT + 'utb_kursplaner.asp', {params})
    .then(res => formatCoursePlans(res.data));
}

module.exports = {
  fetchCoursePlans
};
