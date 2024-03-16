const mongoose = require('mongoose')


async function main() {
    await mongoose.connect('mongodb+srv://danielvictor:eazAlMw5OLWAyETy@cluster0.agrhawr.mongodb.net/?retryWrites=true&w=majority')
}

module.exports = main