const request = require("supertest");
const app = require("../src/server");

describe("API Tests", () => {
  test("GET /health returns healthy status", async () => {
    const response = await request(app)
      .get("/health");

    expect(response.status).toBe(200);

    expect(response.body).toEqual({
      status: "healthy",
    });
  });

  test("POST /events creates an event", async () => {
    const response = await request(app)
      .post("/events")
      .send({
        name: "Tech Conference",
        city: "Lagos",
        price: 5000,
      });

    expect(response.status).toBe(201);

    expect(response.body.name)
      .toBe("Tech Conference");
  });
});