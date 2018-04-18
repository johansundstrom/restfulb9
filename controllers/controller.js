'use strict';

var mongoose = require('mongoose'),
    Site = mongoose.model('Sites');

exports.default = function(req, res) {
    res.send('<html><body><p>use /api/<a href="http://localhost:3000/api/">site/</a></p></body></html>');
}

exports.list_sites = function(req, res) {
    Site.find({}, function(err, site) {
        if (err)
            res.send(err);
        res.json(site);
    });
};


exports.create_site = function(req, res) {
    var new_site = new Site(req.body);
    new_site.save(function(err, site) {
        //console.log(req.body);  //debug
        if (err)
            res.send(err);
        res.json(site);
    });
};


exports.read_account = function(req, res) {
    Account.findById(req.params.accountId, function(err, account) {
        if (err)
            res.send(err);
        res.json(account);
    });
};


exports.update_account = function(req, res) {
    Account.findOneAndUpdate({ _id: req.params.accountId }, req.body, { new: true }, function(err, account) {
        if (err)
            res.send(err);
        res.json(account);
    });
};


exports.delete_account = function(req, res) {
    Account.remove({
        _id: req.params.accountId
    }, function(err, account) {
        if (err)
            res.send(err);
        res.json({ message: 'raderat' });
    });
};
