(function() {
	'use strict';

	var root = this;

	root.define([
		'<%=testDirectory%>/<%=name%>'
		],
		function( <%= _.classify(name) %> ) {

			describe('<%= _.classify(name) %> <%= _.classify(specType) %>', function () {

				it('should be an instance of <%= _.classify(name) %> <%= _.classify(specType) %>', function () {
					var <%=name%> = new <%= _.classify(name) %>();
					expect( <%=name%> ).to.be.an.instanceof( <%= _.classify(name) %> );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );