$( document ).ready( function() {
   var div = $( '<div>' );
   div.html( 'asdf' );
   div.css( {
      position : 'fixed',
      bottom : '0',
      width : '100%'
   } )
   $( 'body' ).append( div );
} );