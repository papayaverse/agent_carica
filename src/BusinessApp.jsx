import React from 'react';
import { Box } from '@mui/material';
import HeroSection from './components/HeroSection';
import PricingSection from './components/PricingSection';
import TimelineSection from './components/TimelineSection';
import ComplianceSection from './components/ComplianceSection';
import FeaturesSection from './components/FeaturesSection';
import HowItWorksSection from './components/HowItWorksSection';
// import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

const App = () => {
  return (
    <Box sx={{ minHeight: '100vh' }}>
      <HeroSection />
      <PricingSection />
      <TimelineSection />
      <ComplianceSection />
      <FeaturesSection />
      <HowItWorksSection />
      {/* <TestimonialsSection /> */}
      <ContactSection />
      <Footer />
    </Box>
  );
};

export default App;