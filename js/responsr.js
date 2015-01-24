/*
 * Project: Responsr.
 * Description: A simple tool for responsive layouts.
 * Last Update: 2015/01/22
 *
 * Author: Isac Fadoni
 * GitHub: https://github.com/isacfadoni/responsr
 * Copyright: You can use or edit this code under the MIT license.
 *
 * Library: jQuery
 */

$(function responsrMain() {
	device = $('#devices li');
	display = $('#display');
	landscape = $('#landscape');
	url = $('#url');

	customWidth = $("#customwidth").val();
	customHeight = $("#customheight").val();

	  
	url.on('change', function() {
		display.attr('src', url.val());

		if(url.val().contains('localhost') || url.val().contains('http://') === false ) {
			display.attr('src', 'http://' + url.val());
		}

		if(url.val().length === 0) {
			display.attr('src', '');
		}

	});

	device.on('click', function() {
		display.css({'width': $(this).attr("data-device-width") + 'px', 'height': $(this).attr("data-device-height") + 'px'});
	});

	landscape.on('click', function() {
		display.css({'width': display.height(), 'height': display.width()})
	});

});