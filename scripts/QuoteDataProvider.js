const quoteCollection = [
    {
        content: "Fish are friends, not food.",
        author: "- Bruce the Shark",
      

    },
    {
        content:  "If people concentrated on the really important things in life, there'd be a shortage of fishing poles",
        author: "- Doug Larson",
        
    },
    {
        content: "Fishing is much more than fish. It is the great occasion when we may return to the fine simplicity of our forefathers,",
        author: "- Herbert Hoover",
       
    }
]

export const useQuote = () => {
    return quoteCollection.slice()
}