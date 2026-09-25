const rootDomDetails = document.querySelector("#detailed-root")

const titleDom = document.querySelector("title")

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

console.log(id);



function render(data) {

    titleDom.textContent = `${data.name}`
    
    const pokemonStats = data.stats.map(function (currentStats) {
    const stat = currentStats.base_stat
    const percentNumber = `${stat}`.padStart(3, "0")
    const percentage = (stat / 255) * 100

    return /*HTML*/`
        <p id="${currentStats.stat.name}">${currentStats.stat.name}</p>
        <div>${percentNumber}</div>
        <div class="percent_bar" style="background-color: #E3F5DA; border-radius: 1em; overflow: hidden;">
            <div class="percent_fill" style=" width: ${percentage}%; background-color: #74CB48; height: 100%;"></div>
        </div>
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
        <div id="all_information">
            <h2 id="small_information">About</h2>
            <p id="weight">
                <span id="weight_number">
                    <i class="fa-solid fa-weight-hanging"></i> ${data.weight} kg 
                </span><br>
               <span class="about_information">Weight</span>
            </p>

            <p id="height"> 
                <span id="height_number">
                    <i class="fa-solid fa-ruler-vertical"></i> ${data.height} m
                </span><br>
                <span class="about_information">Height</span>
            </p>

            <p id="moves">
            <span id="moves_named">
                ${data.abilities["0"].ability.name} <br>
                ${data.abilities["1"].ability.name} 
            </span><br>
                <span class="about_information">Moves</span>
            </p>
        
            <p id="about_pokemon">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero voluptatum tenetur, ad saepe, deserunt eveniet iure esse qui inventore aut aliquid.</p>
            <h2 id="intro_stats">Base Stats</h2>
            <div id="pokemon_stats">
                ${pokemonStats}
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
