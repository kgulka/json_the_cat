//fetch the cat data from the API endpoint using request
//print out the body content to the terminal

const request = require('request');

const getPageAtURL = function(url) {
  request(url, (error, response, body) => {
    
    if (!response) {
      console.log(`The website returned error.  Please enter a valid website url.`);
      return;
    }
    if (response.statusCode < 300 && response.statusCode >= 200) {
      if (body === '[]') {
        console.log(`The cat breed selected was not found. Please input a different breed.`);
        process.exit;
      } else {
        const data = JSON.parse(body);
        console.log("Cat Description:",data[0]["description"]);
      }
    } else {
      console.log(`The webpage returned error: ${response.statusCode}.  Please enter a valid web page url.`);
    }
  });
};

const breedName = process.argv[2];
if (breedName) {
  const urlIn = "https://api.thecatapi.com/v1/breeds/search?q=" + breedName;
  getPageAtURL(urlIn);
} else {
  console.log(`Please input a breed name.`);
}