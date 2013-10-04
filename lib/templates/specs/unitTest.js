define([
		'<%=testDirectory%>/<%=name%>'
		],
		function( <%= _.capitalize(name) %> ) {

			describe('<%= _.capitalize(name) %> <%= _.capitalize(specType) %>', function () {

				it('should be an instance of <%= _.capitalize(name) %> <%= _.capitalize(specType) %>', function () {
					var <%=name%> = new <%= _.capitalize(name) %>();
					expect( <%=name%> ).to.be.an.instanceof( <%= _.capitalize(name) %> );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});
