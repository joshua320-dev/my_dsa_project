const events = require("../data/events");

class EventService {
  async createEvent(eventData) {
    const event = {
      id: Date.now().toString(),
      published: false,
      tiers: [],
      ...eventData,
    };

    events.push(event);

    return event;
  }

  async getEvents() {
    return events;
  }

  async publishEvent(id) {
    const event = events.find(
      event => event.id === id
    );

    if (!event) {
      throw new Error("Event not found");
    }

    event.published = true;

    return event;
  }

  async addTier(id, tier) {
    const event = events.find(
      event => event.id === id
    );

    if (!event) {
      throw new Error("Event not found");
    }

    event.tiers.push(tier);

    return event;
  }
}

module.exports = new EventService();