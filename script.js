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

      if(data != null){

        var gifURL = data.data[0].embed_url
        console.log("GIF =" + gifURL);
       

    } else{
        console.error("no gif found");
    }

    })
    .catch(error => {
      // Handle any errors that occur during the fetch operation
      console.error("There was a problem with the fetch operation:", error);
    });

  
});

async function getWords() {

input1 = document.getElementById("first_Word").value;

const wordsAPICall = {
  async: true,
  crossDomain: true,
  url: 'https://wordsapiv1.p.rapidapi.com/words/'+input1+'/rhymes',
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'a7b45f4a68msh02f6773f0d55528p134728jsn30004f353785',
    'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com'
  }
};

$.ajax(wordsAPICall).done(function (response) {
  displayWords(response.rhymes.all);
});

}

function displayWords(data) {

var wordsElement = document.getElementById("words");

for (let i = 0; i < data.length; i++) {

var listElement = document.createElement("li");
var linkElement = document.createElement("a");
linkElement.href = "javascript:setInput2(\""+data[i]+"\");";
linkElement.textContent = data[i];
listElement.appendChild(linkElement);
wordsElement.appendChild(listElement);
}

}

function setInput2 (word) {
  var input2 = document.getElementById("second_Word");
  input2.value = word;
}