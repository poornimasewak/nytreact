// Include the axios package for performing HTTP requests (promise based alternative to request)
var axios = require('axios');
// Authentication Key to search NYT db
var apiKey = "85f9fd7c4f8949b7b9f2a98cdba98f68";

// Helper Functions (in this case the only one is runQuery)
var helpers = {

	// This function serves our purpose of running the query to Search.
	runQuery: function(topic){

		// console.log(topic);

		var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + apiKey + "&q=" + topic;

		return axios.get(queryURL)
			.then(function(response){
                 var resArray = response.data.response.docs;
				var getHeadline = resArray.map(function (arr){
					return arr.lead_paragraph;
				})
				
				// function to display search result
				function displayResult() {
					
    				document.getElementById("dispResult").innerHTML = getHeadline[0] + '<button>Save</button><br/>' + getHeadline[1]
					+ '<button>Save</button><br/>' + getHeadline[2]+ '<button>Save</button><br/>' + getHeadline[3]+ '<button>Save</button><br/>' + getHeadline[4]
					+ '<button>Save</button><br/>' + getHeadline[5]+ '<button>Save</button><br/>' + getHeadline[6]+ '<button>Save</button><br/>' + getHeadline[7]
					+ '<button>Save</button><br/>' + getHeadline[8]+ '<button>Save</button><br/>' + getHeadline[9] + '<button>Save</button>';
					
				}
				displayResult();
				return resArray;
		})

	},

	// This function hits our own server to retrieve the record of query results
	getSearch: function(){

		return axios.get('/api/saved')
			.then(function(response){

				console.log(response);
				return response;
			});
	},

	// // This function posts new searches to our database.
	postSearch: function(topic){

		return axios.post('/api/saved', {topic: topic})
			.then(function(results){

				console.log("Posted to MongoDB");
				return(results);
			})
	}

}


// We export the helpers function
module.exports = helpers;