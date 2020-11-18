export const Quote = (quote) => {
    return `
        <section class="quote card">
            <div class="quote_content">${quote.content}</div>
            <div class="quote__author">${quote.author}</div>
        </section>
    `
}
