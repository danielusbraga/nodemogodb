const mongoose = require('mongoose')

const schema = mongoose.Schema({
    nome: String,
    preco: Number,
    tamanho: String,
    tipo:  String,
})


const Produto = mongoose.model('$TM_FILENAME_BASE', schema)

module.exports = $TM_FILENAME_BASE