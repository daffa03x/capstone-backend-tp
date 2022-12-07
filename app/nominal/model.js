const moogose = require('mongoose')
let nominalSchema = moogose.Schema({
    coinQuantity: {
        type: Number,
        default: 0,
    },
    coinName: {
        type: String,
        require: [true, 'Nama Coin Harus Diisi']
    },
    price: {
        type: Number,
        default: 0
    }
})

module.exports = moogose.model('Nominal', nominalSchema)