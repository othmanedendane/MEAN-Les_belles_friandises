const mongoose = require('mongoose');
const friandisesSchema = new mongoose.Schema({
    marque: String,
    prix: String,
    cie: String,
    categorie: String
});

module.exports = mongoose.model('friandise', friandisesSchema);  //nom de la table: friandises
