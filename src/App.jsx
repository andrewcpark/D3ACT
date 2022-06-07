/* eslint-disable */
import React, { Fragment, createElement } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
  HashRouter
} from 'react-router-dom';
import BarChartContainer from './components/Charts/BarChart/JSX/BarChartContainer';
import NavBar from './components/NavBar';
import ScatterPlotContainer from './components/Charts/ScatterPlot/JSX/ScatterPlotContainer';
import HistogramContainer from './components/Charts/Histogram/JSX/HistogramContainer';
import LineChartContainer from './components/Charts/LineChart/LineChartContainer';
import Homepage from './components/pages/Homepage';
import CarouselComponent from './components/pages/TheCarousel';
import StreamGraphContainer from './components/Charts/StreamGraph/StreamGraphContainer';


export default () => {
  return (
    <Fragment>
      <HashRouter>
        <div>
          <Routes>
            <Route path="/" element={ <Homepage />} />
            <Route path="bar-chart" element={<BarChartContainer />} />
            <Route path="line-chart" element={<LineChartContainer />} />
            <Route
              path="scatter-plot-chart"
              element={<ScatterPlotContainer />}
            />
            <Route path="histogram-chart" element={<HistogramContainer />} />
            <Route path='stream-graph' element={<StreamGraphContainer />} />
          </Routes>
        </div>
      </HashRouter>
    </Fragment>
  );
};
