import React from 'react';
import { Parallax } from 'react-parallax';
import image1 from '../images/parallax_1.png';
import image2 from '../images/parallax_2.png';
import image3 from '../images/parallax_3.png';
import image4 from '../images/parallax_4.png';
import image5 from '../images/parallax_5.png';
import './BlueParallax.css';

const BlueParallax = () => {
  return (
    <div id="maincontain">
      <Parallax bgImage={image1} strength={200}>
        <div style={{ height: 500 }}></div>
      </Parallax>

      <Parallax bgImage={image2} strength={300}>
        <div style={{ height: 500 }}></div>
      </Parallax>

      <Parallax bgImage={image3} strength={400}>
        <div style={{ height: 500 }}></div>
      </Parallax>

      <Parallax bgImage={image4} strength={500}>
        <div style={{ height: 500 }}></div>
      </Parallax>

      <Parallax bgImage={image5} strength={600}>
        <div style={{ height: 500 }}></div>
      </Parallax>
    </div>
  );
};

export default BlueParallax;