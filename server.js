require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

// MongoDB connection
mongoose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/railone', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ MongoDB Connected Successfully!'))
.catch(err => {
  console.error('❌ MongoDB Connection Failed!');
  console.error(err.message);
  process.exit(1);
});

// Routes
const authRoutes = require('./routes/auth');
app.use('/api', authRoutes);

const bookingsRoutes = require('./routes/bookings');
app.use('/api/bookings', bookingsRoutes);

// ✅ HISTORY FIX — YOU WERE MISSING THIS IMPORT
const Receipt = require('./models/Receipt');

// Your existing receipts route file
const receiptsRoutes = require('./routes/receipts');
app.use('/', receiptsRoutes);

// Your existing save receipt route (kept same)
app.post('/api/receipts', async (req, res) => {
  try {
    const newReceipt = new Receipt({
      platformTicket: req.body.platformTicket,
      ticketNo: req.body.ticketNo,
      station: req.body.station,
      noOfPersons: req.body.noOfPersons,
      validFor: req.body.validFor,
      bookingTime: req.body.bookingTime,
      bookingDate: req.body.bookingDate
    });

    const savedReceipt = await newReceipt.save();
    res.status(201).json({ message: 'Receipt saved successfully', receipt: savedReceipt });
  } catch (err) {
    console.error('❌ Error saving receipt:', err);
    res.status(500).json({ message: 'Error saving receipt', error: err.message });
  }
});

// Pages
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'sign-in.html'));
});

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

app.get('/fare', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'fare.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
