var quotes = [
    "You are who you are meant to be. Dance as if no ones watching. Love as if its all you know. Dream as if youll live forever. Live as if youll die today.<br/> - James Dean",

    "You do not find the happy life. You make it. <br/>- Camilla Eyring Kimball",

   "Youve gotta dance like theres nobody watching, Love like youll never be hurt, Sing like theres nobody listening, And live like its heaven on earth. <br/>-  William W. Purkey",

   "Happiness is not something readymade. It comes from your own actions. <br/> - Dalai Lama",

   "Folks are usually about as happy as they make up their minds to be. <br/> - Odida"
]


function newQuote() {
    const random = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quoteDisplay').innerHTML = quotes[random];
}


const btn = document.querySelector('button');

function random(number) {
  return Math.floor(Math.random() * (number+1));
}

btn.addEventListener('click', () => {
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
});
