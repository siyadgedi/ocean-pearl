import React from 'react';
function FeaturesBlocks() {
  return (
    <section className="relative bg-[#a05714]/[.20]">

      {/* Section background (needs .relative class on parent and next sibling elements) */}

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Industries</h2>
            <p className="text-xl text-black">We work with multiple types of businesses, each requiring different needs:</p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-3 md:grid-cols-2 lg:grid-cols-2 items-start md:max-w-xl lg:max-w-none">
            {/* 1st item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Banking and Financial Services</h4>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Insurance</h4>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Government</h4>
            </div>

            {/* 4th item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">            
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">NPO's/NGO's</h4>
            </div>


          </div>

        </div>
      </div>
    </section>
  );
}

export default FeaturesBlocks;
