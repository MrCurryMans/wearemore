
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const MissionSection = () => {
  const [storyVisible, setStoryVisible] = useState(false);

  useEffect(() => {
    const storyObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStoryVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const storySection = document.querySelector('#story-section');

    if (storySection) storyObserver.observe(storySection);

    return () => {
      if (storySection) storyObserver.unobserve(storySection);
    };
  }, []);

  return (
    <section 
      id="story-section"
      className={`py-20 px-4 sm:px-6 lg:px-8 bg-more-gray story-section ${storyVisible ? 'animated' : ''}`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block px-3 py-1 bg-more-lightGreen bg-opacity-30 text-more-green rounded-full text-sm font-medium mb-4">
              Our Impact
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-more-darkGray mb-6 font-display">
              Technology & Community Building
            </h2>
            
            <div className="space-y-6 text-gray-600">
              <div className="flex">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-more-lightGreen bg-opacity-30 text-more-green">
                  1
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-more-darkGray mb-2">Technology</h3>
                  <p>We collect and refurbish electronic waste, transforming them into products which can be used beyond the "end" of their lifecycle. An environmental friendly process which creates learning tools for electrical components.</p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-more-lightGreen bg-opacity-30 text-more-green">
                  2
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-more-darkGray mb-2">Community Building</h3>
                  <p>We are a team led by women and aim to develop supportive, inclusive and unique environments for underrepresented groups to connect, collaborate and grow. Fostering opportunities for women to grow their confidence in a male-dominated industry.</p>
                </div>
              </div>
            </div>
            
            <Link 
              to="/our-story" 
              className="inline-flex items-center text-more-green font-medium mt-8 hover:underline"
            >
              Learn more about our story
              <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
          
          <div className="order-first lg:order-last">
            <div className="relative h-96 overflow-hidden rounded-xl">
              <img 
                src="/lovable-uploads/efc272e9-dbce-4cf9-a8bf-6b0681ca3c72.png" 
                alt="Zero Waste Initiative" 
                className="w-full h-full object-cover rounded-xl transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
