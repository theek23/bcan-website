import React from 'react';
import Navigation from '../components/Navigation';
import AboutHero from '../components/about/AboutHero';
import MissionVision from '../components/about/MissionVision';
import CoreValues from '../components/about/CoreValues';
import Footer from '../components/Footer';
import FadeIn from '../components/animations/FadeIn';

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <FadeIn>
        <AboutHero />
      </FadeIn>
      <FadeIn delay={0.2}>
        <MissionVision />
      </FadeIn>
      <FadeIn delay={0.3}>
        <CoreValues />
      </FadeIn>
      <Footer />
    </div>
  );
};

export default About;