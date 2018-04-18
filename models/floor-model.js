'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var FloorSchema   = new Schema({
	floorName: { 
        type: String, 
        required: true
    },
    floorNumber: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Floors', SiteSchema);
