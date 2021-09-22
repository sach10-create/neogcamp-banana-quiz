var buttonAction = document.querySelector("#translate-button");
var userInput = document.querySelector("#translate-input");
var output = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/minion.json"

function getTranslationUrl(text) {
    return serverURL + "?" + "text=" + text
}

function clickHandler() {
    // console.log("clicked");
    var user_input = userInput.value;

    fetch(getTranslationUrl(user_input))
        .then(response => response.json())
        .then(json => {
            var transText = json.contents.translated;
            output.innerHTML = transText;
        })
};

buttonAction.addEventListener("click", clickHandler)