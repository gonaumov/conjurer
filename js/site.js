var number_count = 0;
var mantra = '';
function runEffect(evt){
	var options = {};
	options = { to: "#_target_", className: 'ui-effects-transfer' };
	var selectedEffect = 'transfer';
	$("#effect").effect(selectedEffect,options,400,callback);
	if (evt.stopPropagation) {
		// this code is for Mozilla and Opera
		evt.stopPropagation();
	}
	else if (window.event) {
		// this code is for IE
		window.event.cancelBubble = true;
	}
	return false;
};

function callback(){
		var _count = parseInt($("#button").text());
		_count++;
		$("#button").text(_count);
		if(_count == number_count)
		{
			alert("Готово");
			$(window.document.body).html('<p>Готово</p>');
		}
};
$(function() {
	$("#button_start").click(function(event) {
			runEffect(event);
			return false;
	});
});
$(document).ready(function() {
	mantra = /mantra=([^&]+)/.test(window.location.href) ? unescape(RegExp.$1) : '';
	number_count = /count=([^&]+)/.test(window.location.href) ? parseInt(RegExp.$1) : 0;
	$("#_target_").text(mantra);
});
