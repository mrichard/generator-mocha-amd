'use strict';

var generator  = require('yeoman-generator');
var util       = require('util');
var path       = require('path');
var validDir = require('../../../helpers/validateDirectory');


module.exports = Generator;

function Generator() {
  generator.NamedBase.apply(this, arguments);
  	this.sourceRoot(path.join(__dirname, '../../', 'templates/specs'));  

   	this.argument('specType', { type: String, required: false });
   	this.argument('testDirectory', { type: String, required: false });
}

util.inherits(Generator, generator.NamedBase);

Generator.prototype.createModelTestFiles = function createModelTestFiles() {
  var ext = '.js';  
  this.template('unitTest' + ext, path.join('test/spec/', this.testDirectory, this.name + ext));
};
