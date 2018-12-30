const mongoose = require('mongoose');

const addressSchema = mongoose.Schema({
    Name:String,
    AddressLine1:String,
    AddressLine2:String,
    email:String,
    phoneNumber:String
});
module.exports = mongoose.model('Address',addressSchema);

