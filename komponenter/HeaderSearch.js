export function HeaderSearch () {
    const header = document.createElement("header")
    header.innerHTML = 
    /*HTML*/
    `
        <img src="assets/Pokeball.svg" alt="Pokeball">
        <h1>Pokédex</h1>

        <div>
            <input type="search" name="pokemon-search" id="pokemon" placeholder="Search">

            <button>#</button>
        </div>
    `
    return header
}