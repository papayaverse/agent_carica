# Deployment Guide

This React application is built with Vite and can be deployed to various hosting platforms. Here are the steps to deploy:

## Prerequisites
- Node.js installed
- npm (Node Package Manager)
- Git (optional, but recommended)

## Build Instructions
1. Install dependencies:
   ```bash
   npm install
   ```

2. Create production build:
   ```bash
   npm run build
   ```
   This will create a `dist` folder containing the production-ready files.

## Deployment Options

### 1. Netlify (Recommended)
1. Sign up for a free account at [Netlify](https://www.netlify.com)
2. Install Netlify CLI:
   ```bash
   npm install -g netlify-cli
   ```
3. Deploy:
   ```bash
   netlify deploy
   ```

### 2. Vercel
1. Sign up for a free account at [Vercel](https://vercel.com)
2. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```
3. Deploy:
   ```bash
   vercel
   ```

### 3. GitHub Pages
1. Add `base` configuration to `vite.config.js`:
   ```js
   export default defineConfig({
     base: '/your-repo-name/',
     // ... other config
   })
   ```
2. Create a new repository on GitHub
3. Push your code and enable GitHub Pages in repository settings

### 4. Static Hosting
Upload the contents of the `dist` folder to any static hosting service like:
- Amazon S3
- Google Cloud Storage
- Azure Static Web Apps

## Post-Deployment
- Set up a custom domain (if needed)
- Configure SSL certificate
- Set up CI/CD pipeline for automated deployments

## Environment Variables
If your application uses environment variables:
1. Create a `.env` file locally
2. Configure environment variables in your hosting platform's dashboard

## Support
For deployment issues:
- Check the hosting platform's documentation
- Review build logs for errors
- Ensure all dependencies are properly installed