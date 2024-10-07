window.addEventListener( 'load', init );

function init( ) {
   window.addEventListener( 'resize', resize_header );
   resize_header();

   nav = document.getElementById( 'nav' );
   nav.addEventListener( 'click', click_nav );
}

function resize_header( ) {
   header = document.getElementById( 'header_main' );
   logo = document.getElementById( 'logo' );
   nav = document.getElementById( 'nav' );

   header.classList.remove( 'compact' );
   logo_width = 144;

   if( ( nav.offsetWidth + logo_width ) > header.offsetWidth ) {
      header.classList.add( 'compact' );
   }
}

function click_nav( event ) {
   this.classList.toggle( 'open' );
}
