// setting up basic module
const express = require('express');
const app = express();
app.use(express.static('public'))

// setting up handle-bars
const { engine } = require('express-handlebars');
app.engine('handlebars', engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// setting port 
const port = 3080
app.listen(port, () => {
    console.log("server running on RTX 3080")
})

// goes to home page
app.get('/', (req, res) => {
    res.render('home');
});