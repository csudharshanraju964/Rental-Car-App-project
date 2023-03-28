const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    carName: { type: mongoose.Schema.Types.ObjectID, ref: 'cars' },
    carNumber: { type: mongoose.Schema.Types.ObjectID, ref: 'users' },
    startDate:{type:String,requied:true},
    endDate:{type:String,required:true},
    totalHours: { type: Number },
    totalAmount: { type: Number },
    transactionId: { type: String },

},{timestamps:true})

const bookingModel = mongoose.model('bookings' , bookingSchema)

module.exports = bookingModel