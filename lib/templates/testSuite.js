define(function() {
	'use strict';

	/* return an array of specs to be run */
	return {
		specs: [<% _.each(fileList, function( file, index, list ){%>'<%=file%>'<%if( index !== (list.length - 1) ){%>,<%}%>
		<%});%>]
	};
});
