const {
  searchByText,
  filterByCity
} = require("../src/EventSearch");

const events = [
  {
    name: "Tech Conference",
    city: "Lagos",
    price: 5000,
  },
  {
    name: "Music Festival",
    city: "Abuja",
    price: 10000,
  },
];

describe("Event Search", () => {
  test("searches by text", () => {
    const result = searchByText(
      events,
      "Tech"
    );

    expect(result.length).toBe(1);
  });

  test("filters by city", () => {
    const result = filterByCity(
      events,
      "Lagos"
    );

    expect(result.length).toBe(1);
  });
});