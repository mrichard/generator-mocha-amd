'use strict';
 var fs         = require('fs'),
     generator  = require('yeoman-generator'),
     util       = require('util'),
     path       = require('path'),
     _          = require('underscore');

module.exports = Generator;

function Generator() {
    var self = this;

        self.testDir = 'test/spec';

        self.fileList;

  	generator.NamedBase.apply(this, arguments);

    self.sourceRoot(path.join(__dirname, '../../', 'templates'));

   	self.argument('specType', { type: String, required: false });

    self.argument('testDirectory', { type: String, required: false });

    self.populateFilesList = function (dirname) {
        var files = fs.readdirSync(dirname);
        files.forEach(function (file, i, a) {
            var stats = fs.statSync(path.join(dirname, file)),
                dirnameToUse;
            if (stats.isDirectory()) {
                self.populateFilesList(path.join(dirname, file));
            }
            else if (stats.isFile()) {
                dirnameToUse = dirname.split(/test[\/,\\]+/gm)[1];
                self.fileList.push(dirnameToUse.replace(/\\/gm, '/') + '/' + (file).replace(/\\/gm, '/'));
            }
        });
    };
}

util.inherits(Generator, generator.NamedBase);

Generator.prototype.createModelTestFiles = function createModelTestFiles() {
  var ext = '.js';  
  this.template('specs/unitTest' + ext, path.join('test/spec', this.testDirectory, this.name + ext));
};

Generator.prototype.rebuildTestSuiteList = function rebuildTestSuiteList () {

    // Make function async
	var callback = this.async();

    // Reset file list
    this.fileList = [];

    // Populate file list
    this.populateFilesList(this.testDir);

    // Rewrite the testSuite file
    this.template('testSuite.js', 'test/spec/testSuite.js');

    // Do async callback
    callback();
};
