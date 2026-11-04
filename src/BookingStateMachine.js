class BookingStateMachine {
  constructor() {
    this.states = {
      PENDING: ["PAID", "CANCELLED"],
      PAID: ["CHECKED_IN", "CANCELLED"],
      CHECKED_IN: [],
      CANCELLED: [],
    };
  }

  canTransition(from, to) {
    return this.states[from]?.includes(to);
  }

  transition(from, to) {
    if (!this.canTransition(from, to)) {
      throw new Error(
        `Invalid transition from ${from} to ${to}`
      );
    }

    return to;
  }
}

module.exports = BookingStateMachine;