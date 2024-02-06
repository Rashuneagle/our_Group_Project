var giphyDomain = "https://api.giphy.com/v1/gifs/search/?q="
var input1 = document.getElementById("first_Word").value;
var input2 = document.getElementById("second_Word").value;
var giphyAPI = "&api_key=GWaYUXf3AxnPvjVePxBncnHTj7wbHDIK";
var giphyLimit = "&limit=5"
var saveButton = document.getElementById("saveButton");






saveButton.addEventListener("click", function(){
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

