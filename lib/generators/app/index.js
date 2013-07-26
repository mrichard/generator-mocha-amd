'use strict';

var path = require('path');
var util = require('util');
var yeoman = require('yeoman-generator');
var validDir = require('../../../helpers/validateDirectory');

var MochaGenerator = module.exports = function MochaGenerator(args, options) {
  yeoman.generators.Base.apply(this, arguments);
  this.sourceRoot(path.join(__dirname, '../../', 'templates'));

  this.skipInstall = options['skip-install'];

  this.on('end', function () {
    /*process.chdir('test');
    this.installDependencies({
      npm: false,
      skipInstall: this.skipInstall
    });*/
  });
};

util.inherits(MochaGenerator, yeoman.generators.Base);

MochaGenerator.prototype.askFor = function askFor() {
  var cb = this.async();
  cb();
};

MochaGenerator.prototype.setupEnv = function setupEnv() {

  this.baseDir = validDir.getValidatedFolder( 'app/' ) ? '../app/scripts' : '../scripts';


  //this.template('server/app.js', 'server/app.js');
  this.template('index.html', 'test/index.html');
  this.template('SpecRunner.js', 'test/SpecRunner.js');

  this.copy('testSuite.js', 'test/spec/testSuite.js');
  this.copy('exampleTest.js', 'test/spec/exampleTest.js');
};
