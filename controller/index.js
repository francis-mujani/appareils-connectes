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
    const newAppareil = new Appareils({
        //const (name, allumer, eteint, color, puissance, description ) = req.body;
        name: req.body.name,
        status: req.body.status,
        //statusEteint: req.body.Eteint,
        types: [{
                type: req.body.type
        }],
        color: req.body.color,
        puissance: req.body.puissance,
        prix: req.body.prix,
        description: req.body.description,
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

/*
const getDelete = (req, res) => {
    const { id } = req.params
    Appareils.findByIdAndDelete(id).then(() => {
        res.redirect('index');
    })
}
*/
// importation de mes controllers
module.exports = {
    getIndex: getIndex,
    getForm: getForm,
    postForm: postForm,
    getappreilByID: getappreilByID,
    getDelete: getDelete
}