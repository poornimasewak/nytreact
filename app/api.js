// Requiring axios npm package
var axios = require('axios');

// Assign NYT APIKey in a variable
var APIKey = " 85f9fd7c4f8949b7b9f2a98cdba98f68";

// Make a request for a user with a given ID 
// export it
axios.get('https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key='+ APIKey + "&q=")
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });