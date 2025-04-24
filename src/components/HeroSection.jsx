import React from 'react';
import { Box, Container, Typography, Button, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import logo from '../assets/carica.png';

const HeroSection = () => {
  const handleGetStarted = () => {
    const contactSection = document.querySelector('#contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
  <Box
    component={motion.div}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    sx={{
      background: 'linear-gradient(135deg, #2F6B48 0%, #1F4A31 100%)',
      color: 'white',
      py: { xs: 8, md: 12 },
      position: 'relative',
      overflow: 'hidden',
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'url("data:image/svg+xml,%3Csvg width=\'100%\' height=\'100%\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cdefs%3E%3ClinearGradient id=\'a\' gradientUnits=\'userSpaceOnUse\' x1=\'0\' x2=\'100%\' y1=\'0\' y2=\'100%\'%3E%3Cstop offset=\'0\' stop-color=\'%23ffffff\' stop-opacity=\'0.05\'/\%3E%3Cstop offset=\'1\' stop-color=\'%23ffffff\' stop-opacity=\'0\'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cpath d=\'M0 0h100v100H0z\' fill=\'url(%23a)\' fill-rule=\'evenodd\' opacity=\'.1\' transform=\'scale(3)\'/%3E%3C/svg%3E")',
        opacity: 0.4,
      }
    }}
  >
    <Container maxWidth="lg">
      <Stack spacing={4} alignItems="center" textAlign="center">
      <Typography
          variant="h1"
          component={motion.h1}
          sx={{
            fontSize: { xs: '2.5rem', md: '3.5rem' },
            fontWeight: 700,
            mb: 2,
          }}
        >
          Stay Compliant. Stay Safe. Stay Ahead.
        </Typography>
        <Box
          component="img"
          src={logo}
          alt="Carica Logo"
          sx={{
            width: { xs: 120, md: 150 },
            height: { xs: 120, md: 150 }, // Make height equal to width
            mb: 4,
            borderRadius: '30%', // Make it circular
            objectFit: 'cover', // Ensure the image covers the area properly
            backgroundColor: 'white', // Optional: adds a white background
            padding: 0.05, // Optional: adds some padding around the logo
          }}
        />
        <Typography
          variant="h1"
          component={motion.h1}
          sx={{
            fontSize: { xs: '2.5rem', md: '3.5rem' },
            fontWeight: 700,
            mb: 2,
          }}
        >
          Carica
        </Typography>
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: '1.5rem', md: '2rem' },
            fontWeight: 500,
            color: 'white',
            maxWidth: '800px',
            mb: 4,
          }}
        >
          Automated compliance reports for privacy & accessibility laws powered by AI agents.
        </Typography>
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={2}
          justifyContent="center"
        >
          <Button
            variant="contained"
            size="large"
            color="primary"
            onClick={handleGetStarted}
            sx={{
              fontSize: '1.125rem',
              px: 4,
              py: 2,
              backgroundColor: 'white',
              color: 'primary.dark',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
              },
            }}
          >
            Get a Demo
          </Button>
          <Button
            variant="outlined"
            size="large"
            href="https://drive.google.com/file/d/13iJ1C3UPRCo_rwTx5rHFi44HQqQZ4q1W/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              fontSize: '1.125rem',
              px: 4,
              py: 2,
              color: 'white',
              borderColor: 'white',
              '&:hover': {
                borderColor: 'white',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
              },
            }}
          >
            View Sample Report
          </Button>
        </Stack>
      </Stack>
    </Container>
  </Box>
  );
};

export default HeroSection;