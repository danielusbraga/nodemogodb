const mongoose = require('mongoose')


async function main() {
    await mongoose.connect(`mongodb+srv://${process.env.DB_MONGO_USER}:${process.env.DB_MONGO_PwD}@cluster0.agrhawr.mongodb.net/?retryWrites=true&w=majority`)
}
 
module.exports = main