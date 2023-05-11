// require express
const express = require('express');
// set express() to a variable
const app = express();
// set a variable of port to 3000
const port = 3000;
// Data:
const pokemon = require("./models/pokemon")
//###### 1.
const mongoose = require('mongoose');

require('dotenv').config();

// Middleware:
// app.use((req,res,next)=>{
//     next();
// })
// app.use(express.urlencoded({extended:false}));

//###### 2.
mongoose.set("strictQuery", false);// DeprecationWarning: Mongoose: the `strictQuery` option will be switched back to `false` by default in Mongoose 7
mongoose.connect(process.env.MONGO_URI, 
        { useNewUrlParser: true, 
            useUnifiedTopology: true, 
            // useCreateIndex: true
        });
mongoose.connection.once('open', ()=> {
    console.log('connected to mongo');
});
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
    // res.render('Index')
    pokemon.find({}, (error, allPokemon)=>{
        res.render('Index', {
            pokemon: allPokemon
        })
    })
})

app.get('/pokemon/new',(req,res)=>{
    res.render('New');
})


// POST:
// app.post('/pokemon', (req, res)=>{
//     pokemon.push(req.body);
//     console.log(pokemon)
//     res.redirect('/pokemon')
// })
 
//###### 3.
app.post('/pokemon/', (req, res)=>{
    pokemon.create(req.body, (error, createdPokemon)=>{
        console.log(pokemon)
        res.redirect('/pokemon')
    })
})


//###### 4.
app.get('/pokemon/:id', (req,res)=>{
    // res.send(req.params.id)
    // res.render('Show',{pokemon: pokemon[req.params.id]})
    pokemon.findById(req.params.id, (err, foundPokemon)=>{
        res.render('Show',{
            pokemon: foundPokemon
        });
    })
})

// set your app to listen to the port and include a console.log(), so that you can tell when your server is running
app.listen(port, ()=>{
    console.log(`Server is listening on port ${port}`)
})

