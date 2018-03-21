const axios = require('axios');

const ENDPOINT = 'https://studentportal.bth.se/api/';

function fetch(url, auth, params) {
  params = Object.assign({

  }, params);

  const headers = {

  };

  if (auth)
    headers['Cookie'] = `.BTHAT=${auth};Domain=studentportal.bth.se; Path=/`;

  return axios.get(ENDPOINT + url, {headers, params})
    .then(response => Promise.resolve(response.data));
}

module.exports = {
  fetch
};
