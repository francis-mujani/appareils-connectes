const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const mongoose = require('mongoose');


app = express()

// parse application
app.use(bodyParser.urlencoded({ extended: false }))

// methode override
app.use(methodOverride('_method'))
// connection a la base de donnée
mongoose.connect('mongodb+srv://francis:admin123@cluster0-zbi4v.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
.then(() => {console.log('connexion reussie !')})
.catch(() => { console.log('connexion échoué !')})

app.set('view engine', 'pug');

// create home page
const indexRouter = require('./router/index');
app.use('/', indexRouter);

// create form page
app.use('/ajouter', indexRouter)

// ON UTILISE LE MIDDLEWARE EXPRESS STATIQUE POUR UTILISER LE BOOTSTRAP & NOTRE STYLE PERSO
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'))
app.use(express.static('public'))

// récuperation de l'id de l'appareil
app.use('/:id', indexRouter)

// modifier un appareil
app.use('/editer/:id', indexRouter)

// importation de mon application
module.exports = app;