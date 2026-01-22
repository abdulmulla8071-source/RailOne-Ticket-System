const mongoose = require('mongoose');

const receiptSchema = new mongoose.Schema({
  platformTicket: String,
  ticketNo: String,
  station: String,
  noOfPersons: Number,
  validFor: String,
  bookingTime: String,
  bookingDate: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Receipt', receiptSchema);