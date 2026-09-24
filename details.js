const rootDomDetails = document.querySelector("#detailed-root")

const titleDom = document.querySelector("title")

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

console.log(id);



function render(data) {

    titleDom.textContent = `${data.name}`
    
    const pokemonStats = data.stats.map(function (currentStats){
        const percentNumber = `${currentStats.base_stat}`.padStart(3, "0")
        return /*HTML*/`
            <p>${currentStats.stat.name}</p> <div>${percentNumber} <div class="percent_bar"></div></div>
        `
    }).join("")
    rootDomDetails.innerHTML = /*HTML*/
        `
        <img src="assets/Pokeball.svg" alt="Pokeball" class="background_pokeball">
        <div class="pokemon_name">
            <a href="index.html"><i class="fa-solid fa-arrow-left go-back"></i></a>
            <h1>${data.name}</h1>
            <p>#${id.padStart(3, "0")}</p>
        </div>
        <img src="${data.sprites.other["official-artwork"].front_default}" alt="${data.name}">
        <i class="fa-solid fa-greater-than next_pokemon"></i>
        <h2>About</h2>
        <div id="all_information">
            <p><i class="fa-solid fa-weight-hanging"></i> ${data.weight} <br>
               <span class="about_information">Weight</span>
            </p>

            <p><i class="fa-solid fa-ruler-vertical"></i> ${data.height} <br>
                <span class="about_information">Height</span>
            </p>

            <p>${data.abilities["0"].ability.name} <br>
                ${data.abilities["1"].ability.name} <br>
                <span class="about_information">Moves</span>
            </p>
        
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero voluptatum tenetur, ad saepe, deserunt eveniet iure esse qui inventore aut aliquid.</p>
            <h2>Base Stats</h2>
            <div>
                <p>${pokemonStats}</p>
            </div>
        </div>
    `
}

function init() {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            console.log(data)
            render(data)
        })
}
init()
