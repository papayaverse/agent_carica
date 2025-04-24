import React from 'react';
import { Box, Container, Typography, Paper, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const TimelineEvent = ({ year, region, title, description, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <Paper
      component={motion.div}
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      elevation={2}
      sx={{
        p: 3,
        position: 'relative',
        minWidth: '300px',
        '&::before': {
          content: '""',
          position: 'absolute',
          left: '-15px',
          top: '50%',
          transform: 'translateY(-50%)',
          width: '30px',
          height: '2px',
          backgroundColor: 'primary.main',
          display: 'block',
        },
      }}
    >
      <Stack spacing={1}>
        <Typography variant="h6" color="primary.main" fontWeight="bold">
          {year}: {region}
        </Typography>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </Stack>
    </Paper>
  );
};

const TimelineSection = () => {
  const events = [
    {
      year: '2018',
      region: 'Europe',
      title: 'GDPR',
      description: 'General Data Protection Regulation - First comprehensive data protection law that became a global standard.',
    },
    {
      year: '2020',
      region: 'United States (California)',
      title: 'CCPA',
      description: 'California Consumer Privacy Act - First major US privacy law giving consumers control over their personal data.',
    },
    {
      year: '2023',
      region: 'United States (Multiple States)',
      title: 'State Privacy Laws',
      description: 'Virginia (VCDPA), Colorado (CPA), Connecticut (CTDPA), and Utah (UCPA) implement comprehensive privacy laws.',
    },
    {
      year: '2024',
      region: 'United States (Expanding)',
      title: 'New State Laws',
      description: 'Texas Data Privacy and Security Act, Florida Privacy Protection Act, Oregon Consumer Privacy Act in development.',
    },
    {
      year: '2025',
      region: 'United States (Nationwide)',
      title: 'Privacy Law Expansion',
      description: 'Over 15 additional states expected to enact comprehensive privacy legislation, moving towards national standards.',
    },
  ];

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: 'background.default',
      }}
    >
      <Container maxWidth="lg">
        <Box textAlign="center" mb={8}>
          <Typography
            variant="h2"
            component={motion.h2}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            gutterBottom
          >
            Privacy Laws Are Evolving Rapidly
          </Typography>
          <Typography
            variant="h5"
            color="text.secondary"
            component={motion.p}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            sx={{ maxWidth: '800px', mx: 'auto', mb: 6 }}
          >
            Keeping up with the ever-changing landscape of privacy regulations is becoming increasingly challenging
          </Typography>
        </Box>

        <Box
          sx={{
            position: 'relative',
            overflowX: 'hidden',
            '&::after': {
              content: '""',
              position: 'absolute',
              left: 0,
              right: 0,
              top: '50%',
              height: '2px',
              backgroundColor: 'primary.main',
              opacity: 0.3,
            },
          }}
        >
          <Stack
            direction="row"
            spacing={4}
            sx={{
              pl: 2,
              pb: 2,
              overflowX: 'visible',
            }}
          >
            {events.map((event, index) => (
              <Box key={index}>
                <TimelineEvent {...event} index={index} />
              </Box>
            ))}
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default TimelineSection;