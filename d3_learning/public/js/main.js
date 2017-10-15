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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


d3.selectAll('.day-high .temp').data([45, 78, 77, 66, 76]).html(function (d, i) {
    if (i == 0) {
        return '<strong class="text-muted" style="font-size: 2rem">' + d + '</strong>';
    } else {
        return '<strong>' + d + '</strong>';
    }
});

/*let data = [
    { date: '4/01/2017', low: 55, high: 78},
    { date: '4/02/2017', low: 65, high: 83},
    { date: '4/03/2017', low: 77, high: 90},
    { date: '4/04/2017', low: 58, high: 78},
    { date: '4/05/2017', low: 67, high: 92},
];

d3.select('tbody').
    selectAll('tr').
    data(data).
    enter().append('tr').
    html((d) => {
        console.log("running on item " + d);
        return '<th scope="row">' + d.date +
        '</th><td>' +  d.low  +
        '</td><td>' + d.high  +
        '</td>';
    });
*/

var bardata = [];
for (var i = 0; i < 100; ++i) {
    bardata.push(Math.random() * 30);
}

var height = 400,
    width = 600,
    barwidth = 50,
    barOffset = 5,
    tempcolor = void 0;

var yScale = d3.scaleLinear().domain([0, d3.max(bardata)]).range([0, height]);

var xScale = d3.scaleBand().domain(bardata).range([0, width]);

var colours = d3.scaleLinear().domain([0, d3.max(bardata)]).range(['#FFBB32', '#C61C6F']);

var tooltip = d3.select('body').append('div').style('position', 'absolute').style('padding', '0 10px').style('background', 'white').style('opacity', 0);

var chart = d3.select('#viz').append('svg').attr('width', width).attr('height', height).style('background', '#C90D7D6').selectAll('rect').data(bardata).enter().append('rect').style('fill', function (d) {
    return colours(d);
}).attr('width', function (d) {
    return xScale.bandwidth();
}).attr('height', 0).attr('x', function (d, i) {
    return xScale(d);
}).attr('y', height).on('mouseover', function (d) {
    tempcolor = this.style.fill;

    tooltip.transition().duration(200).style('opacity', 0.9);

    tooltip.html(d).style('left', d3.event.pageX - 35 + 'px').style('top', d3.event.pageY - 30 + 'px');

    d3.select(this).transition().style('opacity', 0.5).style('fill', 'yellow');
}).on('mouseout', function (d) {
    d3.select(this).transition().style('opacity', 1).style('fill', tempcolor);
});

chart.transition().attr('height', function (d) {
    return yScale(d);
}).attr('y', function (d) {
    return height - yScale(d);
}).delay(function (d, i) {
    return i * 20;
}).duration(1000).ease(d3.easeBounceInOut);

/***/ })
/******/ ]);