function displayQuote(response) {
  new Typewriter("#quote", {
    strings: response.data.answer,
    autoStart: true,
    cursor: null,
    delay: 25,
  });
}

function generateQuote(event) {
  event.preventDefault();
  let topicInput = document.querySelector("#user-topic-input");
  let topic = topicInput.value;

  let apiKey = "d043896d344020fed4co182b1f4a0tb8";
  let context =
    "You are a motivational AI assistant who creates inspirational quotes. Your mission is to generate a 4 line quote in basic HTML and separate each line with a <br />. Example: <span> quote <br /> quote</span>. The quote should not be a poem and should not be 4 separate sentences. Sign the quote with 'SheCodes AI' inside a <strong> element at the end of the quote, after a <br />";
  let prompt = `Please generate a short and unique quote about ${topic}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("Generating quote");
  axios.get(apiUrl).then(displayQuote);
}

let quoteFormElement = document.querySelector("#quote-generator-form");
quoteFormElement.addEventListener("submit", generateQuote);
