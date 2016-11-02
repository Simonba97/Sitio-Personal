$(document).ready(function(){

    $('header').on('click', 'li', function(ev) {
    	$('li').removeClass('activo');
    	var $this = $(this);
    	$this.toggleClass('activo');
    	
    });
});
