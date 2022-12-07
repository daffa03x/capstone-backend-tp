const { default: mongoose } = require('mongoose')
const moogose = require('mongoose')
let voucherSchema = moogose.Schema({
    name: {
        type: String,
        require: [true,'Nama game harus diisi']
    },

    status: {
        type: String,
        enum: ['Y','N'],
        default: 'Y'
    },

    thumbnail: {
        type: String
    },

    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    },

    nominals: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Nominal'
    }],

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
})

module.exports = moogose.model('Voucher', voucherSchema)