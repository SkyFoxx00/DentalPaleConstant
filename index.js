const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

/**
 * @route GET /api/products
 * @description Fetch products from the Spreadshop API.
 * @returns {object} 200 - An object containing the product data.
 * @returns {object} 500 - An error object if the fetch fails.
 */
app.get('/api/products', async (req, res) => {
  try {
    const { data } = await axios.get('https://api.spreadshop.com/api/v1/shops/XcoticDripz/products');
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: 'Pull failed' });
  }
});

/**
 * @route POST /api/deeplink
 * @description Generate a CJ Affiliate deep link.
 * @param {object} req.body - The request body.
 * @param {string} req.body.baseLink - The base URL for the deep link.
 * @param {string} req.body.affiliateId - The affiliate ID.
 * @param {string} req.body.campaign - The campaign identifier.
 * @returns {object} 200 - An object containing the generated deep link.
 */
app.post('/api/deeplink', (req, res) => {
  const { baseLink, affiliateId, campaign } = req.body;
  const deepLink = `${baseLink}?sid=${campaign}&aid=${affiliateId}`;
  res.json({ deepLink });
});

/**
 * @route POST /api/ai/prompt
 * @description Generate an AI prompt for t-shirt design.
 * @param {object} req.body - The request body.
 * @param {string} req.body.idea - The user's design idea.
 * @returns {object} 200 - An object containing the generated prompt.
 */
app.post('/api/ai/prompt', (req, res) => {
  const { idea } = req.body;
  const prompt = `Design a t-shirt graphic for "${idea}" — modern, streetwear aesthetic, bold typography, minimalist vector art.`;
  res.json({ prompt });
});

app.listen(3000, () => console.log('Server running on port 3000'));