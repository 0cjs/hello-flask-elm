'use strict';

var Elm = require('./src/Main.elm');
var mountNode = document.getElementById('main');
var app = Elm.Main.embed(mountNode);
