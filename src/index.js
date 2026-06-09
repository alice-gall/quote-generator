function generateQuote(event) {
  event.preventDefault();
  new Typewriter("#quote", {
    strings: `You miss 100% of the<br />shots you don't take.`,
    autoStart: true,
    cursor: null,
    delay: 25,
  });
}

let quoteFormElement = document.querySelector("#quote-generator-form");
quoteFormElement.addEventListener("submit", generateQuote);
