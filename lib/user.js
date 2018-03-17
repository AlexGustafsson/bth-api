const { fetch } = require('./fetch');

function fetchUserInfo() {
  const url = 'me';

  return fetch(url);
}

module.exports = {
  fetchUserInfo
};
