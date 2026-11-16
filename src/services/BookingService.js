const bookings = require("../data/bookings");

class BookingService {
  async createBooking(data) {
    const booking = {
      id: Date.now().toString(),
      status: "PENDING",
      ...data
    };

    bookings.push(booking);

    return booking;
  }

  async payBooking(id) {
    const booking = bookings.find(
      booking => booking.id === id
    );

    if (!booking) {
      throw new Error("Booking not found");
    }

    booking.status = "PAID";

    return booking;
  }

  async cancelBooking(id) {
    const booking = bookings.find(
      booking => booking.id === id
    );

    if (!booking) {
      throw new Error("Booking not found");
    }

    if (booking.status === "PAID") {
      throw new Error(
        "Paid bookings cannot be cancelled"
      );
    }

    booking.status = "CANCELLED";

    return booking;
  }

  async getBookings() {
    return bookings;
  }
}

module.exports = new BookingService();