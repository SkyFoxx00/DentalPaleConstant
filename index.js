const express = require('express');
const axios = require('axios');
const cors = require('cors');
const { parsePhoneNumber } = require('libphonenumber-js');
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

// Phone number geolocation endpoint
app.post('/api/geolocation', (req, res) => {
  const { phoneNumber } = req.body;
  try {
    const parsed = parsePhoneNumber(phoneNumber);
    res.json({ country: parsed.country });
  } catch (err) {
    res.status(400).json({ error: 'Invalid phone number' });
  }
});

app.listen(3000, () => console.log('Server running on port 3000'));
