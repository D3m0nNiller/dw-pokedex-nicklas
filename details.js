const rootDomDetails = document.querySelector("#detailed-root")

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

console.log(id);

fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)

function render () {
    rootDomDetails.innerHTML = ""

    rootDomDetails.innerHTML = /*HTML*/
    `
        <h1>${}</h1>
    `
}

function init () {
fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(function (response) { return response.json() })
        .then(function (data) {
            console.log(data)
            render()
        })
}
init()
