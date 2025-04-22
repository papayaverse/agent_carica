import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const FeatureCard = ({ icon, title, description }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Card
      component={motion.div}
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      sx={{
        height: '100%',
        backgroundColor: 'background.paper',
        border: '1px solid',
        borderColor: 'divider',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: '0 12px 24px -10px rgba(0, 0, 0, 0.1)',
          transition: 'all 0.3s ease',
        },
      }}
    >
      <CardContent sx={{ p: 4 }}>
        <Typography
          variant="h1"
          component="div"
          sx={{ fontSize: '2.5rem', mb: 2 }}
        >
          {icon}
        </Typography>
        <Typography variant="h6" component="h3" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

const FeaturesSection = () => {
  const features = [
    {
      icon: '🤖',
      title: 'AI Agent Scanning',
      description: 'Advanced AI agents scan real sites and banners for compliance issues',
    },
    {
      icon: '🧑‍⚖️',
      title: 'Multi-Regulation Compliance',
      description: 'Comprehensive coverage of CCPA, GDPR, WCAG, and ADA requirements',
    },
    {
      icon: '🧩',
      title: 'Integration Ready',
      description: 'Seamless integration with OneTrust, TrustArc, and UserCentrics',
    },
    {
      icon: '🪪',
      title: 'GPC Signal Detection',
      description: 'Identifies ignored Global Privacy Control signals and hidden opt-outs',
    },
    {
      icon: '🧠',
      title: 'Proprietary Dataset',
      description: 'Leverages Papaya\'s extensive cookie banner dataset for accurate analysis',
    },
    {
      icon: '🧾',
      title: 'Automated Reporting',
      description: 'Auto-generates detailed compliance reports and audit logs',
    },
  ];

  return (
    <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: 'background.default' }}>
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
            Key Features
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
            Powerful tools to ensure your compliance with privacy and accessibility regulations
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <FeatureCard {...feature} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default FeaturesSection;