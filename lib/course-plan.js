const axios = require('axios');
const pdfToText = require('pdf-text');

const ENDPOINT = 'http://edu.bth.se/utbildning/';

function formatCoursePlan(data, asText) {
  if (asText === false)
    return Promise.resolve(data);

  return new Promise((resolve, reject) => {
    pdfToText(data, (error, chunks) => {
      if (error)
        return reject(error);

      resolve(chunks.join(' '));
    });
  });
}

function fetchCoursePlan(courseId, revision, asText = false) {
  const params = {
    'Kurskod': courseId,
    'RevisionsNr': revision,
    'format': 'pdf'
  };

  const options = {
    params
  };

  if (asText !== false)
    options.responseType = 'arraybuffer';

  return axios.get(ENDPOINT + 'utb_kursplan.asp', options)
    .then(response => Promise.resolve(response.data))
    .then(data => formatCoursePlan(data, asText));
}

module.exports = {
  fetchCoursePlan
};
