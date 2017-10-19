let width = 1200;
let height = 200;
let barPadding = 1;

let dataset = [];


for(let i = 0; i < 20; i++) {
    dataset.push(Math.floor( Math.random() * 90));
}

let svg = d3.select("body").append("svg");
svg.attr("width", width)
   .attr("height", height);




let circles  = svg.selectAll("circle").data(dataset).enter().append("circle");


circles.attr("cx", function(d, i) {
    return (i * 80) + 25;
})
       .attr("cy", height/2)
       .attr("r", function(d) {
           return d;
       });

circles.attr("fill", "yellow")
       .attr("stroke", "orange")
       .attr("stroke-width", function(d) {
           return d/2;
       });



svg = d3.select("body").append("svg").attr("width",width).attr("height", height);


svg.selectAll("rect").data(dataset).enter().append("rect")
    .attr("x", function(d, i) {
        return i * (width/dataset.length);
    })
    .attr("y", (d) => {return height - d;})
    .attr("width", width/dataset.length - barPadding)
    .attr("height", function(d) {
        return d;
    })
    .attr("fill", function(d) {
        return "rgb(0, 0, " + (d * 10) + ")";
    });

    svg.selectAll("text")
    .data(dataset)
    .enter()
    .append("text")
    .text(function(d) {
        return d;
    })
    .attr("x", function(d, i) {
        return i * (width/dataset.length) + (width/dataset.length - barPadding)/2;
    })
    .attr("y", function(d, i) {
        return height - (d) + 14;
    })
        .attr('font-family', 'sans-serif')
        .attr('font-size', '11px')
        .attr('fill', 'white')
        .attr("text-anchor", "middle");

// d3.csv("static/food.csv", function(data) {
//     console.log(data);
//     d3.select("p").data(data).enter().append("p").text(function(elem) {
//             return "[ " + elem.Food + ": " + elem.Deliciousness + " ]";
//     });
// });