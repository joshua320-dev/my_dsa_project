const Event = require("./Event");
const BookingManager = require("./BookingManager");
const WaitlistQueue = require("./WaitlistQueue");

const event = new Event(
  1,
  "DSA Conference",
  2,
  ["Regular", "VIP"]
);

const bookings = new Map();

const waitlist = new WaitlistQueue();

const manager =
  new BookingManager(
    event,
    bookings,
    waitlist
  );

const booking1 =
  manager.bookTicket("Joshua");

const booking2 =
  manager.bookTicket("Mary");

manager.bookTicket("John");

manager.bookTicket("David");

console.log("\nAvailable Seats:");
console.log(event.getAvailableSeats());

console.log("\nCurrent Bookings:");
console.log(manager.listBookings());

console.log("\nCancel Booking:");
manager.cancelBooking(
  booking1.reference
);

console.log("\nWaitlist Size:");
console.log(waitlist.size());

console.log("\nLookup Booking:");

const found =
  manager.findBooking(
    booking2.reference
  );

console.log(found);
const mergeSort = require("./MergeSort");

const sortedByPrice = mergeSort(
  events,
  (a, b) => a.price - b.price
);

const sortedByDate = mergeSort(
  events,
  (a, b) => new Date(a.date) - new Date(b.date)
);

const sortedByAvailability = mergeSort(
  events,
  (a, b) =>
    (a.capacity - a.bookedSeats) -
    (b.capacity - b.bookedSeats)
);
console.log("\nSorted by Price:");
console.log(sortedByPrice);

console.log("\nSorted by Date:");
console.log(sortedByDate);

console.log("\nSorted by Availability:");
console.log(sortedByAvailability);
