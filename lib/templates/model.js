(function() {
	'use strict';

	var root = this;

	root.define([
		'scripts/models/<%=name%>'
		],
		function( <%= _.classify(name) %> ) {

			describe('<%= _.classify(name) %> Model', function () {

				it('should be an instance of <%= _.classify(name) %>', function () {
					var <%=name%> = new <%= _.classify(name) %>();
					expect( <%=name%> instanceof <%= _.classify(name) %> ).to.equal(true);
				});

				it('should have more test written', function(){
					expect( true ).to.equal( false );
				});
			});

		});

}).call( this );