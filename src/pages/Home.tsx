import FadeIn from '../components/animations/FadeIn';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import Features from '../components/Features';
import ProductShowcase from '../components/ProductShowcase';
import ImpactStories from '../components/ImpactStories';
import SectionPreviews from '../components/SectionPreviews';
import Timeline from '../components/Timeline';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <FadeIn>
        <Hero />
      </FadeIn>
      <FadeIn delay={0.2}>
        <Features />
      </FadeIn>
      <FadeIn delay={0.3}>
        <ProductShowcase />
      </FadeIn>
      <FadeIn delay={0.2}>
        <ImpactStories />
      </FadeIn>
      <FadeIn delay={0.3}>
        <SectionPreviews />
      </FadeIn>
      <FadeIn delay={0.2}>
        <Timeline />
      </FadeIn>
      <Footer />
    </div>
  );
};

export default Home;