const request = require('request');

request(`https://api.thecatapi.com/v1/breeds/search?q=${process.argv[2]}`, (err, data) => {
  
  if (err) {
    console.log('error is returned ', err);
  }
  const returnedData = JSON.parse(data.body);
  if (returnedData.length === 0) {
    console.log('Breed not found');
    return err;
  }
  console.log(returnedData[0].description);
  console.log('=====================================');
  console.log(typeof returnedData);
});

