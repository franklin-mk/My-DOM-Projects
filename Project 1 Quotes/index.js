const btn = document.querySelector("#new-quote");
const quote = document.querySelector(".quote");
const person = document.querySelector(".person");

const quotes = [
    {
        quote: "Imagination is more important than knowledge.",
        person: "Albert Einstein"
    },
    {
        quote: "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
        person: "Maya Angelou"
    },
    {
        quote: "Stay hungry, stay foolish.",
        person: "Steve Jobs"
    },
    {
        quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        person: "Nelson Mandela"
    },
    {
        quote: "The secret of getting ahead is getting started.",
        person: "Mark Twain"
    },
    {
        quote: "The biggest adventure you can take is to live the life of your dreams.",
        person: "Oprah Winfrey"
    },
    {
        quote: "All our dreams can come true, if we have the courage to pursue them.",
        person: "Walt Disney"
    },
    {
        quote: "The time is always right to do what is right.",
        person: "Martin Luther King Jr."
    },
    {
        quote: "I am seeking, I am striving, I am in it with all my heart.",
        person: "Vincent Van Gogh"
    },
    {
        quote: "You must never be fearful about what you are doing when it is right.",
        person: "Rosa Parks"
    }
]

btn.addEventListener("click", function(){
    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})