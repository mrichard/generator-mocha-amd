'use strict';

var generator  = require('yeoman-generator');
var util       = require('util');
var path       = require('path');
var validDir = require('../../../helpers/validateDirectory');


module.exports = Generator;

function Generator() {
  generator.NamedBase.apply(this, arguments);
   this.sourceRoot(path.join(__dirname, '../../', 'templates'));  
}

util.inherits(Generator, generator.NamedBase);

Generator.prototype.createModelTestFiles = function createModelTestFiles() {
  var ext = 'js';
  //this.baseDir = validDir.getValidatedFolder( 'app/' ) ? '../app/' : '../';
  
  this.template('model.' + ext, path.join('test/spec/models', this.name + '.' + ext));
};
