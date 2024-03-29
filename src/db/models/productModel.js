const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    slug: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    description: {
        type: String,
        required: true
    },
    status: {
        type: String,
        default: 'In stock',
        lowercase: true,
        enum: [
            'sold' ,
            'available',
            'out of stock'
        ]
    }
}, { timestamps: true })


module.exports = mongoose.model('Products', productSchema);