const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema({
  bookingDate: String,
  totalFare: Number,
  mobile: String,
  utsNo: String,
  fromStation: String,
  toStation: String,
  passengers: String,
  classType: String,
  trainType: String,
  sacNo: Number,
  irNo: String
});

module.exports = mongoose.model("Booking", BookingSchema);