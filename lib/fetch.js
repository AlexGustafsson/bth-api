const axios = require('axios');

const ENDPOINT = 'https://studentportal.bth.se/api/';

function fetch(url, params) {
  params = Object.assign({

  }, params);

  const headers = {
    Cookie: `.BTHAT=${process.env['BTH_AUTH_KEY']};Domain=studentportal.bth.se; Path=/`
  };

  return axios.get(ENDPOINT + url, {headers, params})
    .then(response => Promise.resolve(response.data));
}

module.exports = {
  fetch
};
