'use strict';

var Elm = require('./elm-app/src/Main.elm');
var mountNode = document.getElementById('main');
var app = Elm.Main.embed(mountNode);
