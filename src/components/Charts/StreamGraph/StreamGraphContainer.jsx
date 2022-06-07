import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import StreamGraph from './StreamGraph';
import { csvParse } from 'd3';

import { sampleData } from '../../../utils/dummypenguinsdata';
import '../../ChartComponents/chartstyles.css';

/*
This is the generic classful parent component that hosts the chart-specific form and graph 
We update state from the form, which the graph reads and re-renders from
<BarChartContainer>
    <BarChartForm />
    <BarChartCustomizer />
    <BarChartCodePreview />
</BarChartContainer>
*/
const StreamGraphContainer = (props) => {

  const [data, setData] = useState(sampleData);
  const [xKey, setXKey] = useState('');
  const [yKey, setYKey] = useState('');
  const [xAxisLabel, setXAxisLabel] = useState('X-axis: Species');
  const [yAxisLabel, setYAxisLabel] = useState('Y-axis: Body Mass');
  const [height, setHeight] = useState(500);
  const [width, setWidth] = useState(500);

  const handleData = (e) => {
    e.preventDefault();
    setData(JSON.parse(e.target.value));
  };

  const handleXKey = (e) => {
    e.preventDefault();
    setXKey(e.target.value);
  };

  const handleYKey = (e) => {
    e.preventDefault();
    setYKey(e.target.value);
  };

  const handleXAxisLabel = (e) => {
    e.preventDefault();
    setXAxisLabel(e.target.value);
  };

  const handleYAxisLabel = (e) => {
    e.preventDefault();
    setYAxisLabel(e.target.value);
  };

  const handleWidth = (e) => {
    e.preventDefault();
    if (+e.target.value < 100) {
      console.log('Value must not be less than 100 px. Resetting to default.');
      setWidth(500);
      return;
    }
    setWidth(+e.target.value);
  };

  const handleHeight = (e) => {
    e.preventDefault();
    if (+e.target.value < 100) {
      console.log('Value must not be less than 100 px. Resetting to default.');
      setHeight(500);
      return;
    }
    setHeight(+e.target.value);
  };

  const handleImport = (e) => {
    e.preventDefault();
    window.electron.importFile()
      .then((path) => {
        const file = window.electron.readFileSync(path, {encoding:'utf8'});
        console.log(file);
        const data = csvParse(file);
        console.log(data)
      })
  }
 

  const handlers = {
    handleData,
    handleXKey,
    handleYKey,
    handleXAxisLabel,
    handleYAxisLabel,
    handleWidth,
    handleHeight
  };

  const name = 'BarChart';
  const children = ['Chart', 'Axis_noticks', 'Axis', 'Rectangle'];


  return (
    <Fragment>
      <div><Link to='/'>back</Link></div>
      <div className=" ChartContainer max-h-chart-container grid grid-cols-2 grid-rows-main gap-2 p-2">
        <div className="glass col-start-1 col-span-1 row-span-2 p-2 border-2 rounded">
          'Form'
        </div>
        <div className="glass col-start-2 col-span-1 row-span-1 rounded">
          <StreamGraph />
        </div>
        <div className="glass col-start-2 col-span-1 row-span-1 p-2 rounded text-slate-100">
          Code Preview
        </div>
        <div class=" flex justify-between col-start-1 col-span-2 row-start-3 row-span-3">
          <button class="glass w-32 text-white" onClick={handleImport}>Import</button>
        </div>
      </div>
    </Fragment>
  );
};

export default StreamGraphContainer;