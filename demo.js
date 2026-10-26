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