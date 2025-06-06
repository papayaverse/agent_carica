import React from 'react';
import { Box, Container, Typography, Button, Stack, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import caricaLogo from '../assets/carica.png';
import agentPapayaLogo from '../assets/agentPapayaLightGlass.png';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      sx={{
        background: 'linear-gradient(135deg, #FF6B6B 0%, #FF8E53 100%)',
        color: 'white',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
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
        <Stack spacing={6} alignItems="center" textAlign="center">
          <Typography
            variant="h1"
            component={motion.h1}
            sx={{
              fontSize: { xs: '3rem', md: '4rem' },
              fontWeight: 700,
              mb: 2,
            }}
          >
            Welcome to Papayacy
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '2rem', md: '2.5rem' },
              fontWeight: 500,
              mb: 4,
            }}
          >
            Privacy is hard, Papayacy is easy
          </Typography>
          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: '1.2rem', md: '1.5rem' },
              fontWeight: 400,
              maxWidth: '800px',
              mb: 8,
              opacity: 0.9,
            }}
          >
            Papayacy - where Papaya meets Privacy, making digital compliance delightfully simple
          </Typography>

          <Grid container spacing={6} justifyContent="center">
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: 4,
                  p: 4,
                  height: '100%',
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                  }
                }}
              >
                <Stack spacing={3} alignItems="center">
                  <Box
                    component="img"
                    src={agentPapayaLogo}
                    alt="Agent Papaya"
                    sx={{
                      width: { xs: 120, md: 160 },
                      height: { xs: 120, md: 160 },
                      mb: 2,
                    }}
                  />
                  <Typography variant="h4" gutterBottom>
                    For Users
                  </Typography>
                  <Button
                    variant="contained"
                    size="large"
                    onClick={() => navigate('/users')}
                    sx={{
                      backgroundColor: 'white',
                      color: '#FF6B6B',
                      '&:hover': {
                        backgroundColor: 'rgba(255, 255, 255, 0.9)',
                      },
                      px: 4,
                      py: 2,
                      fontSize: '1.125rem',
                    }}
                  >
                    Explore Agent Papaya →
                  </Button>
                </Stack>
              </Box>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: 4,
                  p: 4,
                  height: '100%',
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                  }
                }}
              >
                <Stack spacing={3} alignItems="center">
                  <Box
                    component="img"
                    src={caricaLogo}
                    alt="Agent Carica"
                    sx={{
                      width: { xs: 120, md: 160 },
                      height: { xs: 120, md: 160 },
                      mb: 2,
                      borderRadius: '30%',
                      backgroundColor: 'white',
                      padding: 0.5,
                    }}
                  />
                  <Typography variant="h4" gutterBottom>
                    For Business
                  </Typography>
                  <Button
                    variant="contained"
                    size="large"
                    onClick={() => navigate('/business')}
                    sx={{
                      backgroundColor: 'white',
                      color: '#FF6B6B',
                      '&:hover': {
                        backgroundColor: 'rgba(255, 255, 255, 0.9)',
                      },
                      px: 4,
                      py: 2,
                      fontSize: '1.125rem',
                    }}
                  >
                    Explore Agent Carica →
                  </Button>
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </Stack>
      </Container>
    </Box>
  );
};

export default LandingPage;