'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RoomSchema   = new Schema({
	Name: { 
        type: String, 
        required: true
    },
    Number: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Rooms', SiteSchema);