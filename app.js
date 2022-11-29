const express = require('express')
const hbs = require('hbs');
require('dotenv').config();
const app = express()
const port = process.env.PORT;

//handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');



app.use( express.static( 'public' ));

app.get('/hola-mundo', function (req, res) {
    res.send('Activa segunda url')
  })

  app.get('/', function (req, res) {
    res.render('home', {
      nombre: "Julian Alvarez",
      titulo: "Curso de Node"
    });
  })

  app.get('/generic', function (req, res) {
    res.render('generic', {
      nombre: "Julian Alvarez2",
      titulo: "Curso de Node2"
    });
  })

  app.get('/elements', function (req, res) {
    res.render('elements', {
      nombre: "Julian Alvarez3",
      titulo: "Curso de Node3"
    });
  })

  //app.get('/generic', function (req, res) {
  //  res.redirect('generic.html')
  //})

  app.get('*', function (req, res) {
    res.sendFile(__dirname + '/public/404.html')
  })

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })

