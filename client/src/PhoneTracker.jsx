import React, { useState } from 'react';
import axios from 'axios';

function PhoneTracker() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleTrack = async () => {
    if (!phoneNumber) {
      alert('Please enter a phone number.');
      return;
    }
    setLoading(true);
    try {
      const { data } = await axios.post('/api/track-phone', { phoneNumber });
      setLocation(data);
    } catch (error) {
      console.error('Error tracking phone:', error);
      alert('Failed to track phone number.');
    }
    setLoading(false);
  };

  return (
    <div>
      <h2>Phone Tracker</h2>
      <p>Enter a phone number to simulate tracking its location.</p>
      <div style={{ marginBottom: '1rem' }}>
        <input
          type="text"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          placeholder="Enter phone number"
          style={{ marginRight: '0.5rem', padding: '0.5rem' }}
        />
        <button onClick={handleTrack} disabled={loading} style={{ padding: '0.5rem' }}>
          {loading ? 'Tracking...' : 'Track'}
        </button>
      </div>
      {location && (
        <div>
          <h3>Simulated Location:</h3>
          <p>Latitude: {location.lat.toFixed(6)}</p>
          <p>Longitude: {location.lng.toFixed(6)}</p>
          <div style={{ marginTop: '1rem', height: '400px', width: '100%' }}>
            <iframe
              width="100%"
              height="100%"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              src={`https://www.openstreetmap.org/export/embed.html?bbox=${location.lng-0.1},${location.lat-0.1},${location.lng+0.1},${location.lat+0.1}&layer=mapnik&marker=${location.lat},${location.lng}`}
              style={{ border: '1px solid black' }}
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
}

export default PhoneTracker;