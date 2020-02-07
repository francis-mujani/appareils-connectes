const express = require('express');
const router = express.Router();
const indexController = require('../controller/index');
const editController = require('../controller/edit')
 
// parse application/json
//app.use(bodyParser.json())

// route pour la page d'accueil
router.get('/', indexController.getIndex);

// route pour naviguer vers le formulaire
app.get('/ajouter', indexController.getForm)

// route pour ajouter appareils dans la base de donnée
app.post('/ajouter', indexController.postForm)

// route pour la page about me
app.get('/about', editController.aboutMe)

// route pour modifier un appareil
app.get('/editer/:id', editController.getEdit)

// route pour sauvegarder un appareil modifier
app.put('/editer/:id', editController.putEdit)

// route pour supprimer un appareil
app.delete('/supprimer/:id', indexController.getDelete)

// route pour voir plus des details de l'appareil
app.get('/:id', indexController.getappreilByID);

module.exports = router