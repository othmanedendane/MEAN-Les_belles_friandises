const mongoose = require('mongoose');
const chocolatsSchema = new mongoose.Schema({ 
    Marque: String,
    prix: String,
    compagnie: String
});

module.exports = mongoose.model('chococo', chocolatsSchema);   //nom de la table: chococos