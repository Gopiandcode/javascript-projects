//let dataset = [100, 200, 300, 400, 500];
let dataset = [];
//let scatter_dataset = [[5, 20], [480, 90], [250, 50], [100, 33], [330, 95], [410, 12], [475, 44], [25, 67], [85, 21], [220, 88]];
let scatter_dataset = [];

for(let i = 0; i < 100; i++) {
    let numA = Math.floor(Math.random() * 100);
    let numB = Math.floor(Math.random() * 100);

    scatter_dataset.push([numA, numB]);
}

for(let i = 0; i < 20; i++) {
    let numA = Math.floor(Math.random() * 100);
    dataset.push(numA);
}

let width = 1280;
let height = 720;
let padding = 20;

let scale = d3.scaleLinear();
let scatter_xscale = d3.scaleLinear();
let scatter_yscale = d3.scaleLinear();
let scatter_rscale = d3.scaleLinear();

let bar_xscale = d3.scaleLinear();
let bar_yscale = d3.scaleLinear();
let bar_rscale = d3.scaleLinear();
let bar_gscale = d3.scaleLinear();
let bar_bscale = d3.scaleLinear();



scale.domain([d3.min(dataset), d3.max(dataset)]).range([0, width]);


scatter_xscale.domain([d3.min(scatter_dataset, (d) => {return d[0];}), d3.max(scatter_dataset, (d) => {return d[0];})]).range([padding*3, width-padding*3]);
scatter_yscale.domain([d3.min(scatter_dataset, (d) => {return d[1];}), d3.max(scatter_dataset, (d) => {return d[1];})]).range([height-padding*3, padding*3]);
scatter_rscale.domain([d3.min(scatter_dataset, (d) => {return d[0];}), d3.max(scatter_dataset, (d) => {return d[0];})]).range([2, 20]);


bar_xscale.domain([0, dataset.length]).range([padding*3, width-padding*3]);
bar_yscale.domain([d3.min(dataset), d3.max(dataset)]).range([padding*3, height-padding*3]);

bar_rscale.domain([d3.min(dataset), d3.max(dataset)]).range([0, 255]);
bar_gscale.domain([d3.min(dataset), d3.max(dataset)]).range([30, 100]);
bar_bscale.domain([d3.min(dataset), d3.max(dataset)]).range([100, 0]);


let scatter_xaxis = d3.axisBottom(scatter_xscale).ticks(5);
let scatter_yaxis = d3.axisLeft(scatter_yscale).ticks(5);
let bar_xaxis = d3.axisBottom(bar_xscale).ticks(10);
let bar_yaxis = d3.axisLeft(bar_yscale).ticks(10);

let svg = d3.select("body").append("svg").attr("width", width).attr("height", height);

svg.selectAll("circle").data(scatter_dataset).enter().append("circle")
    .attr("cx", (d) => {return scatter_xscale(d[0]);})
    .attr("cy", (d) => {return scatter_yscale(d[1]);})
    .attr("r", (d) => {return scatter_rscale(d[0]);})
    .attr("fill", "blue");
svg.selectAll("text").data(scatter_dataset).enter().append("text").text((d) => { return d[0] + ", " + d[1];})
    .attr("x", (d) => {return scatter_xscale(d[0]);})
    .attr("y", (d) => {return scatter_yscale(d[1]);})
    .attr("fill", "red");



    svg.append("g")
    .attr("class", "axis")
    .attr("transform", "translate(0," + (height-padding) + ")")
    .call(scatter_xaxis);
    svg.append("g")
    .attr("class", "axis")
    .attr("transform", "translate(" + padding + ", 0)")
    .call(scatter_yaxis);

svg = d3.select("body").append("svg").attr("width", width).attr("height", height).attr("id", "barchart");

svg.selectAll("#barchart > rect").data(dataset).enter().append("rect")
    .attr("x", (d,i) => {
        return bar_xscale(i);
    })
    .attr("y", (d)=> {
        return height - bar_yscale(d) - padding * 3;
    })
    .attr("height", (d) => {
        return bar_yscale(d);
    })
    .attr("width",  width/(dataset.length+padding))
    .attr("fill", (d) => {return "rgb(" + bar_rscale(d) + "," + bar_gscale(d) + "," + bar_bscale(d)  + ")";});

svg.selectAll("#barchart > text").data(dataset).enter().append("text")
    .text((d) => { return d;})
    .attr("x", (d,i) => { return bar_xscale(i) +  width/((dataset.length+padding)*2);})
    .attr("y", (d) => {return height - bar_yscale(d) + 30;})
    .attr("fill", "white")
    .attr("text-anchor", "middle");

svg.append("g").attr("class", "axis").attr("transform", "translate(0, " + (height-padding) + ")").call(bar_xaxis);
svg.append("g").attr("class", "axis").attr("transform", "translate(" + padding + ", 0)").call(bar_yaxis);