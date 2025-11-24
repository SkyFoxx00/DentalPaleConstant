# Xcotic Dripz - Custom T-Shirt Studio

## Overview
Full-stack web application for Xcotic Dripz T-shirt design business with AI-powered design prompt generation, affiliate marketing tools, and live product integration.

## Project Structure
```
/
├── index.js              # Express backend server (port 3000)
├── client/               # React frontend (Vite)
│   ├── src/
│   │   ├── App.jsx       # Main React component
│   │   ├── App.css       # Styles
│   │   └── main.jsx      # React entry point
│   ├── index.html        # HTML template
│   ├── vite.config.js    # Vite configuration
│   └── package.json      # Client dependencies
└── package.json          # Server dependencies
```

## Features
1. **AI Design Prompt Generator** - Creates design prompts for t-shirt graphics
2. **Affiliate Deep Link Generator** - Generates CJ Affiliate tracking links
3. **Live Product Importer** - Fetches products from Spreadshop API

## Technology Stack
- **Frontend**: React 19, Vite 7, Axios
- **Backend**: Node.js, Express, CORS
- **API Integration**: Spreadshop API

## Configuration

### Spreadshop Integration
The app is configured to fetch products from:
`https://api.spreadshop.com/api/v1/shops/XcoticDripz/products`

**Note**: The Spreadshop shop needs to be properly configured. If you see errors loading products, verify:
- The shop name is correct
- The shop exists and is published on Spreadshop
- API access is enabled

To change the shop name, edit `index.js` line 11.

## Development
- Backend runs on port 3000
- Frontend runs on port 5000
- API proxy configured in Vite for `/api` routes

## Recent Changes
**2025-11-24**
- Initial project setup with Vite + React
- Configured Express backend with CORS
- Set up API endpoints for products, AI prompts, and deep links
- Configured workflow to run both frontend and backend
