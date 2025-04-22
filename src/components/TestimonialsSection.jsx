import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, Avatar } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const TestimonialCard = ({ quote, author, role, company, index }) => {
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
      transition={{ duration: 0.5, delay: index * 0.2 }}
      sx={{
        height: '100%',
        backgroundColor: 'background.paper',
        '&:hover': {
          transform: 'translateY(-4px)',
          transition: 'transform 0.3s ease',
        },
      }}
    >
      <CardContent sx={{ p: 4 }}>
        <Typography
          variant="h1"
          component="div"
          sx={{ fontSize: '3rem', mb: 2, color: 'primary.main', opacity: 0.2 }}
        >
          "
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
          {quote}
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Avatar
            src={`https://ui-avatars.com/api/?name=${author}&background=random`}
            sx={{ width: 48, height: 48, mr: 2 }}
          />
          <Box>
            <Typography variant="subtitle1" fontWeight="bold">
              {author}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {role} at {company}
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

const testimonials = [
  {
    quote: "Papaya Privacy has transformed how we handle data privacy. Their solution is intuitive and comprehensive.",
    author: "Sarah Chen",
    role: "Privacy Officer",
    company: "TechCorp"
  },
  {
    quote: "The automated compliance features have saved us countless hours of manual work.",
    author: "Michael Rodriguez",
    role: "CTO",
    company: "DataSafe Solutions"
  },
  {
    quote: "Outstanding support team and regular updates keep us ahead of privacy regulations.",
    author: "Emma Thompson",
    role: "Legal Counsel",
    company: "Global Systems"
  }
];

const TestimonialsSection = () => {
  return (
    <Box component="section" sx={{ py: 8, backgroundColor: 'background.default' }}>
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          align="center"
          sx={{ mb: 6 }}
          component={motion.h2}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          What Our Clients Say
        </Typography>
        <Grid container spacing={4}>
          {testimonials.map((testimonial, index) => (
            <Grid item xs={12} md={4} key={index}>
              <TestimonialCard {...testimonial} index={index} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default TestimonialsSection;