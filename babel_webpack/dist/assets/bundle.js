"use strict";

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// run - node_modules/.bin/babel src/index.js -o dist/assets/bundle.js
var greet = function greet(name) {
  console.log("Hello ".concat(name));
};

greet('agnes');
greet('james');
greet('Elvis');

var User = /*#__PURE__*/_createClass(function User(score) {
  _classCallCheck(this, User);

  this.score = 0;
});
