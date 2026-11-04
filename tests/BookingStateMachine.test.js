const BookingStateMachine =
  require("../src/BookingStateMachine");

describe("Booking State Machine", () => {
  test("allows valid transitions", () => {
    const machine =
      new BookingStateMachine();

    expect(
      machine.transition(
        "PENDING",
        "PAID"
      )
    ).toBe("PAID");
  });

  test("rejects invalid transitions", () => {
    const machine =
      new BookingStateMachine();

    expect(() =>
      machine.transition(
        "CANCELLED",
        "PAID"
      )
    ).toThrow();
  });
});