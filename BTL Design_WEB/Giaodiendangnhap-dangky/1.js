$(function(){
 $('.signup-form').animate({opacity:0,marginLeft:-400});
 $('.nut1').click(function(event) {
 	$('.signup-form').animate({opacity:1,marginLeft:0})
 	$('.login-form').animate({opacity:0,marginLeft:-400})
 });
 $('.nut2').click(function(event) {
 	$('.signup-form').animate({opacity:0,marginLeft:-400})
 	$('.login-form').animate({opacity:1,marginLeft:0})
 });
})  