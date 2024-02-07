var giphyDomain = "https://api.giphy.com/v1/gifs/search/?q="
var giphyAPI = "&api_key=GWaYUXf3AxnPvjVePxBncnHTj7wbHDIK";
var giphyLimit = "&limit=5"
var getGif = document.getElementById("getGif");
var searchBtn = document.getElementById("rhymingWords");

searchBtn.addEventListener("click", getWords);

getGif.addEventListener("click", function(){
     input1 = document.getElementById("first_Word").value;
     input2 = document.getElementById("second_Word").value;


    var giphyAPICall = giphyDomain+input1+'%20'+input2+giphyAPI+giphyLimit;
    console.log(giphyAPICall)

    // Make API call when the button is clicked
    fetch(giphyAPICall)
    .then(response => {
      // Check if the response is successful
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      // Parse the response as JSON
      return response.json();
    })
    .then(data => {
      // Handle the data from the API response
      console.log("API response:", data);
      // Perform any further actions with the data
    })
    .catch(error => {
      // Handle any errors that occur during the fetch operation
      console.error("There was a problem with the fetch operation:", error);
    });
});

function getWords() {

input1 = document.getElementById("first_Word").value;

var wordsDomain = "https://wordsapiv1.p.rapidapi.com/words/"+input1+"/rhymes";

var wordsAPICall = wordsDomain;
    console.log(wordsAPICall)

    if (input1.length > 2) {
    fetch(wordsAPICall, {
        method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a7b45f4a68msh02f6773f0d55528p134728jsn30004f353785',
		'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com'
	}
    })
    .then(response => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then(data => {
      console.log("API response:", data);
    })
    .catch(error => {
      console.error("There was a problem with the fetch operation:", error);
    })
}
};
