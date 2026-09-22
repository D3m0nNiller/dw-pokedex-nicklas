let pokemonCount;

async function getPokemonCount() {
    const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=1"
    );

    const data = await response.json();

    pokemonCount = data.count;
}

async function getRandomPokemon() {
    const randomId = Math.floor(Math.random() * pokemonCount) + 1;

    const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${randomId}`
    );

    const pokemon = await response.json();

    const paddedNumber = String(randomId).padStart(3, "0");

    rootDom.innerHTML = `
        <h2>${pokemon.name}</h2>
        <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
        <p>#${paddedNumber}</p>
    `;
}

async function init() {
    await getPokemonCount();
    getRandomPokemon();
}
init();