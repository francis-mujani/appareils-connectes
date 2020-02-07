const Appareils = require('../model/Appareils');

const getEdit = (req, res) => {
    const { id } = req.params;
    Appareils.findById(id, (err, appareil) => {
        if(err){
            console.log(`Id appareil introuvable : ${err}`)
        }
        else if(appareil){
            res.render('edit', {appareil: appareil});
        }
})
}

const putEdit = (req, res) => {
    const { id } = req.params;
    Appareils.findByIdAndUpdate(id, {
        name: req.body.name,
        status: req.body.status,
        types: [{
                type: req.body.type
        }],
        color: req.body.color,
        puissance: req.body.puissance,
        prix: req.body.prix,
        description: req.body.description,
        },
        (err) => {
            if(err) console.log(err);
            res.redirect('/');
        });
}

const aboutMe = (req, res) => {
    res.render('about')
}

module.exports = {
    getEdit: getEdit,
    putEdit: putEdit,
    aboutMe: aboutMe
}