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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var dataset = [100, 200, 300, 400, 500];
var scatter_dataset = [[5, 20], [480, 90], [250, 50], [100, 33], [330, 95], [410, 12], [475, 44], [25, 67], [85, 21], [220, 88]];

var width = 1280;
var height = 720;
var padding = 20;

var scale = d3.scaleLinear();
var scatter_xscale = d3.scaleLinear();
var scatter_yscale = d3.scaleLinear();
var scatter_rscale = d3.scaleLinear();

scale.domain([d3.min(dataset), d3.max(dataset)]).range([0, width]);

scatter_xscale.domain([d3.min(scatter_dataset, function (d) {
    return d[0];
}), d3.max(scatter_dataset, function (d) {
    return d[0];
})]).range([padding, width - padding * 2]);
scatter_yscale.domain([d3.min(scatter_dataset, function (d) {
    return d[1];
}), d3.max(scatter_dataset, function (d) {
    return d[1];
})]).range([height - padding, padding]);
scatter_rscale.domain([d3.min(scatter_dataset, function (d) {
    return d[0];
}), d3.max(scatter_dataset, function (d) {
    return d[0];
})]).range([0, 50]);

var svg = d3.select("body").append("svg").attr("width", width).attr("height", height);

svg.selectAll("circle").data(scatter_dataset).enter().append("circle").attr("cx", function (d) {
    return scatter_xscale(d[0]);
}).attr("cy", function (d) {
    return scatter_yscale(d[1]);
}).attr("r", function (d) {
    return scatter_rscale(d[0]);
}).attr("fill", "blue");
svg.selectAll("text").data(scatter_dataset).enter().append("text").text(function (d) {
    return d[0] + ", " + d[1];
}).attr("x", function (d) {
    return scatter_xscale(d[0]);
}).attr("y", function (d) {
    return scatter_yscale(d[1]);
}).attr("fill", "red");

/***/ })

/******/ });