
import { useState, useEffect } from 'react';

const VisionSection = () => {
  const [ecoVisible, setEcoVisible] = useState(false);

  useEffect(() => {
    const ecoObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setEcoVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const ecoSection = document.querySelector('#eco-section');

    if (ecoSection) ecoObserver.observe(ecoSection);

    return () => {
      if (ecoSection) ecoObserver.unobserve(ecoSection);
    };
  }, []);

  return (
    <section 
      id="eco-section"
      className="py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 bg-more-lightGreen bg-opacity-30 text-more-green rounded-full text-sm font-medium mb-4">
            Our Vision
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-more-darkGray mb-4 font-display">
            Giving E-Waste New Life
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            MORE is dedicated to removing harmful industry practices and incentivising young women into entering STEM.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            className={`bg-white p-8 rounded-xl shadow-md eco-blob ${ecoVisible ? 'animated' : ''}`}
            style={{ '--i': 0 } as React.CSSProperties}
          >
            <div className="w-14 h-14 bg-more-lightGreen bg-opacity-30 rounded-full flex items-center justify-center text-more-green mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-more-darkGray mb-3">Helping Women and Under-privileged groups</h3>
            <p className="text-gray-600">
              Helping others has always been the forefront of what we strive to do here at MORE and this will never change. As a female founded business, our team knows exactly what it's like to be 
              pushed out the door in STEM discussions, and we hope to make that change.
            </p>
          </div>
          
          <div 
            className={`bg-white p-8 rounded-xl shadow-md eco-blob ${ecoVisible ? 'animated' : ''}`}
            style={{ '--i': 1 } as React.CSSProperties}
          >
            <div className="w-14 h-14 bg-more-lightGreen bg-opacity-30 rounded-full flex items-center justify-center text-more-green mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-more-darkGray mb-3">Reducing waste</h3>
            <p className="text-gray-600">
              Currently only 31% of the UK's 60 million tonnes of E-waste per year is recycled and that which is recycled travels 100's of miles and involves the use of harmful chemicals. This "recycling" is largely focused on metal extraction, with no care for environmental consequences.
              MORE's recycling pipeline reduces this environmental impact, offering local, scalable solutions for communities.
     
            </p>
          </div>
          
          <div 
            className={`bg-white p-8 rounded-xl shadow-md eco-blob ${ecoVisible ? 'animated' : ''}`}
            style={{ '--i': 2 } as React.CSSProperties}
          >
            <div className="w-14 h-14 bg-more-lightGreen bg-opacity-30 rounded-full flex items-center justify-center text-more-green mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-more-darkGray mb-3">Sourcing materials</h3>
            <p className="text-gray-600">
              We believe in the power of transformation. We look to source high-quality, reclaimed materials to turn waste into beautiful, functional designs. From smaller ranges such as our bracelets, to large pieces of home furniture, we believe our tech can become anything
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
