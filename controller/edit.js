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
    const { name, status, color, type, puissance, description } = req.body;
    const { id } = req.params;
    Appareils.findByIdAndUpdate(id, {
        name: name,
        status: status,
        types: [{
                type: type
        }],
        color: color,
        puissance: puissance,
        prix: prix,
        description: description,
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
