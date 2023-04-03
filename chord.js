
var city_name = [ "北京" , "上海" , "广州" , "深圳" , "香港"  ];

var population = [
  [ 1000,  3045, 4567, 1234, 3714 ],
  [ 3214,  2000, 2060, 124, 3234 ],
  [ 8761,  6545, 3000, 8045, 647  ],
  [ 3211,  1067, 3214, 4000, 1006 ],
  [ 2146,  1034, 6745, 4764, 5000 ]
];

var layout = d3.chord()
  .padAngle(.03)
  .sortSubgroups(d3.descending)
var links = layout(population);
console.log(links)

var groups = links.groups;
var chords = links;

console.log(groups);
console.log(chords);

var margin = {top: 20, right: 20, bottom: 30, left: 40},
    width = 500 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

var svg = d3.select('svg')
  .style('background-color', 'pink')
  .attr('width', 500)
  .attr('height', 500)
  .append('g')
  .attr('transform', `translate(${margin.left + width /2}, ${margin.top + height / 2})`);


const color = d3.scaleOrdinal(d3.schemeCategory10);

const arc = d3.arc()
  .innerRadius(width/2 * .8)
  .outerRadius(width/2)

var g = svg.append('g')

g
  .selectAll('path')
  .data(groups)
  .enter()
  .append("path")
  .attr('d', arc)
  .attr('fill', (d,i) => color(i))
  
g
  .selectAll('text')
  .data(groups)
  .enter()
  .append('text')
  .attr('transform', d => `translate(${arc.centroid(d)})`)
  .attr('text-anchor', 'middle')
  .text((d,i) => city_name[i])


const chord = d3.ribbon()
  .radius(width/2 * .8)

var g = svg.append('g')
 
g
  .selectAll('path')
  .data(chords)
  .enter()
  .append('path')
  .attr('class', 'inner')
  .attr('d', chord)
  .attr('fill', (d) => color(d.source.index))
  .on('mouseover', function() {
    d3.select(this).style('fill', 'yellow');
  })
  .on('mouseout', function(d) {
    d3.select(this).style('fill', color(d.source.index));
  })
