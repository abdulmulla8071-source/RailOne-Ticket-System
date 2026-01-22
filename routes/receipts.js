const express = require('express');
const router = express.Router();
const Receipt = require('../models/Receipt');

// SAVE RECEIPT
router.post('/api/receipts', async (req, res) => {
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
    res.status(201).json({
      message: "Receipt saved successfully",
      receipt: savedReceipt
    });

  } catch (err) {
    console.error("Error saving receipt:", err);
    res.status(500).json({
      message: "Error saving receipt",
      error: err.message
    });
  }
});

// GET ALL RECEIPTS (FOR HISTORY PAGE)
router.get('/api/receipts', async (req, res) => {
  try {
    const receipts = await Receipt.find().sort({ createdAt: -1 });
    res.json(receipts);
  } catch (err) {
    console.error("Error fetching receipts:", err);
    res.status(500).json({ message: "Error fetching history" });
  }
});
module.exports = router;