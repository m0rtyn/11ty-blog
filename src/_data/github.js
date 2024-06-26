const EleventyFetch = require('@11ty/eleventy-fetch');

module.exports = async function () {
  let url = 'https://api.github.com/users/m0rtyn/repos';

  // returning promise

  let data = await EleventyFetch(url, {
    duration: '1d',
    type: 'json'
  });

  return data;
};
