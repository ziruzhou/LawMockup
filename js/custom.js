function showhide(id)
{
	var trigger = $('#'+id).css('display');
	
	
	if(trigger == 'block') //shown
	{
		$('#'+id+"-trigger").empty();
		$('#'+id+"-trigger").append("Show More");
		$('#'+id).css('display', 'none');
	}
	else if(trigger == 'none') //already hidden
	{
		$('#'+id+"-trigger").empty();
		$('#'+id+"-trigger").append("Show Less");
		$('#'+id).css('display', '');
	}
}

$(document).ready(function()
{
	//hide all unexpanded content
	$('.more-content').css('display', 'none');
});

