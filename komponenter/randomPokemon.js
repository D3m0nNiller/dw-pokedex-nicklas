let pokemonNumber = 1;

async function pokemonImages() {
    let pokeUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonNumber}/`;

    pokemonNumber += 1;

    let response = await fetch(pokeUrl);
    let pokemon = await response.json();
    let paddedNumber = getIdFromUrl(pokeUrl).padStart(3, "0")

    rootDom.innerHTML += 
    /*HTML*/
    `
        <h2>${pokemon.name}</h2>
        <img 
            src="${baseUrl}${pokemon.id}.png" 
            alt="${pokemon.name}"
        >
        <p>#${paddedNumber}</p>
    `;
}
async function makePokemon() {
    for (let i = 0; i < 9; i++) {
        await pokemonImages();
    }
}
makePokemon();