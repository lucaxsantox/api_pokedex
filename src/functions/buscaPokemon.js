const fetch = require("node-fetch");

module.exports = async function buscaPokemon(pokemon){
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    const json = await response.json()
    return json 
}

