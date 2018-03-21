const { fetch } = require('./fetch');

function fetchUserInfo(auth) {
  const url = 'me';

  return fetch(url, auth);
}

module.exports = {
  fetchUserInfo
};
