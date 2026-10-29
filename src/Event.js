class Event {
  constructor(
    id,
    name,
    city,
    date,
    price,
    capacity
  ) {
    this.id = id;
    this.name = name;
    this.city = city;
    this.date = date;
    this.price = price;
    this.capacity = capacity;
    this.bookedSeats = 0;
  }

  hasCapacity() {
    return this.bookedSeats < this.capacity;
  }
}

module.exports = Event;