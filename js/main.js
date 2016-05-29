/*
 * Project: Responsr.
 * Description: A simple tool for testing responsive layouts.
 * Last Update: 2016/04/28
 *
 * Author: Isac Fadoni
 * GitHub: https://github.com/isacfadoni/responsr.app
 * Copyright: You can use or edit this code under the MIT license.
 *
 */

;(function () {

  'use strict';


  // # TODO: Vanillafy the app
  var display = document.getElementById('display')
    , landscape = document.getElementById('landscape')
    , url = document.getElementById('url')
  ;

})();

$(function responsrMain() {
	device = $('.button ul li ul li');
	display = $('#display');
	landscape = $('#landscape');
	url = $('#url');

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
