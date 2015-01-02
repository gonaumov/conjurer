$(document).ready(function() {
	$("#count").keypress(function (e)  
	{ 
	  if( e.which!=8 && e.which!=0 && (e.which<48 || e.which>57))
	  {
		$("#errmsg").html("<b style='color: red;'>Броя повторения може да бъде само цифра!</b>").show().fadeOut("slow"); 
	    return false;
	  }
	});
	$("#conjure").click(function ()  
	{
		if(!$('#mantra').attr('value').length || !$('#count').attr('value').length)
		{
			$("#errmsg").html("<b style='color: red;'>Трябва да попълниш полетата!</b>").show().fadeOut("slow"); 
	    return false;	
		}
		var _request =  "mantra.html?mantra="+escape($('#mantra').attr('value'))+"&count="+$('#count').attr('value');
		window.location.href = _request;
	});

});
