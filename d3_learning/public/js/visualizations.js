/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var width = 1200;
var height = 200;
var barPadding = 1;

var dataset = [];

for (var i = 0; i < 20; i++) {
    dataset.push(Math.floor(Math.random() * 90));
}

var svg = d3.select("body").append("svg");
svg.attr("width", width).attr("height", height);

var circles = svg.selectAll("circle").data(dataset).enter().append("circle");

circles.attr("cx", function (d, i) {
    return i * 80 + 25;
}).attr("cy", height / 2).attr("r", function (d) {
    return d;
});

circles.attr("fill", "yellow").attr("stroke", "orange").attr("stroke-width", function (d) {
    return d / 2;
});

svg = d3.select("body").append("svg").attr("width", width).attr("height", height);

svg.selectAll("rect").data(dataset).enter().append("rect").attr("x", function (d, i) {
    return i * (width / dataset.length);
}).attr("y", function (d) {
    return height - d;
}).attr("width", width / dataset.length - barPadding).attr("height", function (d) {
    return d;
}).attr("fill", function (d) {
    return "rgb(0, 0, " + d * 10 + ")";
});

svg.selectAll("text").data(dataset).enter().append("text").text(function (d) {
    return d;
}).attr("x", function (d, i) {
    return i * (width / dataset.length) + (width / dataset.length - barPadding) / 2;
}).attr("y", function (d, i) {
    return height - d + 14;
}).attr('font-family', 'sans-serif').attr('font-size', '11px').attr('fill', 'white').attr("text-anchor", "middle");

// d3.csv("static/food.csv", function(data) {
//     console.log(data);
//     d3.select("p").data(data).enter().append("p").text(function(elem) {
//             return "[ " + elem.Food + ": " + elem.Deliciousness + " ]";
//     });
// });

/***/ })
/******/ ]);