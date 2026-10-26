class Event {
  constructor(id, name, capacity, ticketTiers = []) {
    this.id = id;
    this.name = name;
    this.capacity = capacity;
    this.ticketTiers = ticketTiers;
    this.bookedSeats = 0;
  }

  hasCapacity() {
    return this.bookedSeats < this.capacity;
  }

  bookSeat() {
    if (!this.hasCapacity()) {
      throw new Error("Event is sold out.");
    }

    this.bookedSeats++;
  }

  cancelSeat() {
    if (this.bookedSeats > 0) {
      this.bookedSeats--;
    }
  }

  getAvailableSeats() {
    return this.capacity - this.bookedSeats;
  }
}

module.exports = Event;