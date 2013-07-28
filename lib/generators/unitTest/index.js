'use strict';

var generator  = require('yeoman-generator');
var util       = require('util');
var path       = require('path');
var validDir = require('../../../helpers/validateDirectory');
var findit = require('findit');
var _ = require('underscore');


module.exports = Generator;

function Generator() {
  	generator.NamedBase.apply(this, arguments);
  	this.sourceRoot(path.join(__dirname, '../../', 'templates'));  

   	this.argument('specType', { type: String, required: false });
   	this.argument('testDirectory', { type: String, required: false });
}

util.inherits(Generator, generator.NamedBase);

Generator.prototype.createModelTestFiles = function createModelTestFiles() {
  var ext = '.js';  
  this.template('specs/unitTest' + ext, path.join('test/spec/', this.testDirectory, this.name + ext));
};

Generator.prototype.rebuildTestSuiteList = function() {
	var cb = this.async();

	this.fileList = [];

	// find all in spec dir
   	var finder = findit.find('test/spec');

   	// on file save to fileList array
   	finder.on( 'file', _.bind( function( file, stat ){
   		this.fileList.push( file );
   	}, this) );

   	// when done save to testSuite.js
   	finder.on( 'end', _.bind( function(){

   		// get file list without /test/ dir prefix
   		this.fileList = _.map( this.fileList, _.bind( function( file ){
   			return /test\/(.*)/.exec( file )[1];
   		}, this) );

   		// remove testSuite.js from list
   		this.fileList = _.without( this.fileList, 'spec/testSuite.js');

   		// rewrite the testSuite file
   		this.template('testSuite.js', 'test/spec/testSuite.js');

   		cb();
   	}, this) );
};
