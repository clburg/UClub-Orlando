$(document) .ready(function(){

	$("#navbutton") .on("click", function() {
		$("#dropdown-menu") .show();
		$(".up-menu") .show();
		$(this) .hide();
		$("#upbutton") .show();
		$("#jf-logo") .animate({marginTop: -150});
	});
	
	$("#upbutton") .click(function(){
		$("#dropdown-menu") .hide();
		$(this) .hide();
		$("#navbutton") .show();
		$("#jf-logo") .animate({marginTop: -50});
	});
	
});