const Booking = require("./Booking");

class BookingManager {
  constructor(event, bookings, waitlist) {
    this.event = event;
    this.bookings = bookings;
    this.waitlist = waitlist;
  }

  bookTicket(customerName, ticketTier = "Regular") {
    try {
      this.event.bookSeat();

      const reference =
        "BK" + Math.floor(Math.random() * 1000000);

      const booking = new Booking(
        reference,
        customerName,
        this.event.id,
        ticketTier
      );

      this.bookings.set(reference, booking);

      console.log(
        `✅ ${customerName} booked successfully (${reference})`
      );

      return booking;
    } catch (error) {
      console.log(
        `❌ Event sold out. ${customerName} added to waitlist.`
      );

      this.waitlist.enqueue(customerName);

      return null;
    }
  }

  cancelBooking(reference) {
    const booking = this.bookings.get(reference);

    if (!booking) {
      throw new Error("Booking not found.");
    }

    this.bookings.delete(reference);

    this.event.cancelSeat();

    console.log(
      `🗑 Booking cancelled for ${booking.customerName}`
    );

    const nextPerson = this.waitlist.dequeue();

    if (nextPerson) {
      console.log(
        `➡ Next person in line: ${nextPerson}`
      );
    }
  }

  findBooking(reference) {
    return this.bookings.get(reference);
  }

  listBookings() {
    return [...this.bookings.values()];
  }
}

module.exports = BookingManager;