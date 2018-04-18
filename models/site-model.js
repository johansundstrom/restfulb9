'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SiteSchema   = new Schema({
	name: { 
		type: String, 
		required: true 
	},
	lon: {
		type: Number
	},
	lat: {
		type: Number
	}
});

module.exports = mongoose.model('Sites', SiteSchema);