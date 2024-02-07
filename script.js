var wordsDomain = "https://wordsapiv1.p.rapidapi.com/v1/words/search/rhymes/?q="
var wordsAPI = "&api_key=a7b45f4a68msh02f6773f0d55528p134728jsn30004f353785"
var wordsLimit = "&limit=10"

var wordsAPICall = wordsDomain+input1+'%20'+input2+wordsAPI+wordsLimit;
    console.log(wordsAPICall)

    fetch(wordsAPICall)
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
    });