import React, { Component } from 'react';
import './Experiment.scss';
import { select, scaleTime, extent } from 'd3';



class Experiment extends Component {
    constructor(props) {
        super(props);
        this.drawGraphics = this.drawGraphics.bind(this);
        this.chart = this.chart.bind(this);
        this.svgInit = this.svgInit.bind(this);
    }

    componentDidMount() {
        this.drawGraphics()
    }

    componentDidUpdate(prevProps, prevState) {
        this.drawGraphics();
    }

    svgInit(svg, data) {
        const accessor = this.props.accessor || (d => d.date);
        const height = this.props.height || 30;
        const width = this.props.width || 600;
        const margin = this.props.margin || {
            top: 5,
            left: 5,
            right: 5,
            bottom: 5
        };
        let actual_width = width - margin.left - margin.right;
        let actual_height = height - margin.top - margin.bottom;
        let xScale = scaleTime().domain(extent(data, accessor))
            .range([0, actual_width]);

        svg.attr('width', '100%')
            .attr('height', '100%')
            .attr('viewBox', '0 0 ' + width + ' ' + height);


        let g = svg.append('g')
            .attr('class', 'chart-content')
            .attr('transform', 'translate(' + [margin.top, margin.left] + ')')

        let rect = g.append('rect')
            .attr('width', actual_width)
            .attr('height', actual_height)
            .attr('fill', 'white');

        let bars = g.selectAll('line')
            .data(data, accessor);

        console.log(data);

        bars.enter().append('line')
            .attr('x1', d => xScale(accessor(d)))
            .attr('x2', d => xScale(accessor(d)))
            .attr('y1', 0)
            .attr('y2', actual_height)
            .attr('stroke', '#000')
            .attr('stroke-opacity', 1.0);

        bars.transition()
        .duration(300)
        .attr('x1', d => xScale(accessor(d)))
        .attr('x2', d => xScale(accessor(d)));
    }
    chart(selection) {
        const height = this.props.height || 30;
        const width = this.props.width || 600;
        const margin = this.props.margin || {
            top: 5,
            left: 5,
            right: 5,
            bottom: 5
        };
        const svgInit = this.svgInit;
        selection.each(function (data) {
            let div = select(this)
                .attr('class', 'data-item');
            let svg = div.selectAll('svg').data([data]);
            svg.enter()
                .append('svg')
                .call(svgInit, data);

        });

    }

    drawGraphics() {
        // Place to draw all d3 code
        const addData = this.props.addData;
        let data = this.props.data;
        const main_div = this.main_div;

        let divChart = select(main_div);
        divChart.selectAll('div.data-item')
            .data(data)
            .enter()
            .append('div')
            .attr('class', 'data-item')
            .call(this.chart);

        select('#btn-update').on('click', () => {
            console.log(data);
                let item = data[0];
                item = addData(item, 30, 3*60);
                data[0] = item;
                select('#chart').selectAll('div.data-item')
                .data(data)
                .append('div')
                .attr('class', 'data-item')
                .call(this.chart);

            });

    }

    render() {
        return (
            <div className="barchart" ref={div => this.main_div = div}>
            </div>
        );
    }

}

export default Experiment;