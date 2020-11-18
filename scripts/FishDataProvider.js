const fishCollection = [
    {
        name: "bart",
        location: "pet store",
        size: "3 inches",
        species: "beta fish",
        food: "crustaceans",
        image: "beta.jpg",


    },
    {
        name: "BigMouth Billy",
        location: "Tensaw Delta",
        size: "24 inches",
        species: "Largemouth Bass",
        food: "minnows",
        image: "OKBassSub.jpg",
    },
    {
        name: "George",
        location: "Tombigbee River",
        size: "6 inches",
        species: "bream",
        food: "minnows",
        image: "Bream.jpg",  
    }
]

export const useFish = () => {
    return fishCollection.slice()
}