//fetch the cat data from the API endpoint using request
//print out the body content to the terminal

const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  const url = "https://api.thecatapi.com/v1/breeds/search?q=" + breedName;
  request(url, (error, response, body) => {
    let desc = "";
    if (!response) {
      error = `The website returned error.  Please enter a valid website url.`;
      return;
    }
    if (response.statusCode < 300 && response.statusCode >= 200) {
      if (body === '[]' || body === '{}') {
        error = "Cat breed not found.";
      } else {
        const data = JSON.parse(body);
        desc = data[0]["description"];
      }
    } else {
      error = `The webpage returned error: ${response.statusCode}.  Please enter a valid web page url.`;
    }
    callback(error, desc);
  });
  return;
};

module.exports = { fetchBreedDescription };
