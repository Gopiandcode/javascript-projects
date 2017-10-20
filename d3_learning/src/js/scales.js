let dataset = [100, 200, 300, 400, 500];
let scatter_dataset = [[5, 20], [480, 90], [250, 50], [100, 33], [330, 95], [410, 12], [475, 44], [25, 67], [85, 21], [220, 88]];

let width = 1280;
let height = 720;

let scale = d3.scaleLinear();
let scatter_xscale = d3.scaleLinear();
let scatter_yscale = d3.scaleLinear();
let scatter_rscale = d3.scaleLinear();

scale.domain([d3.min(dataset), d3.max(dataset)]).range([0, width]);


scatter_xscale.domain([d3.min(scatter_dataset, (d) => {return d[0];}), d3.max(scatter_dataset, (d) => {return d[0];})]).range([0, width]);
scatter_yscale.domain([d3.min(scatter_dataset, (d) => {return d[1];}), d3.max(scatter_dataset, (d) => {return d[1];})]).range([0, height]);
scatter_rscale.domain([d3.min(scatter_dataset, (d) => {return d[0];}), d3.max(scatter_dataset, (d) => {return d[0];})]).range([0, 50]);


let svg = d3.select("body").append("svg").attr("width", width).attr("height", height);

svg.selectAll("circle").data(scatter_dataset).enter().append("circle")
    .attr("cx", (d) => {return scatter_xscale(d[0]);})
    .attr("cy", (d) => {return scatter_yscale(d[1]);})
    .attr("r", (d) => {return scatter_rscale(d[0]);})
    .attr("fill", "blue");