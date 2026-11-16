const express = require("express");

const router = express.Router();

const bookingService =
  require("../services/BookingService");

router.post("/", async (req, res) => {
  try {
    const booking =
      await bookingService.createBooking(
        req.body
      );

    res.status(201).json(booking);
  } catch (error) {
    res.status(400).json({
      error: error.message
    });
  }
});

router.get("/", async (req, res) => {
  const bookings =
    await bookingService.getBookings();

  res.json(bookings);
});

router.patch("/:id/pay", async (req, res) => {
  try {
    const booking =
      await bookingService.payBooking(
        req.params.id
      );

    res.json(booking);
  } catch (error) {
    res.status(404).json({
      error: error.message
    });
  }
});

router.patch("/:id/cancel", async (req, res) => {
  try {
    const booking =
      await bookingService.cancelBooking(
        req.params.id
      );

    res.json(booking);
  } catch (error) {
    res.status(400).json({
      error: error.message
    });
  }
});

module.exports = router;