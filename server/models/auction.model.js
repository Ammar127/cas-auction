// get dependencies
const mongoose = require('mongoose'); // call mongoose

// auction schema
var auctionSchema = new mongoose.Schema({
    auctionName: {
        type: String,
        required: 'Auction name can\'t be empty',
        unique: true
    },
    organizer: {
        type: String,
        required: 'Organizer can\'t be empty',
    },
    maxItems: {
        type: Number,
        required: 'Need at least one item'
    },
    address: {
        type: String,
        required: 'Address can\'t be empty' 
    },
    dateTime: {
        type: Date,
        required: 'Date and Time can\'t be empty'
    },
    fee: {
        type: Number
    },
    participantID: [{
        type: String,
        unique: true
    }],
});

// create Auction model schema
module.exports = mongoose.model('Auction', auctionSchema);