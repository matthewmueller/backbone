/**
 * Module dependencies
 */

var $ = require('jquery'),
    Backbone = require('./backbone.js');

/**
 * Configure Backbone object
 */

Backbone.setDomLibrary($);

/**
 * Export Backbone
 */

module.exports = Backbone;