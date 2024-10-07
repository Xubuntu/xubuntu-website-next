window.addEventListener( 'load', resize_header );
window.addEventListener( 'resize', resize_header );

function resize_header( ) {
   header = document.getElementById( 'header_main' );
   logo = document.getElementById( 'logo' );
   nav = document.getElementById( 'nav' );

   header.classList.remove( 'compact' );

   if( ( nav.offsetWidth + logo.offsetWidth ) > header.offsetWidth ) {
      header.classList.add( 'compact' );
   }
}
