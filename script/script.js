
$(document).ready(function(e){
	
});
$(".nav_link").click(function(e){

e.preventDefault();
	var divid="#"+$(this).attr('id')+"Div";
	$("html body").animate({
		scrollTop: $(divid).offset().top-55
					},300);
})
/*e.preventDefault();
	var divid="#"+$(this).attr('id')+"Div";
	$("html body").animate({
		scrollTop: $(divid).offset().top-55
					},1000);*/