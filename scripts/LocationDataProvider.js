const locationCollection = [
    {
        image: "download.jpg",
        name: "5 Rivers Delta",
        url:`<a href="https://www.outdooralabama.com/activities/5-rivers-alabama-delta-resource-center">5 Rivers Delta Resources</a>`,
        description: "Where the Mobile, Spanish, Tensaw, Apalachee and Blakeley rivers flow into Mobile Bay.",
        

    },
]
  

export const useLocation = () => {
    return locationCollection.slice()
}
