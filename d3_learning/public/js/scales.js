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


//let dataset = [100, 200, 300, 400, 500];
var dataset = [];
//let scatter_dataset = [[5, 20], [480, 90], [250, 50], [100, 33], [330, 95], [410, 12], [475, 44], [25, 67], [85, 21], [220, 88]];
var scatter_dataset = [];

for (var i = 0; i < 100; i++) {
    var numA = Math.floor(Math.random() * 100);
    var numB = Math.floor(Math.random() * 100);

    scatter_dataset.push([numA, numB]);
}

for (var _i = 0; _i < 20; _i++) {
    var _numA = Math.floor(Math.random() * 100);
    dataset.push(_numA);
}

var width = 1280;
var height = 720;
var padding = 20;

var scale = d3.scaleLinear();
var scatter_xscale = d3.scaleLinear();
var scatter_yscale = d3.scaleLinear();
var scatter_rscale = d3.scaleLinear();

var bar_xscale = d3.scaleLinear();
var bar_yscale = d3.scaleLinear();
var bar_rscale = d3.scaleLinear();
var bar_gscale = d3.scaleLinear();
var bar_bscale = d3.scaleLinear();

scale.domain([d3.min(dataset), d3.max(dataset)]).range([0, width]);

scatter_xscale.domain([d3.min(scatter_dataset, function (d) {
    return d[0];
}), d3.max(scatter_dataset, function (d) {
    return d[0];
})]).range([padding * 3, width - padding * 3]);
scatter_yscale.domain([d3.min(scatter_dataset, function (d) {
    return d[1];
}), d3.max(scatter_dataset, function (d) {
    return d[1];
})]).range([height - padding * 3, padding * 3]);
scatter_rscale.domain([d3.min(scatter_dataset, function (d) {
    return d[0];
}), d3.max(scatter_dataset, function (d) {
    return d[0];
})]).range([2, 20]);

bar_xscale.domain([0, dataset.length]).range([padding * 3, width - padding * 3]);
bar_yscale.domain([d3.min(dataset), d3.max(dataset)]).range([padding * 3, height - padding * 3]);

bar_rscale.domain([d3.min(dataset), d3.max(dataset)]).range([0, 255]);
bar_gscale.domain([d3.min(dataset), d3.max(dataset)]).range([30, 100]);
bar_bscale.domain([d3.min(dataset), d3.max(dataset)]).range([100, 0]);

var scatter_xaxis = d3.axisBottom(scatter_xscale).ticks(5);
var scatter_yaxis = d3.axisLeft(scatter_yscale).ticks(5);
var bar_xaxis = d3.axisBottom(bar_xscale).ticks(10);
var bar_yaxis = d3.axisLeft(bar_yscale).ticks(10);

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

svg.append("g").attr("class", "axis").attr("transform", "translate(0," + (height - padding) + ")").call(scatter_xaxis);
svg.append("g").attr("class", "axis").attr("transform", "translate(" + padding + ", 0)").call(scatter_yaxis);

svg = d3.select("body").append("svg").attr("width", width).attr("height", height).attr("id", "barchart");

svg.selectAll("#barchart > rect").data(dataset).enter().append("rect").attr("x", function (d, i) {
    return bar_xscale(i);
}).attr("y", function (d) {
    return height - bar_yscale(d) - padding * 3;
}).attr("height", function (d) {
    return bar_yscale(d);
}).attr("width", width / (dataset.length + padding)).attr("fill", function (d) {
    return "rgb(" + bar_rscale(d) + "," + bar_gscale(d) + "," + bar_bscale(d) + ")";
});

svg.selectAll("#barchart > text").data(dataset).enter().append("text").text(function (d) {
    return d;
}).attr("x", function (d, i) {
    return bar_xscale(i) + width / ((dataset.length + padding) * 2);
}).attr("y", function (d) {
    return height - bar_yscale(d) + 30;
}).attr("fill", "white").attr("text-anchor", "middle");

svg.append("g").attr("class", "axis").attr("transform", "translate(0, " + (height - padding) + ")").call(bar_xaxis);
svg.append("g").attr("class", "axis").attr("transform", "translate(" + padding + ", 0)").call(bar_yaxis);

/***/ })

/******/ });