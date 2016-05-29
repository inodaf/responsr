/*
 * Project: Responsr.
 * Description: A simple tool for testing responsive layouts.
 * Last Update: 2016/04/29
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
    Responsr.loadDeviceList();
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

  Responsr.getDevices = (callback) => {
    var dbReq = new XMLHttpRequest()
      , pathName = window.location.pathname
      , pathIndex = pathName.lastIndexOf('/')
      , rootPath = pathName.slice(0, pathIndex)
      , deviceList = null
    ;

    dbReq.open('GET', `${rootPath}devices_db/devices.json`);

    dbReq.addEventListener('load', () => {
      deviceList = JSON.parse(dbReq.responseText);
      callback(deviceList);
    }, false);

    dbReq.send();
  };

  Responsr.renderDeviceList = (json) => {
    console.log(json);
  };

  Responsr.loadDeviceList = () => {
    Responsr.getDevices(Responsr.renderDeviceList);
  };

  return {
    initialize: Responsr.initialize()
  };

})('urlField', 'displayContent');


var app = Responsr.initialize;
