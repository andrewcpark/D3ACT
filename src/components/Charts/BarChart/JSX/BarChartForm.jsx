import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import '../../../ChartComponents/chartstyles.css';
import Dropdown from '../../../../Dropdown/Dropdown'

const BarChartForm = ({
  data,
  xKey,
  yKey,
  xAxisLabel,
  yAxisLabel,
  height,
  width,
  handlers: {
    handleData,
    handleXKey,
    handleYKey,
    handleXAxisLabel,
    handleYAxisLabel,
    handleHeight,
    handleWidth
  }
}) => {
  return (
    // <Fragment>
    //   <div>Chart Customizer Form</div>
    //   <section className="form">
    <form class=" w-full max-w-lg" onSubmit={() => {}}>
      <div class="rounded flex flex-col flex-wrap -mx-3 mb-6 rounded ">
        <div class="w-full px-3 mb-6 md:mb-0 rounded">
          <label
            class="block uppercase tracking-wide text-white text-xs font-bold mb-2 rounded"
            for="grid-first-name"
          >
            Data: object [ ]
          </label>
          <textarea
            class="h-52 appearance-none block w-full bg-gray-200 text-gray-700 border border-grey-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white shadow-md"
            id="set-data"
            type="text"
            placeholder="Data"
            onChange={handleData}
          />
          {/* <p class="text-white text-xs italic">Please fill out this field.</p> */}
        </div>

        <div class="w-full md:w-1/2 px-3 pb-6 md:mb-0 rounded">
          <label
            class="block uppercase tracking-wide text-white text-xs font-bold mb-2"
            for="grid-first-name"
          >
            X Key: string
          </label>
          < Dropdown 
          data={data} 

          />
          
          {/* <input
            class="rounded shadow-md"
            id="set-XKey"
            type="text"
            placeholder="X Key"
            onChange={handleXKey}
          /> */}
          {/* <p class="text-white text-xs italic">Please fill out this field.</p> */}
        </div>

        <div class="w-full md:w-1/2 px-3 pb-6 md:mb-0">
          <label
            class="block uppercase tracking-wide text-white text-xs font-bold mb-2"
            for="grid-first-name"
          >
            Y Key: string
          </label>
          <input
            class="rounded shadow-md"
            id="set-YKey"
            type="text"
            placeholder="Y Key"
            onChange={handleYKey}
          />
          {/* <p class="text-white text-xs italic">Please fill out this field.</p> */}
        </div>

        <div class="w-full md:w-1/2 px-3 pb-6 md:mb-0">
          <label
            class="block uppercase tracking-wide text-white text-xs font-bold mb-2"
            for="grid-first-name"
          >
            X Axis Label: string
          </label>
          <input
            class="rounded shadow-md"
            id="set-xAxisLabel"
            type="text"
            placeholder="X Axis Label"
            onChange={handleXAxisLabel}
          />
          {/* <p class="text-white text-xs italic">Please fill out this field.</p> */}
        </div>

        <div class="w-full md:w-1/2 px-3 pb-6 md:mb-0">
          <label
            class="block uppercase tracking-wide text-white text-xs font-bold mb-2"
            for="grid-first-name"
          >
            Y Axis Label: string
          </label>
          <input
            class="rounded shadow-md"
            id="set-yAxisLabel"
            type="text"
            placeholder="Y Axis Label"
            onChange={handleYAxisLabel}
          />
          {/* <p class="text-white text-xs italic">Please fill out this field.</p> */}
        </div>

        <div class="w-full md:w-1/2 px-3 pb-6 md:mb-0">
          <label
            class="block uppercase tracking-wide text-white text-xs font-bold mb-2"
            for="grid-first-name"
          >
            Height: number
          </label>
          <input
            class="rounded shadow-md"
            id="set-height"
            type="number"
            placeholder="Height"
            onChange={handleHeight}
          />
          {/* <p class="text-white text-xs italic">Please fill out this field.</p> */}
        </div>

        <div class="w-full md:w-1/2 px-3 pb-6 md:mb-0">
          <label
            class="block uppercase tracking-wide text-white text-xs font-bold mb-2"
            for="grid-first-name"
          >
            Width: number
          </label>
          <input
            class="rounded shadow-md"
            id="set-width"
            type="number"
            placeholder="Width"
            onChange={handleWidth}
          />
          {/* <p class="text-white text-xs italic">Please fill out this field.</p> */}
        </div>
      </div>
    </form>
    //   </section>
    // </Fragment>
  );
};

export default BarChartForm;
//PropTypes does not exist;
// BarChartForm.propTypes = {
//   data: PropTypes.array,
//   xKey: PropTypes.string,
//   yKey: PropTypes.string,
//   xAxisLabel: PropTypes.string,
//   yAxisLabel: PropTypes.string,
//   height: PropTypes.number,
//   width: PropTypes.number,
// }

// Event Handlers here to update state dynamically, on change
// Call some fn getData() to import? or pull from whereever we import the data from
// const changeData = (event: ChangeEvent<HTMLInputElement>) => {
//   event.preventDefault();
//   setData(JSON.parse(event.target.value));
// }

// const changeXKey = (event: ChangeEvent<HTMLInputElement>) => {
//   event.preventDefault();
//   setXKey(event.target.value);
// }

// const changeYKey = (event: ChangeEvent<HTMLInputElement>) => {
//   event.preventDefault();
//   setYKey(event.target.value);
// }

// const changexAxisLabel = (event: ChangeEvent<HTMLInputElement>) => {
//   event.preventDefault();
//   setxAxisLabel(event.target.value);
// }

// const changeyAxisLabel = (event: ChangeEvent<HTMLInputElement>) => {
//   event.preventDefault();
//   setyAxisLabel(event.target.value);
// }

// const changeWidth = (event: ChangeEvent<HTMLInputElement>) => {
//   event.preventDefault();
//   setWidth(+event.target.value);
// }

// const changeHeight = (event: ChangeEvent<HTMLInputElement>) => {
//   event.preventDefault();
//   setHeight(+event.target.value);
// }

// const changeKeys = (event: ChangeEvent<HTMLInputElement>) => {
//   event.preventDefault();
//   setKeys(event.target.value);
// }
