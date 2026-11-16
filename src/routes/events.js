const express = require("express");

const router = express.Router();

const eventService =
  require("../services/EventService");

router.post(
  "/",
  async (req, res) => {
    try {
      const event =
        await eventService.createEvent(
          req.body
        );

      res.status(201).json(event);
    } catch (error) {
      res.status(400).json({
        error: error.message,
      });
    }
  }
);

router.get(
  "/",
  async (req, res) => {
    const events =
      await eventService.getEvents();

    res.json(events);
  }
);

module.exports = router;
router.patch("/:id/publish", async (req, res) => {
  try {
    const event =
      await eventService.publishEvent(
        req.params.id
      );

    res.json(event);
  } catch (error) {
    res.status(404).json({
      error: error.message
    });
  }
});
router.get("/search", async (req, res) => {
  const { city } = req.query;

  const events =
    await eventService.getEvents();

  const results = events.filter(
    event =>
      event.city.toLowerCase() ===
      city.toLowerCase()
  );

  res.json(results);
});
router.post("/:id/tiers", async (req, res) => {
  try {
    const event =
      await eventService.addTier(
        req.params.id,
        req.body
      );

    res.json(event);
  } catch (error) {
    res.status(404).json({
      error: error.message
    });
  }
});

module.exports = router;