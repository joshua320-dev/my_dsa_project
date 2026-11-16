const express = require("express");
const path = require("path");

const app = express();

const eventRoutes = require("./routes/events");
const bookingRoutes = require("./routes/bookings");

app.use(express.json());

app.use(
  express.static(
    path.join(__dirname, "../public")
  )
);

app.use("/events", eventRoutes);

app.use("/bookings", bookingRoutes);

app.get("/health", (req, res) => {
  res.json({
    status: "healthy",
  });
});

const PORT = 3000;

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = app;