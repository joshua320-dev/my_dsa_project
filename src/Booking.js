class Booking {
  constructor(reference, customerName, eventId, ticketTier) {
    this.reference = reference;
    this.customerName = customerName;
    this.eventId = eventId;
    this.ticketTier = ticketTier;
  }
}

module.exports = Booking;