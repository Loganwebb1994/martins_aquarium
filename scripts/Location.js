export const Location = (location) => {
    return `
    <div><img  class="location__image image--card" src="images/${location.image}" /></div>
    <div class="location__name">${location.name}</div>
    <div class="location__url">${location.url}</div>
    <div class="location__description">${location.description}</div>
    `
}