// require express
const express = require('express');
// set express() to a variable
const app = express();
// set a variable of port to 3000
const port = 3000;

// Data:
const pokemon = require("./models/pokemon")

// Middleware:
app.use((req,res,next)=>{
    next();
})
app.use(express.urlencoded({extended:false}));


//JSX view engine:
app.set("view engine", "jsx")
app.engine("jsx",require('jsx-view-engine').createEngine() ) 


// Routes:

// include a get route / that will res.send('Welcome to the Pokemon App!'); so that when you got to localhost:3000, you will see Welcome to the Pokemon App!
app.get('/',(req,res)=>{
    res.send(`<h1>Wlcome to the Pokemon APP!</h1>`)
})

app.get('/pokemon', (req,res)=>{
    // res.send(pokemon)
    res.render('Index',{pokemon: pokemon})
})

app.get('/pokemon/new',(req,res)=>{
    res.render('New');
})


app.get('/pokemon/:id', (req,res)=>{
    // res.send(req.params.id)
    res.render('Show',{pokemon: pokemon[req.params.id]})
})


// POST:
app.post('/pokemon', (req, res)=>{
    pokemon.push(req.body);
    console.log(pokemon)
})


// set your app to listen to the port and include a console.log(), so that you can tell when your server is running
app.listen(port, ()=>{
    console.log(`Server is listening on port ${port}`)
})

