$(document).ready(function(){
	
	/*-------ABOUT ME-------*/
	
	$(".left").click(function(){
		$("#about_me").fadeTo(500,1);
	});
	$(".am_close").click(function(){
		$("#about_me").fadeTo(200,0);
  		$("#about_me").hide('slow');
	});
	
	/*-------GALLERY/VIDEO-------*/
	
	$(".hed_link").click(function(){
		$(".video").hide();
		$(".gallery").hide();
		$(".projects").hide();
		$(".hed").fadeTo(1000,1);
	});
	$(".sp_link").click(function(){
		$(".video").hide();
		$(".gallery").hide();
		$(".projects").hide();
		$(".sp").fadeTo(1000,1);
	});
	$(".rio_link").click(function(){
		$(".video").hide();
		$(".projects").hide();
		$(".gallery").fadeTo(1000,1);
	});
	
	/*-------TILES-------*/
	
	
	$(".proj").click(function(){
		$(".video").hide();
		$(".gallery").hide();
		$(".projects").fadeTo(1000,1);
	});
	$(".pr_close").click(function(){
  		$(".projects").hide();
	});
	$(".rio_close").click(function(){
  		$(".gallery").hide();
	});
	$(".sp_close, .hed_close").click(function(){
  		$(".video").hide();
	});
	
	var cont = 0;
	var a = $('.tile_cont').children('.tile').size();
	var b = a-4;

	$('.btn_left').click(function(){
		cont -= 1;
		$('.btn_right').show();
		if(cont == 0){
			$('.btn_left').hide();
		}
		$('.tile_cont').animate({
  			'left': '+=200px'
		},500);
	});

	$('.btn_right').click(function(){
		cont += 1;
		$('.btn_left').show();
		if(cont == b){
			$('.btn_right').hide();
		}
 		$('.tile_cont').animate({
  			'left': '-=200px'
		},500);
	});
	
	$('.tile').hover(function(){
		$(this).children('.overlay').show();
	},function(){
		$('.overlay').hide();
	});
});