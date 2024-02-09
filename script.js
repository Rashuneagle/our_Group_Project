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
      if (data = !null) {
        displayWords(data.data);
      }

      console.log("API response:", data);
    })
    .catch(error => {
      console.error("There was a problem with the fetch operation:", error);
    })

}
};

function displayWords(data) {


let text = document.getElementById("words").textContent;
displayWords.classList.add;
var wordsIndex = 0

  var currentWords = words[wordsIndex]
  console.log(currentWords)
  var wordsElement = document.createElement("ul")
  console.log(wordsElement)
  wordsElement.textContent = currentWords.Words
  console.log(wordsElement)
  displayWords.appendChild(wordsElement)
}

function accessWords() {
  // Get the ul element by its id
  const ul = document.getElementById('words');

  // Get the child li elements of the ul
  const listItems = ul.getElementsByTagName('li');

  // Loop through each li element and access its content
  for (let i = 0; i < listItems.length; i++) {
    console.log(`Item ${i + 1}: ${listItems[i].textContent}`);
  }
}
