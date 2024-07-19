const api_url = "https://api.breakingbadquotes.xyz/v1/quotes"
const quote = document.getElementById("quote-field")
const author = document.getElementById("author-field")
const newQuoteBtn = document.getElementById("new-btn")
const tweetBtn = document.getElementById("tweet-btn")

async function getUrl(url) {
    try {
        const response = await fetch(url)
        const data = await response.json()

        quote.textContent = data[0].quote
        author.textContent = data[0].author
    } catch (error) {
        quote.textContent = "Failed to load Quote"
        author.textContent = "Failed to load Author name"
        console.error("Error fetching Quote: ", error)
    }
}
getUrl(api_url)

newQuoteBtn.addEventListener("click", function(){
    getUrl(api_url)
})

tweetBtn.addEventListener("click", function(){
    window.open(`https://twitter.com/intent/tweet?text=${quote.textContent} --- by ${author.textContent}`, `Tweet Window`, `width=600px height=300px`)
})