import React from 'react';
import Navigation from '../components/Navigation';
import ResearchHero from '../components/research/ResearchHero';
import Publications from '../components/research/Publications';
import ClinicalTrials from '../components/research/ClinicalTrials';
import Collaborations from '../components/research/Collaborations';
import Footer from '../components/Footer';
import FadeIn from '../components/animations/FadeIn';

const Research = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <FadeIn>
        <ResearchHero />
      </FadeIn>
      <FadeIn delay={0.2}>
        <Publications />
      </FadeIn>
      <FadeIn delay={0.3}>
        <ClinicalTrials />
      </FadeIn>
      <FadeIn delay={0.4}>
        <Collaborations />
      </FadeIn>
      <Footer />
    </div>
  );
};

export default Research;