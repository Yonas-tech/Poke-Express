# Poke-Express

This is a backend project using Express, React, and JSX engine. The server has three pages for Pokemon, Index.jsx, New.jsx, and Show.jsx and one model, pokemon.js. 

host: http://localhost:3000/

1. '/' is the homepage and welcomes the visitor,
2. '/pokemon' shows the list of all Pokemon already in the database and newly added once
    - Clicking the names of the pokemons will open the a show page for each pokemon, '/pokemon/<id>'
4. '/pokemon/new' has a form to add a new pokemon to the database and redirects the visitor to '/pokemon' on submit

Here is some test data for adding to the current local instance of the database:

Name: Sprigatito
URL: https://archives.bulbagarden.net/media/upload/e/e2/0906Sprigatito.png

Name: Pidgeotto
URL: https://archives.bulbagarden.net/media/upload/8/82/0017Pidgeotto.png

Name: Pidgey
URL: https://archives.bulbagarden.net/media/upload/0/0c/0016Pidgey.png

