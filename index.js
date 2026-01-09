const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

// Fetch products from Spreadshop
app.get('/api/products', async (req, res) => {
  try {
    const { data } = await axios.get('https://api.spreadshop.com/api/v1/shops/XcoticDripz/products');
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: 'Pull failed' });
  }
});

// CJ Affiliate Deep Link Generator
app.post('/api/deeplink', (req, res) => {
  const { baseLink, affiliateId, campaign } = req.body;
  const deepLink = `${baseLink}?sid=${campaign}&aid=${affiliateId}`;
  res.json({ deepLink });
});

// AI prompt generator endpoint
app.post('/api/ai/prompt', (req, res) => {
  const { idea } = req.body;
  const prompt = `Design a t-shirt graphic for "${idea}" — modern, streetwear aesthetic, bold typography, minimalist vector art.`;
  res.json({ prompt });
});

// Phone tracker endpoint
app.post('/api/track-phone', (req, res) => {
  // Simulate tracking a phone number and return a random coordinate
  const lat = Math.random() * 180 - 90;
  const lng = Math.random() * 360 - 180;
  res.json({ lat, lng });
});

app.listen(3000, () => console.log('Server running on port 3000'));