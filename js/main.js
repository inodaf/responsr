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


var Responsr = Responsr || {};

;(function (field, display) {

  'use strict';

  var urlField = document.getElementById(field)
    , displayContent = document.getElementById(display)
    , urlFieldValue = null
    , hasLocalhost = null
    , hasHttp = null
  ;

  Responsr.initialize = () => {
    Responsr.addEventListeners();
  };

  Responsr.fillDisplay = () => {
    urlFieldValue = urlField.value;

    hasLocalhost = urlFieldValue.includes('localhost');
    hasHttp = urlFieldValue.includes('http://');

    if (hasLocalhost || !hasHttp) displayContent.src = `http://${urlFieldValue}`;
  };

  Responsr.clearDisplay = () => {
    if (urlFieldValue.length === 0) displayContent.src = '';
  };

  Responsr.addEventListeners = () => {
    urlField.addEventListener('change', () => {
      Responsr.fillDisplay();
      Responsr.clearDisplay();
    }, false);
  };


  return {
    initialize: Responsr.initialize()
  };

})('urlField', 'displayContent');


var app = Responsr.initialize;
