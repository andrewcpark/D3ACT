import React from 'react';
import { Link } from 'react-router-dom';

function ChartCards() {
  return (

    <div className="pt-5 ">
      <div className="px-6 py-4 grid gap-4 grid-cols-4  space-y-1">
      <div className="glass glassglow text-white max-w-md rounded-lg shadow-lg p-2">

        {/* <div className=" space-y-1 glass glassglow card text-white max-w-sm rounded-lg  shadow-xl p-2"> */}
          <div className="flex font-regular font-sans text-xl mb-2 items-center indent-10 ">
            <svg
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="1.5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              />
            </svg>
            <Link to="/bar-chart" className="p-2">
              Bar Chart
            </Link>
          </div>
          <p className="text-grey-700 text-base p-2">
            This is where we will display chart info for each graph
          </p>
        </div>
        <div className="glass glassglow text-white max-w-md rounded-lg shadow-lg p-2">

        {/* <div className="glass glassglow text-white max-w-sm rounded-lg  shadow-lg p-2"> */}
          <div className="flex font-regular font-sans text-xl mb-2 items-center indent-10">
						<i class="fa-solid fa-chart-line fa-xl "></i> 
            <Link to="/line-chart" className="p-2">
              Line Chart
            </Link>
          </div>
          <p className="text-grey-700 text-base p-2">
            This chart is used to show information that changes over time. Line charts are created by plotting a series of severla points and connecting them with a striaght line.
          </p>
        </div>
        <div className="glass glassglow text-white max-w-md rounded-lg shadow-lg p-2">

        {/* <div className=" glass glassglow max-w-sm rounded- overflow-hidden shadow-lg text-white p-2"> */}
          <div className="flex font-regular font-sans text-xl mb-2 items-center indent-10">
					<i class="fa-solid fa-chart-gantt fa-xl p-2"></i>
					  <Link to="/scatter-plot-chart" className="p-2">
              ScatterPlot
            </Link>
          </div>
          <p className="text-grey-700 text-base p-2">
          A type of data visualization that shows the relationship between different variables. This data is shown by placing various data points between an x- and y-axis.
          </p>
        </div>
        <div className="glass glassglow text-white max-w-md rounded-lg shadow-lg p-2">


        {/* <div className="max-w-sm rounded- overflow-hidden shadow-lg glass glassglow text-white p-2 "> */}
          <div className="flex font-regular font-sans text-xl mb-2 items-center indent-10">
            <i class="fa-solid fa-chart-gantt fa-xl p-2"></i>
            <Link to="histogram-chart" className="p-2">
              Histogram
            </Link>
          </div>
          <p className="text-grey-700 text-base p-2">
          Are used to summarize discrete or continuous data that are measured on an interval scale.
          </p>
        </div>
        <div className="glass glassglow text-white max-w-md rounded-lg shadow-lg p-2">

        {/* <div className="max-w-sm rounded- overflow-hidden shadow-lg glass glassglow"> */}
          <div className="flex font-regular font-sans text-xl mb-2 items-center indent-10 text-white p-2">     
						<i class="fa-solid fa-chart-pie fa-xl p-2"></i>
            Pie Chart
          </div>
          <p className="text-white text-base p-2">
          Are used to show percentages of a whole, and represents percentages at a set point in time.
          </p>
        </div>
        <div className="glass glassglow text-white max-w-md rounded-lg shadow-lg p-2">

        {/* <div className="max-w-sm rounded- overflow-hidden shadow-lg indent-2 glass glassglow text-white p-2"> */}
          <div className="flex font-regular font-sans text-xl mb-2 items-center indent-10">
						<i class="fa-solid fa-chart-gantt fa-xl p-2"></i>
            Timeline Chart
          </div>
          <p className="text-grey-700 text-base p-2">
            This is where we will display chart info for each graph
          </p>
        </div>
        <div className="glass glassglow text-white max-w-md rounded-lg shadow-lg p-2">

        {/* <div className=" max-w-sm rounded-lg overflow-hidden shadow-lg glass glassglow text-white p-2"> */}
          <div className="flex font-regular font-sans text-xl mb-2 items-center align-text-top indent-10">
					<i class="fa-solid fa-chart-gantt fa-xl p-2"></i>
            <a className="p-2">
            Bubble Graph </a>
          </div>
          <p className="text-grey-700 text-base p-2">
            This is where we will display chart info for each graph
          </p>
        </div>

        <div className="glass glassglow text-white max-w-md rounded-lg shadow-lg p-2">

        {/* <div className="max-w-sm rounded-lg overflow-hidden shadow-lg glass glassglow text-white p-2"> */}
          <div className="flex font-regular font-sans text-xl mb-2 indent-10 pt-2">
					<i class="fa-solid fa-chart-line fa-xl p-2 pt-2"></i>            
          Graph Chart
          </div>
          <p className="text-grey-700 text-base p-2 font-sans">
            This is where we will display chart info for each graph
          </p>
        </div>
        <div className="px-6 py-4 flex place-content-between border-3 rounded-lg  space-y-1"></div>
      </div>
    </div>
  );

}

export default ChartCards;

{/* <div className=" max-w-sm rounded overflow-hidden shadow-lg glass glassglow text-white p-2">
  <div className="flex font-regular font-sans text-xl mb-2 align-text-top indent-10">
  <i class="fa-solid fa-chart-gantt fa-xl p-2 "></i>
    Chart Mixed
  </div>
  <p className="text-grey-700 text-base p-2">
    This is where we will display chart info for each graph
  </p>
</div> */}