$( document )
      .ready(
            function() {
               var soLetra = function() {
                  var gabarito = $( '#gabarito' );
                  gabarito.val( gabarito.val().replace( /[^a-z]*/gi, '' ) );
                  divCount.html( gabarito.val().length );
               };
               var body = $( 'body' );
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
               textarea.keyup( soLetra );
               divTextArea.append( textarea );
               var divCount = $( '<div>0</div>' );
               divCount.css( {
                  textAlign : 'center'
               } );
               var divButton = $( '<div />' );
               var button = $( '<button>OK</button>' );
               button.css( {
                  display : 'block',
                  width : '100%'
               } );
               button
                     .click( function() {
                        $( '#gabarito' )
                              .val()
                              .split( '' )
                              .forEach(
                                    function( e, i ) {
                                       var letter = document
                                             .getElementById( 'form:subjects:'
                                                   + i + ':letters' );
                                       if ( letter != null ) {
                                          letter.value = e;
                                       } else {
                                          body
                                                .append( $( '<div><input type="text" id="form:subjects:'
                                                      + i
                                                      + ':letters" value="'
                                                      + e + '"/></div>' ) );
                                       }
                                    } );
                     } );
               divButton.append( button );
               divBox.append( divLabel );
               divBox.append( divTextArea );
               divBox.append( divCount );
               divBox.append( divButton );
               body.append( divBox );
            } );