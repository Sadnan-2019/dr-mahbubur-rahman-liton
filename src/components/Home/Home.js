import React from 'react';
import Hero from '../Slider/Slider';
import WelcomeMessage from '../WelcomeMessage/WelcomeMessage';
import About from '../About/About';
import DevelopmentProjects from '../DevelopmentProjects/DevelopmentProjects';
import NewsUpdates from '../Newsdata/Newsdata';
import Gallery from '../Gallery/Gallery';
import ContactSection from '../ContactSection/ContactSection';

const Home = () => {
     return (
          <div>
               <Hero />
      <WelcomeMessage />
      <About />
      {/* <MyWork /> */}
      <DevelopmentProjects />
      <NewsUpdates />
      <Gallery />
      {/* <CitizenServices /> */}
      <ContactSection />
          </div>
     );
};

export default Home;