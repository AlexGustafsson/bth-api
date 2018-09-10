const { fetch } = require('./fetch');

function fetchAccessCards(auth) {
  const url = 'me/accesscards';

  return fetch(url, auth);
}

module.exports = {
  fetchAccessCards
};
