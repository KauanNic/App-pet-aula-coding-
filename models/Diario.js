const mongoose = require('mongoose');

const DiarioSchema = new mongoose.Schema({
    título: {
        type: String,
    },
    descricao: {
        type: String,
    },
});

module.exports = mongoose.model('Diario', DiarioSchema);