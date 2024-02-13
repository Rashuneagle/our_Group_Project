var giphyDomain = "https://api.giphy.com/v1/gifs/search/?q="
var giphyAPI = "&api_key=GWaYUXf3AxnPvjVePxBncnHTj7wbHDIK";
var giphyLimit = "50";
var getGif = document.getElementById("getGif");
var searchBtn = document.getElementById("rhymingWords");
var close = document.getElementById('close');
searchBtn.addEventListener("click", getWords);
var gifIndex = 0;

getGif.addEventListener("click", function(){
     input1 = document.getElementById("first_Word").value;
     input2 = document.getElementById("second_Word").value;


    var giphyAPICall = giphyDomain+input1+'%20'+input2+giphyAPI+"&limit="+giphyLimit;
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
        getGifUrl(data);
       

    } else{
        console.error("no gif found");
    };

    })
    .catch(error => {
      // Handle any errors that occur during the fetch operation
      console.error("There was a problem with the fetch operation:", error);
    });  
    
   
  
});

function getGifUrl(data){
   
    var gifURL = data.data[gifIndex].embed_url;
    displayGIF(gifURL);
    gifIndex++;
    console.log(`gifIndex = ${gifIndex}`);
};


function displayGIF(gifURL){
    console.log("GIF =" + gifURL);
    let image = document.getElementById("image")
    image.src = gifURL;
    var modalURL = document.createElement('div');
    var modal = document.getElementById('modal1');
    modal.classList.add('is-active');

};

close.addEventListener('click', function(){
    var modal = document.getElementById('modal1');
    modal.classList.remove('is-active');
});


 refresh.addEventListener('click', function(data){
    // getGifUrl(data);
    var giphyAPICall = giphyDomain+input1+'%20'+input2+giphyAPI+"&limit="+giphyLimit;
    console.log(giphyAPICall)



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
        getGifUrl(data);
       

    } else{
        console.error("no gif found");
    };

    })
    .catch(error => {
      // Handle any errors that occur during the fetch operation
      console.error("There was a problem with the fetch operation:", error);
    });  
    

 });

 var wordsElement = document.getElementById("words");

function getWords() {

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
   $("#words").empty();
  //  document.getElementById("words").innerHTML = "";
  displayWords(response.rhymes.all);
});

}

function displayWords(data) {
//  wordsElement.children = [];
//  wordsElement.appendChild([]);
for (let i = 0; i < data.length; i++) {

var listElement = document.createElement("li");
var linkElement = document.createElement("a");
linkElement.href = "javascript:setInput2(\""+data[i]+"\");";
linkElement.textContent = data[i];
listElement.appendChild(linkElement);
wordsElement.appendChild(listElement);
/*wordsElement.appendChild(document.createElement("br"))*/
}

}

function setInput2 (word) {
  var input2 = document.getElementById("second_Word");
  input2.value = word;
}

