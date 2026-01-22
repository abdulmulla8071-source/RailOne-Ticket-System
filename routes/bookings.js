const express = require("express");
const router = express.Router();
const Booking = require("../models/Booking");

// POST route (existing)
router.post("/", async (req, res) => {
  try {
    console.log("📥 Data received from front-end:", req.body);

    const booking = new Booking(req.body);
    await booking.save();

    console.log("✅ Saved in MongoDB:", booking);
    res.json({ success: true });

  } catch (err) {
    console.error("❌ DB Error:", err);
    res.status(500).json({ success: false });
  }
});

// ✅ NEW GET route to fetch all bookings (for showticket.html)
router.get("/", async (req, res) => {
  try {
    const bookings = await Booking.find().sort({ bookingDate: -1 }); // newest first
    res.json(bookings);
  } catch (err) {
    console.error("❌ Error fetching bookings:", err);
    res.status(500).json({ message: "Error fetching bookings", error: err.message });
  }
});
module.exports = router;
