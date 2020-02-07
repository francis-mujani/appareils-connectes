const Appareils = require('../model/Appareils');

// controller home page
const getIndex = (req, res) => {
    Appareils.find({}, (err, appareils) => {
        if(err) console.log(err);
        res.render('index', {appareils: appareils});
    });
}

// controller form page
const getForm = (req, res) => {
    res.render('formulaire');
}

// controller post data in database
const postForm = (req, res) => {
    const { name, status, color, type, puissance, description } = req.body;
    const newAppareil = new Appareils({
        name: name,
        status: status,
        types: [{
                type: type
        }],
        color: color,
        puissance: puissance,
        prix: req.body.prix,
        description: description,
        });
        newAppareil.save((err, success) => {
            if(err){
                console.log(err) 
            }else if(success){
                console.log('appareil est bien enregistreé dans la base de donnée !')
                res.redirect('/');
            };
        });
}

// controller get appareil by Id
const getappreilByID = (req, res) => {
    Appareils.findById(req.params.id).then(appareil => {
            res.render('appareil', {appareil: appareil});
        }, err => res.status(500).send(err));
}

// controller delete appareil one 
const getDelete = (req, res) => {
    const { id } = req.params
    Appareils.findByIdAndDelete(id, (err) => {
        if(err) console.log(err)
        res.redirect('/');
        });
    }

// importation de mes controllers
module.exports = {
    getIndex: getIndex,
    getForm: getForm,
    postForm: postForm,
    getappreilByID: getappreilByID,
    getDelete: getDelete
}
