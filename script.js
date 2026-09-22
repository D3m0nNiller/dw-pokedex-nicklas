const rootDom = document.querySelector("#root")

import { HeaderSearch } from "./komponenter/HeaderSearch.js";

// let pokelist = []

function render () {
    rootDom.innerHTML = ""
    rootDom.append(HeaderSearch())
}

function init () {
    render()
}
init()