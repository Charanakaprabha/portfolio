import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Logger middleware
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} request to ${req.url}`);
  next();
});

// Contact endpoint
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      error: 'Missing required payload parameters: name, email, and message are required.'
    });
  }

  // Simulated DB save and email dispatch
  console.log('--- RECEIVED CONTACT TRANSMISSION ---');
  console.log(`Sender: ${name} <${email}>`);
  console.log(`Message: ${message}`);
  console.log('------------------------------------');

  return res.status(200).json({
    success: true,
    message: 'Transmission decrypted and saved in core archives.',
    timestamp: new Date().toISOString(),
    deliveryId: Math.random().toString(36).substring(2, 11).toUpperCase()
  });
});

// Health check
app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'ONLINE',
    uptime: process.uptime(),
    memoryUsage: process.memoryUsage(),
  });
});

app.listen(PORT, () => {
  console.log(`[SYSTEM] Tron Mail Gateway running on port ${PORT}`);
});
