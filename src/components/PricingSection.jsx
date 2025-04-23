import React from 'react';
import { Box, Container, Typography, Card, CardContent, Stack, Button } from '@mui/material';
import { motion } from 'framer-motion';

const PricingCard = ({ title, price, features, popular, enterprise, buttonText = 'Get Started', onButtonClick }) => (
  <Card
    component={motion.div}
    whileHover={{ y: -8, boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)' }}
    transition={{ type: 'spring', stiffness: 300 }}
    sx={{
      position: 'relative',
      overflow: 'visible',
      backgroundColor: popular ? 'primary.dark' : 'background.paper',
      color: popular ? 'white' : 'text.primary',
      border: popular ? 'none' : '1px solid',
      borderColor: 'divider',
    }}
  >
    {(popular || enterprise) && (
      <Box
        sx={{
          position: 'absolute',
          top: -12,
          right: 12,
          backgroundColor: popular ? 'secondary.dark' : 'primary.dark',
          color: 'white',
          px: 2,
          py: 0.5,
          borderRadius: '16px',
          fontSize: '0.875rem',
          fontWeight: 600,
        }}
      >
        {popular ? 'Most Popular' : 'Best Value'}
      </Box>
    )}
    <CardContent sx={{ p: 4 }}>
      <Typography variant="h3" component="h2" gutterBottom>
        {title}
      </Typography>
      <Typography variant="h2" component="p" gutterBottom sx={{ display: 'flex', alignItems: 'baseline' }}>
        {price}
        {!enterprise && <Typography component="span" sx={{ ml: 1 }}>/{price.includes('month') ? 'month' : 'one-time'}</Typography>}
      </Typography>
      <Stack spacing={2} sx={{ mt: 4, mb: 4 }}>
        {features.map((feature, index) => (
          <Typography
            key={index}
            variant="body1"
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              color: popular ? 'white' : 'text.primary',
              fontWeight: 500,
            }}
          >
            {feature}
          </Typography>
        ))}
      </Stack>
      <Button
        variant={popular ? 'contained' : 'outlined'}
        fullWidth
        size="large"
        onClick={onButtonClick}
        sx={{
          mt: 2,
          backgroundColor: popular ? 'white' : undefined,
          color: popular ? 'primary.main' : undefined,
          '&:hover': {
            backgroundColor: popular ? 'rgba(255, 255, 255, 0.9)' : undefined,
          },
        }}
      >
        {buttonText}
      </Button>
    </CardContent>
  </Card>
);

const PricingSection = () => {
  const handleGetStarted = () => {
    const contactSection = document.querySelector('#contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const pricingPlans = [
    {
      title: 'Basic Compliance Scan',
      price: '$99',
      features: [
        '💰 One-time scan of your domain',
        '📋 PDF report for GDPR, CCPA, WCAG, ADA compliance'
      ],
    },
    {
      title: 'Starter Plan',
      price: '$49/month',
      features: [
        '🔁 Monthly reports for 1 domain',
        '🛠️ AI-powered cookie banner, GPC, and accessibility audit',
        '🔍 Summary of violations with recommendations'
      ],
      popular: true,
    },
    {
      title: 'Enterprise Plan',
      price: '$7,500/month',
      features: [
        '📊 Reports for up to 7500 domains',
        '🤝 White-glove onboarding & API access',
        '🗂️ Dedicated audit logs for privacy/legal teams',
        '📞 Quarterly compliance consultation'
      ],
      enterprise: true,
    },
  ];

  return (
    <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: 'background.default' }}>
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          component="h2"
          textAlign="center"
          gutterBottom
          sx={{ mb: 6 }}
        >
          Pricing Plans
        </Typography>
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={4}
          alignItems="stretch"
          justifyContent="center"
        >
          {pricingPlans.map((plan, index) => (
            <Box
              key={index}
              sx={{ flex: 1, maxWidth: { xs: '100%', md: '360px' } }}
              component={motion.div}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <PricingCard {...plan} onButtonClick={handleGetStarted} />
            </Box>
          ))}
        </Stack>
      </Container>
    </Box>
  );
};

export default PricingSection;