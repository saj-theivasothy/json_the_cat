const request = require('request');

const fetchBreedDescription = (breedName, callback) => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (err, data) => {
    if (err) {
      callback(err, null);
      return;
    }
    const returnedData = JSON.parse(data.body);
    if (returnedData.length === 0) {
      callback('Breed not found', null);
      return;
    }
    callback(null, returnedData[0].description.trim());
  });
};

module.exports = {fetchBreedDescription};



