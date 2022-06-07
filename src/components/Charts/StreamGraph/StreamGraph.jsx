import React from 'react';
import * as d3 from 'd3';

function StreamGraph() {
  const svg = d3.create('svg')
    .attr('width', '100%')
    .attr('height', '100%')
    .attr("viewBox", [0, 0, 500, 500])
    .attr("style", "max-width: 100%; height: auto; height: intrinsic;");
    console.log(svg.node());
  return <div></div>
}

export default StreamGraph