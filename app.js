const express =require('express')
const app=express()
const bodyParser= require('body-parser')
const buscaPokemon = require('./src/functions/buscaPokemon')
const buscaType = require ('./src/functions/buscaNumero.js')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))


app.set('view engine','ejs')
app.set('views','./src/views')


app.get("/", (req,res)=>{
    res.render("index")
})

app.post("/buscarPokemon", async(req,res)=>{
    const { pokemon }  = req.body
    

    const resultado = await buscaPokemon(pokemon)

    res.render('resultado', {dado:resultado})
    console.log(resultado)
})

app.post("/buscarType", async(req,res)=>{
    const { numero_pokemon }  = req.body

    const resultado = await buscaType(numero_pokemon)

    res.render('resultado', {dado:resultado})
    console.log(resultado)
    
})

app.listen(1501)