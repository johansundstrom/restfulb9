'use strict';

module.exports = function(app) {
    var site = require('../controllers/controller'); //modulimport

    // B9 Routes
    app.route('/')
        .get(site.default); //funkar


    app.route('/api/sites')
        .get(site.list_sites) //funkar
        .post(site.create_sites); //funkar


    app.route('/api/sites/:siteId')
        .get(site.read_site) //funkar
        .put(site.update_site) //funkar
        .delete(site.delete_site); //funkar

    app.route('/api/sites/floor')
        .get(site.list_floors) //funkar
        .post(site.create_floors); //funkar


    app.route('/api/sites/floor/:floorId')
        .get(site.read_floor) //funkar
        .put(site.update_floor) //funkar
        .delete(site.delete_floor); //funkar
};
