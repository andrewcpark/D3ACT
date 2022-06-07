import React from 'react';
import { ReactDOM } from 'react';
import { render } from 'react-dom';
import { Carousel } from 'react-responsive-carousel';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import Chart1 from './chart1.svg';
import Chart2 from './chart2.svg';
import Chart3 from './chart3.svg';
import Chart4 from './chart4.svg';

function CarouselComponent() {
  return (
    <div className="carousel-wrapper glass">
      <Carousel
        autoPlay
        showArrows
        showIndicators
        showThumbs={false}
        infiniteLoop={true}
      >``
        <div>
          <img src={Chart1} className="h-[550px] pb-[25px]" />
        </div>
        <div>
          <img src={Chart2} className="h-[550px] pb-[25px]" />
        </div>
        <div>
          <img src={Chart3} className="h-[550px] pb-[25px]" />
        </div>
        <div>
          <img src={Chart4} className="h-[550px] pb-[25px]" />
        </div>
      </Carousel>
    </div>
  );
}



export default CarouselComponent;
