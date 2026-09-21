let pokeUrl = "https://pokeapi.co/api/v2/pokemon/1/"
let baseUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/"

function getIdFromUrl(url) {
    return url.slice(0, -1).split("/").pop()
}

let newString = getIdFromUrl(pokeUrl)

let imageString = baseUrl + getIdFromUrl(pokeUrl) + '.png'

const rootDom = document.querySelector("#root")

let pokemonNumber = 1;

async function pokemonImages() {
    let pokeUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonNumber}/`;

    pokemonNumber += 3;

    let response = await fetch(pokeUrl);
    let pokemon = await response.json();

    rootDom.innerHTML += 
    /*HTML*/
    `
        <img 
            src="${baseUrl}${pokemon.id}.png" 
            alt="${pokemon.name}"
        >
    `;
}

async function makePokemon() {
    for (let i = 0; i < 9; i++) {
        await pokemonImages();
    }
}

makePokemon();











// async function pokemon(pokemonParam) {
//     try {
//         const response = await fetch(`https://pokeapi.co/api/v2/pokemon/`)
//         if (!response.ok) {
//             throw new Error(`Didint get fetched right ${response.status}`)
//         }

//         const pokemonData = await response.json()
//         console.log(pokemonData);

//     } catch (error) {
//         console.error("Failed to fetch the data", error)
//     }
// }

// pokemon()

// console.log(rootDom);

// function htmlBuild(header) {
//     rootDom.innerHTML =
//         /* HTML */
//         `
//         <header><img src="assets/Pokeball.svg" alt="Pokeball"> <p>Pokémon</p></header>
//     `
// }
// htmlBuild()