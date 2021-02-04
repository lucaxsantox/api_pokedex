const fetch = require("node-fetch");

module.exports = async function buscaNumero(numero_pokemon){
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${numero_pokemon}`)
    const json = await response.json()
    return json 
}

