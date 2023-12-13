var button = document.getElementById("btn");
function goodQuote() {

    var quote = [
        "The best revenge is massive success",
        "Do not take life too seriously. You will not get out alive",
        "Resentment is like drinking poison and waiting for your enemies to die",
        "You miss 100% of the shots you don't take",
        "It's not what happens to you, but how you react to it that matters",
        "Be Yourself; everyone else is already taken",
        "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe",
        "So many books , So little time",
        "You only live once, but if you do it right, once is enough",
        "Be the change that you wish to see in the world"];


    var author = [
        "Frank Sinatra",
        "Elbert Hubbard",
        "Nelson Mandela",
        "Wayne Gretzy",
        "Epictetus",
        "Oscar Wilde",
        "Albert Einstein",
        "frank Zappa",
        "Mae west",
        "Mahatma Gandhi"];
    var quoteNumber = Math.trunc(Math.random() * quote.length);


    document.getElementById("quoteOutput").innerHTML = "\"" + (quote[quoteNumber]) + "." + "\"";
    document.getElementById("authorOutput").innerHTML = "-- " + (author[quoteNumber]);
}
button.onclick = function () {
    goodQuote();
};