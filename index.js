$( document )
      .ready(
            function() {
               var divBox = $( '<div />' );
               divBox.css( {
                  position : 'fixed',
                  bottom : '0',
                  right : '0',
                  border : '1px solid #73AD21',
                  display : 'block',
                  backgroundColor : '#ECFFF1',
                  zIndex : 9999
               } );
               var divLabel = $( '<div />' );
               divLabel.css( {
                  textAlign : 'center'
               } );
               divLabel.append( $( '<h2>Gabarito</h2>' ) );
               var divTextArea = $( '<div />' );
               var textarea = $( '<textarea id="gabarito" placeholder="Coloque o gabarito aqui." rows="30" cols="15" />' );
               textarea.css( {
                  border : '1px solid #C6C6FF',
                  backgroundColor : '#F4F4FF'
               } );
               divTextArea.append( textarea );
               var divButton = $( '<div />' );
               var button = $( '<button>OK</button>' );
               button.css( {
                  display : 'block',
                  width : '100%'
               } );
               button.click( function() {
                  var gabarito = $( '#gabarito' ).val().replace( /\W/g, '' )
                        .split( '' );
                  gabarito
                        .forEach( function( e, i ) {
                           document.getElementById( 'form:subjects:' + i
                                 + ':letters' ).value = e
                        } );
               } );
               divButton.append( button );
               divBox.append( divLabel );
               divBox.append( divTextArea );
               divBox.append( divButton );
               $( 'body' ).append( divBox );
            } );