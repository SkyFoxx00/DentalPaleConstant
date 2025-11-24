import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);
  const [deepLink, setDeepLink] = useState('');
  const [form, setForm] = useState({ baseLink: '', affiliateId: '', campaign: '' });
  const [idea, setIdea] = useState('');
  const [prompt, setPrompt] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/api/products').then(res => setProducts(res.data.products || []));
  }, []);

  const generateDeepLink = async () => {
    const { data } = await axios.post('http://localhost:5000/api/deeplink', form);
    setDeepLink(data.deepLink);
  };

  const generatePrompt = async () => {
    const { data } = await axios.post('http://localhost:5000/api/ai/prompt', { idea });
    setPrompt(data.prompt);
  };

  return (
    <div className="app">
      <h1>🩶 Xcotic Dripz — Custom T-Shirt Studio</h1>

      <section className="ai-section">
        <h2>AI Design Prompt Generator</h2>
        <input
          placeholder="Describe your design idea (e.g., neon skull, retro sunset)"
          value={idea}
          onChange={(e) => setIdea(e.target.value)}
        />
        <button onClick={generatePrompt}>Generate Prompt</button>
        {prompt && (
          <div className="prompt-box">
            <strong>Prompt:</strong> {prompt}
          </div>
        )}
      </section>

      <section>
        <h2>Affiliate Deep Link Generator</h2>
        <input placeholder="Base Link" onChange={e => setForm({ ...form, baseLink: e.target.value })} />
        <input placeholder="Affiliate ID" onChange={e => setForm({ ...form, affiliateId: e.target.value })} />
        <input placeholder="Campaign" onChange={e => setForm({ ...form, campaign: e.target.value })} />
        <button onClick={generateDeepLink}>Generate</button>
        <p>{deepLink}</p>
      </section>

      <section>
        <h2>Available T-Shirts</h2>
        <div className="product-grid">
          {products.map((p) => (
            <div className="product-card" key={p.id}>
              <img src={p.previewUrl} alt="product" />
              <p>{p.name}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;