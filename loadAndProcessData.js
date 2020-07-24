
const svg = d3.select('svg');


const height = +svg.attr('height'); 
const width = +svg.attr('width');

console.log(width)

const g = svg.append('g')
  .attr('transform','translate(480,250)');

const circle = g.append('circle')
  .attr('r',height/2)
  .attr('fill','pink')
  .attr('stroke','black');

const eyeradius = 30;
const eyespacing = 100;
const eyeYOffset = -70;
const eyebrowwidth = 70;
const eyebrowheight = 15;
const eyebrowYOffset = -70;


const eyesG = g.append('g')
.attr('transform','translate(0,-70)');

const leftEye = eyesG.append('circle')
  .attr('r',eyeradius)
  .attr('cx', - eyespacing)
  
const RightEye = eyesG.append('circle')
  .attr('r',eyeradius)
  .attr('cx', + eyespacing)

const leftEyebrow = eyesG.append('rect')
  .attr('x', -eyespacing - eyebrowwidth/2)
  .attr('y', eyebrowYOffset)
  .attr('width', eyebrowwidth)
  .attr('height',eyebrowheight)

const rightEyebrow = eyesG.append('rect')
  .attr('x', +eyespacing - eyebrowwidth/2)
  .attr('y',eyebrowYOffset)
  .attr('width', eyebrowwidth)
  .attr('height',eyebrowheight)

const mouth = g.append('path')
  .attr('d',d3.arc()({
    innerRadius : 150,
    outerRadius : 170,
    startAngle:Math.PI/2,
    endAngle: Math.PI*3/2
  }));
