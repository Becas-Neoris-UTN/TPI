const api = "https://api.quotable.io/random?maxLength=50";

const quote = document.getElementById("quote");
const author = document.getElementById("author");

function changeFrase() {
    fetch(api)
        .then((res) => res.json())
        .then((data) => {
            quote.innerHTML = `"${data.content}"`;
            author.innerHTML = `- ${data.author}`;
        });
}

changeFrase()

setInterval (function () {
    changeFrase()
}, 10000)



