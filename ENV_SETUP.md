# Environment Variables Setup Guide

This document explains all environment variables used in the Barotse Highway Limited website.

## Required Variables

### NEXT_PUBLIC_SITE_URL

- **Description**: The full URL of your website
- **Development**: `http://localhost:3000`
- **Production**: `https://barotsehighway.com`
- **Used for**: SEO metadata, canonical URLs, Open Graph tags

### NEXT_PUBLIC_SITE_NAME

- **Description**: The name of your website/company
- **Value**: `Barotse Highway Limited`
- **Used for**: SEO metadata, structured data

## Optional Variables

### Image Optimization (Cloudinary)

#### CLOUDINARY_CLOUD_NAME

- **Description**: Your Cloudinary cloud name for image optimization
- **How to get**: Sign up at https://cloudinary.com
- **Used for**: Optimized image delivery

#### NEXT_PUBLIC_CLOUDINARY_URL

- **Description**: Your Cloudinary base URL
- **Format**: `https://res.cloudinary.com/YOUR_CLOUD_NAME`
- **Used for**: Image transformations and optimization

### Analytics

#### NEXT_PUBLIC_GA_MEASUREMENT_ID

- **Description**: Google Analytics 4 Measurement ID
- **Format**: `G-XXXXXXXXXX`
- **How to get**: Create a GA4 property at https://analytics.google.com
- **Used for**: Website traffic analytics

#### NEXT_PUBLIC_GTM_ID

- **Description**: Google Tag Manager Container ID
- **Format**: `GTM-XXXXXXX`
- **How to get**: Create a container at https://tagmanager.google.com
- **Used for**: Managing marketing tags

### Contact Form Email

#### SMTP_HOST

- **Description**: SMTP server hostname
- **Example**: `smtp.gmail.com` (for Gmail)
- **Used for**: Sending contact form emails

#### SMTP_PORT

- **Description**: SMTP server port
- **Common values**: `587` (TLS) or `465` (SSL)
- **Used for**: Email server connection

#### SMTP_USER

- **Description**: Email account username
- **Example**: `your-email@gmail.com`
- **Used for**: SMTP authentication

#### SMTP_PASSWORD

- **Description**: Email account password or app-specific password
- **Note**: For Gmail, use an App Password (not your regular password)
- **How to get**: https://support.google.com/accounts/answer/185833
- **Used for**: SMTP authentication

#### CONTACT_EMAIL

- **Description**: Email address to receive contact form submissions
- **Example**: `info@barotsehighway.com`
- **Used for**: Contact form destination

## Setup Instructions

### Development

1. Copy `.env.example` to `.env.local`:
   \`\`\`bash
   cp .env.example .env.local
   \`\`\`

2. Update the required variables in `.env.local`:
   \`\`\`bash
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   NEXT_PUBLIC_SITE_NAME=Barotse Highway Limited
   \`\`\`

3. Add optional variables as needed

4. Restart your development server:
   \`\`\`bash
   npm run dev
   \`\`\`

### Production (Vercel)

1. Go to your Vercel project settings
2. Navigate to "Environment Variables"
3. Add each variable with its production value:
   - `NEXT_PUBLIC_SITE_URL` → `https://barotsehighway.com`
   - `NEXT_PUBLIC_SITE_NAME` → `Barotse Highway Limited`
   - Add other variables as needed

4. Redeploy your application

## Security Notes

- **Never commit `.env.local`** to version control (it's in `.gitignore`)
- **Use `NEXT_PUBLIC_` prefix** only for variables that should be exposed to the browser
- **Keep sensitive keys** (API keys, passwords) without the `NEXT_PUBLIC_` prefix
- **Use different values** for development and production environments
- **Rotate credentials** regularly for security

## Troubleshooting

### Variables not loading

- Ensure variable names are correct (case-sensitive)
- Restart the development server after changing `.env.local`
- Check that `.env.local` is in the root directory

### Production variables not working

- Verify variables are set in Vercel dashboard
- Ensure you've redeployed after adding variables
- Check variable names match exactly (including `NEXT_PUBLIC_` prefix)

## Additional Resources

- [Next.js Environment Variables](https://nextjs.org/docs/basic-features/environment-variables)
- [Vercel Environment Variables](https://vercel.com/docs/concepts/projects/environment-variables)
