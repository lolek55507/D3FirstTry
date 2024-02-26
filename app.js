

const example_Data = [
    {id: 'd1', value: 10, region: 'USA'},
    {id: 'd2', value: 11, region: 'India'},
    {id: 'd3', value: 12, region: 'China'},
    {id: 'd4', value: 8, region: 'Germany'},
    {id: 'd5', value: 13, region: 'Poland'},
    {id: 'd6', value: 14, region: 'Italy'},
    {id: 'd7', value: 12, region: 'Japan'},
    {id: 'd8', value: 9, region: 'Holand'},
    {id: 'd9', value: 3, region: 'Netherland'},
    
];
let g = 15;
let c = 8;
const xScale = d3.scaleBand().domain(example_Data.map(dataPoint => dataPoint.region)).rangeRound([0,600]).padding(0.5);
const yScale = d3.scaleLinear().domain([0,15]).range([300,0]);

const container = d3.select('svg')
.classed('container', true);


const bars = container.selectAll('.bar')
    .data(example_Data)
    .enter()
    .append('g')
    .classed('bar', true);

bars.append('rect')
    .attr('width', xScale.bandwidth())
    .attr('height', (data) => 300 - yScale(data.value))
    .attr('x', data => xScale(data.region))
    .attr('y', data => yScale(data.value))

bars.append('text')
    .attr('x', data => xScale(data.region) + xScale.bandwidth() / 2)
    .attr('y', data => yScale(data.value) - 5)
    .text(data => data.region)
    .style('font-size', '14px')
    .style('fill', 'black')
    .style('text-anchor', 'middle')
    .style('font-family', 'arial');

for(let i = 0; i <= 15; i++) {
    container.append('line')
    .attr('x1', "20")
    .attr('x2', "600")
    .attr('y1', 20 * i)
    .attr('y2', 20 * i)
    .attr('stroke', "black")
    .attr('stroke-width', '2');
    container.append('text')
    .attr('x', 10)
    .attr('y', (20 * i) + 9.5)
    .text(g)
    .style('font-size', '14px')
    .style('fill', 'black')
    .style('text-anchor', 'middle')
    .style('font-family', 'arial');
    g--;
    
}