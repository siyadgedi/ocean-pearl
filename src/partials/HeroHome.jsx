import React, { useState } from 'react';
import Modal from '../utils/Modal';

import HeroImage from '../images/hero-image.png';
import SegmentImage from '../images/HomeImage.jpg';
function HeroHome() {

  const [videoModalOpen, setVideoModalOpen] = useState(false);

  return (
    <section className="relative">

      {/* Illustration behind hero content */}


      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Hero content */}
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Section header */}
          <div className="text-center pb-12 md:pb-16">
            <h1 className="text-5xl md:text-5xl font-extrabold leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out"><span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">Manage Risk and drive business evolution with intelligent risk analytics</span></h1>
          </div>

          {/* Hero image */}
          <div style={{'position': 'relative', 'display': 'flex', 'justifyContent': 'center', 'alignItems': 'center'}}>
            <img src={SegmentImage}/>

          </div>

        </div>

      </div>
    </section>
  );
}

export default HeroHome;