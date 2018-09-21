/*************** overheight ****************/	

function content_overheight(elem){
	
	if($('#over-content').html() == ''){
		var content_id_array = $(elem).attr('content').split(' ');
		var content = '';
		var css = $(elem).attr('css');
		content_id_array.forEach(function(item, i, arr) {
			content += $('#'+item).html();
		});
		$('#over-content').html(content);
	}
	
	
		$('#over-container')
			.addClass(css)
			.attr('css', css).css('display', 'block').fadeIn(150); 	
		$('html').css('height', '100%');
		$('body').css('height', '100%');
	
}	
function content_overheight_close(){
	

	$('#over-container').fadeOut(150, function(){
		//$('.fullpage').fadeIn(150);	
		$('#over-content').html("")
		});
	$('#over-container').removeClass($('#over-container').attr('css'));
	$('html').css('height', 'auto');
	$('body').css('height', 'auto');
	

}

