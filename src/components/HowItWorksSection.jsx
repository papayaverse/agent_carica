import React from 'react';
import { Box, Container, Typography, Stack, Card, CardContent } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ProcessStep = ({ icon, title, description, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Card
      component={motion.div}
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      sx={{
        backgroundColor: 'background.paper',
        position: 'relative',
        overflow: 'visible',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: '50%',
          [index === 2 ? 'display' : 'right']: 'none',
          left: index === 0 ? 'auto' : '-30px',
          width: '30px',
          height: '2px',
          backgroundColor: 'primary.main',
          display: { xs: 'none', md: 'block' },
        },
      }}
    >
      <CardContent sx={{ p: 4 }}>
        <Stack spacing={2} alignItems="center" textAlign="center">
          <Typography
            variant="h1"
            component="div"
            sx={{ fontSize: '2.5rem', color: 'primary.main' }}
          >
            {icon}
          </Typography>
          <Typography variant="h6" component="h3">
            {title}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {description}
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
};

const HowItWorksSection = () => {
  const steps = [
    {
      icon: '🕵️',
      title: 'AI Analysis',
      description: 'Our AI agent crawls and analyzes your site for compliance issues',
    },
    {
      icon: '📊',
      title: 'Risk Assessment',
      description: 'Identifies dark patterns and potential compliance risks',
    },
    {
      icon: '📥',
      title: 'Actionable Report',
      description: 'Receive a detailed, tailored report with specific recommendations',
    },
  ];

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: 'background.paper',
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
            How It Works
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
            Simple three-step process to ensure your website's compliance
          </Typography>
        </Box>

        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={4}
          alignItems="stretch"
          justifyContent="center"
        >
          {steps.map((step, index) => (
            <Box key={index} sx={{ flex: 1 }}>
              <ProcessStep {...step} index={index} />
            </Box>
          ))}
        </Stack>
      </Container>
    </Box>
  );
};

export default HowItWorksSection;