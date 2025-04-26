import React from 'react';
import { Box, Container, Typography, Paper, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const TimelineEvent = ({ year, region, title, description, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const isLeft = index % 2 === 0;

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: { xs: 'flex-start', md: isLeft ? 'flex-end' : 'flex-start' },
        width: { xs: '100%', md: '50%' },
        alignSelf: { xs: 'flex-start', md: isLeft ? 'flex-start' : 'flex-end' },
        position: 'relative',
        mb: 4,
        ml: { xs: '60px', md: isLeft ? 0 : 'auto' },
        pr: { xs: 2, md: isLeft ? 4 : 0 },
        pl: { xs: 2, md: isLeft ? 0 : 4 },
      }}
    >
      <Paper
        component={motion.div}
        ref={ref}
        initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, delay: index * 0.2 }}
        elevation={2}
        sx={{
          p: 3,
          position: 'relative',
          width: '100%',
          maxWidth: '400px',
          backgroundColor: 'background.paper',
          zIndex: 1,
          '&:hover': {
            transform: 'translateY(-4px)',
            transition: 'transform 0.3s ease',
          },
          '&::after': {
            content: '""',
            position: 'absolute',
            top: '50%',
            [isLeft ? 'right' : 'left']: { xs: 'auto', md: -15 },
            transform: 'translateY(-50%)',
            width: 0,
            height: 0,
            borderTop: '15px solid transparent',
            borderBottom: '15px solid transparent',
            [isLeft ? 'borderLeft' : 'borderRight']: { xs: 'none', md: '15px solid #fff' },
            display: { xs: 'none', md: 'block' },
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
    </Box>
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
      region: 'California',
      title: 'CCPA',
      description: 'California Consumer Privacy Act - First major US privacy law giving consumers control over their personal data.',
    },
    {
      year: 'Jan 2023',
      region: 'Virginia',
      title: 'VCDPA',
      description: 'Virginia Consumer Data Protection Act',
    },
    {
      year: 'Jun 2023',
      region: 'Colorado',
      title: 'CPA',
      description: 'Colorado Privacy Act',
    },
    {
      year: 'Jul 2023',
      region: 'Connecticut',
      title: 'CTDPA',
      description: 'Connecticut Data Privacy Act',
    },
    {
      year: 'Jan 2024',
      region: 'Utah',
      title: 'UCPA',
      description: 'Utah Consumer Privacy Act',
    },
    {
        year: '2025-',
        region: 'United States',
        title: 'State Privacy Laws',
      description: 'Multiple states implementing comprehensive privacy laws.',
    }
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
            '&::after': {
              content: '""',
              position: 'absolute',
              left: { xs: '20px', md: '50%' },
              transform: { xs: 'none', md: 'translateX(-50%)' },
              top: 0,
              bottom: 0,
              width: '2px',
              backgroundColor: 'primary.main',
              opacity: 0.2,
              zIndex: 0,
            },
          }}
        >
          {events.map((event, index) => (
            <TimelineEvent key={index} {...event} index={index} />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default TimelineSection;