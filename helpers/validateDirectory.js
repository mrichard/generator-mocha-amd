var fs = require('fs');


module.exports = {
	getValidatedFolder: function( path ){
		try { 
			var fsStat = fs.statSync( path );
			if ( fsStat.isDirectory() ) {
				return true;
			}
			else {
				return false;
			}
		} catch (e) { 
			return false; 
		}
	}
};