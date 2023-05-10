// require express
const express = require('express');
// set express() to a variable
const app = express();
// set a variable of port to 3000
const port = 3000;

// include a get route / that will res.send('Welcome to the Pokemon App!'); so that when you got to localhost:3000, you will see Welcome to the Pokemon App!

app.get('/',(req,res)=>{
    res.send(`<h1>Wlcome to the Pokemon APP!</h1>`)
})

// In terminal

// nodemon or nodemon server.js (if you set your package.json to start server.js you do't need to put it after nodemon )

// GOTCHA! : nodemon will only work if you run it from the same location as your package.json
// In the browser

// go to localhost:3000
// check that you have your Welcome to the Pokemon App! message displaying



// set your app to listen to the port and include a console.log(), so that you can tell when your server is running
app.listen(port, ()=>{
    console.log(`Server is listening on port ${port}`)
})