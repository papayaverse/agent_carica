import React from 'react';
import { Box, Container, Typography, TextField, Button, Stack, MenuItem } from '@mui/material';
import { motion } from 'framer-motion';

const ContactSection = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    company: '',
    website: '',
    plan: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const subject = `Demo Request from ${formData.company}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company}\nWebsite: ${formData.website}\nPlan: ${formData.plan}`;
    window.location.href = `mailto:ram@papayaverse.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <Box
      component="section"
      id="contact-section"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: 'background.paper',
      }}
    >
      <Container maxWidth="md">
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Typography
            variant="h2"
            component="h2"
            textAlign="center"
            gutterBottom
          >
            Request a Demo
          </Typography>
          <Typography
            variant="h5"
            color="text.secondary"
            textAlign="center"
            sx={{ mb: 6 }}
          >
            See how Carica can help protect your business
          </Typography>

          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              backgroundColor: 'background.default',
              p: { xs: 3, md: 6 },
              borderRadius: 2,
              boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
            }}
          >
            <Stack spacing={3}>
              <TextField
                fullWidth
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                variant="outlined"
              />
              <TextField
                fullWidth
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                variant="outlined"
              />
              <TextField
                fullWidth
                label="Company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                required
                variant="outlined"
              />
              <TextField
                fullWidth
                label="Website"
                name="website"
                type="url"
                value={formData.website}
                onChange={handleChange}
                required
                variant="outlined"
              />
              <TextField
                fullWidth
                select
                label="Select Plan"
                name="plan"
                value={formData.plan}
                onChange={handleChange}
                required
                variant="outlined"
              >
                <MenuItem value="basic">Basic Compliance Scan</MenuItem>
                <MenuItem value="starter">Starter Plan</MenuItem>
                <MenuItem value="enterprise">Enterprise Plan</MenuItem>
              </TextField>
              <Button
                type="submit"
                variant="contained"
                size="large"
                sx={{
                  py: 2,
                  fontSize: '1.125rem',
                }}
              >
                Submit Request
              </Button>
            </Stack>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ContactSection;