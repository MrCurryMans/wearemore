
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const OurStory = () => {
  return (
    <div className="min-h-screen bg-more-cream">
      <Navbar />
      
      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-more-darkGray mb-4 font-display">
              Our Story
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The journey of M.O.R.E from concept to a sustainable, community-driven initiative.
            </p>
          </div>
          
          {/* Content */}
          <div className="prose max-w-4xl mx-auto text-more-darkGray">
            <p className="text-lg">
              M.O.R.E (Making Original Recycled Equipment) was founded with a simple but powerful vision: 
              to transform electronic waste into beautiful, functional products while empowering women 
              and underrepresented groups in the technology sector.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Our Beginning</h2>
            <p>
              What started as a small workshop in Northern Ireland quickly grew into a movement. We 
              recognized two significant issues: the growing problem of electronic waste and the lack 
              of diversity in the technology sector. M.O.R.E was our answer to both.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Our Mission</h2>
            <p>
              Our mission is twofold: to reduce electronic waste by repurposing components into new 
              products, and to create opportunities for women and underrepresented groups to develop 
              skills and confidence in a traditionally male-dominated industry.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Our Process</h2>
            <p>
              Every M.O.R.E product tells a story. We carefully collect discarded electronic components, 
              clean and refurbish them, and transform them into unique designs. This process not only 
              diverts waste from landfills but also creates educational opportunities as we teach 
              our team members about electronics, design, and sustainable practices.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Our Community</h2>
            <p>
              At the heart of M.O.R.E is our community. We've created a supportive, inclusive environment 
              where individuals can learn, grow, and collaborate. Through workshops, mentoring programs, 
              and community events, we're building a network of changemakers committed to sustainability 
              and equality.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Looking Forward</h2>
            <p>
              As we continue to grow, our vision expands. We're developing new product lines, exploring 
              partnerships with educational institutions, and working to scale our impact. We believe that 
              small actions can lead to significant change, and we're committed to being part of the solution 
              to both environmental challenges and social inequalities.
            </p>
            
            <p className="mt-8 text-lg font-semibold">
              Join us in our mission to create a more sustainable, equitable future for all.
            </p>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default OurStory;
