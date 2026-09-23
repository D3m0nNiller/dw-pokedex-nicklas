let baseUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/"
let pokeUrl = "https://pokeapi.co/api/v2/pokemon/1/"

function getIdFromUrl(url) {
    return url.slice(0, -1).split("/").pop()
}

let newString = getIdFromUrl(pokeUrl)

let imageString = baseUrl + getIdFromUrl(pokeUrl) + "png"

let paddedNumber = getIdFromUrl(pokeUrl).padStart(3, "0")

const rootDom = document.querySelector("#root")

import { HeaderSearch } from "./komponenter/HeaderSearch.js";

let pokelist = [];

function render() {
    rootDom.innerHTML = ""
    rootDom.append(HeaderSearch())

    const mainDom = document.createElement("main")
    mainDom.innerHTML =
        /*HTML*/
        `
            ${pokelist.map(function (pokemon) {
            console.log(pokemon)
            return /*HTML*/`
                    <div>
                        <h3>${pokemon.name}</h3>
                        <img src="${baseUrl + getIdFromUrl(pokemon.url) + ".png"}" alt="${pokemon.name}">
                        <p>#${getIdFromUrl(pokemon.url).padStart(3, "0")}</p>
                    </div>
                `
        }).join("")}
        
    `
    rootDom.append(mainDom)
}

function init() {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=30")
        .then(function (response) { return response.json() })
        .then(function (data) {
            pokelist = data.results
            console.log(data.results)
            render()
        })
}
init()