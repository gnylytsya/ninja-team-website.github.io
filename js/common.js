$(document).ready(function() {

/**
Кнопка вгору на jQuery. 
*/

	var
	speed = 500,
	$scrollTop = $('<div class="scrollTop"><a href="#top"><i class="fa fa-arrow-up" aria-hidden="true"></i></a></div>').appendTo('body');              

	$scrollTop.click(function(e){
		e.preventDefault();

		$( 'html:not(:animated),body:not(:animated)' ).animate({ scrollTop: 0}, speed );
	});

	//появлення
	function show_scrollTop(){
		( $(window).scrollTop() > 700 ) ? $scrollTop.stop().fadeIn(600) : $scrollTop.stop().fadeOut(600);
	}
	$(window).scroll( function(){ show_scrollTop(); } );
	show_scrollTop();	
      
});	

