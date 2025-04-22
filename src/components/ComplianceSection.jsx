import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, Button } from '@mui/material';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const FineCard = ({ company, amount, description }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 },
      });
    }
  }, [controls, inView]);

  return (
    <Card
      component={motion.div}
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
      whileHover={{ scale: 1.02 }}
      sx={{
        height: '100%',
        backgroundColor: 'background.paper',
        transition: 'transform 0.2s',
      }}
    >
      <CardContent sx={{ p: 3 }}>
        <Typography variant="h3" component="h3" gutterBottom color="primary">
          {amount}
        </Typography>
        <Typography variant="h6" gutterBottom color="text.primary">
          {company}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

const ComplianceSection = () => {
  const fines = [
    {
      company: 'Sephora',
      amount: '$1.2M',
      description: 'CCPA Violation',
    },
    {
      company: 'DoorDash',
      amount: '$400K+',
      description: 'CCPA Violation',
    },
    {
      company: 'Honda',
      amount: '$600K+',
      description: 'CCPA Violation',
    },
    {
      company: 'Amazon Europe',
      amount: '€35M',
      description: 'GDPR: Cookies Violation',
    },
    {
      company: 'Carrefour',
      amount: '€3.4M',
      description: 'GDPR Violation',
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
            Non-Compliance Is Expensive
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
            Companies are already being penalized for ignoring privacy and accessibility laws.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {fines.map((fine, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <FineCard {...fine} />
            </Grid>
          ))}
        </Grid>

        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          sx={{ textAlign: 'center', mt: 8 }}
        >
          <Button
            variant="contained"
            size="large"
            color="primary"
            sx={{
              px: 4,
              py: 2,
              fontSize: '1.125rem',
            }}
          >
            Protect Your Business Now
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default ComplianceSection;