PRODUCT BACKLOG

Story 1: Search Events by Name

As a customer,
I want to search events by name,
so that I can quickly find events I am interested in.

Acceptance Criteria

- Given a list of events
- When I enter a search term
- Then matching events are returned
- Search should be case-insensitive

--------------------------------------------------

Story 2: Filter Events by City

As a customer,
I want to filter events by city,
so that I can find events near me.

Acceptance Criteria

- Given events in multiple cities
- When I select a city
- Then only events from that city are returned

--------------------------------------------------

Story 3: Filter Events by Price

As a customer,
I want to filter events by maximum price,
so that I can stay within my budget.

Acceptance Criteria

- Given a list of events
- When I enter a maximum price
- Then only events with a price less than or equal to that amount are returned

--------------------------------------------------

Story 4: Filter Events by Date Range

As a customer,
I want to filter events by date range,
so that I can find events happening during a specific period.

Acceptance Criteria

- Given a list of events
- When I choose a start date and end date
- Then only events within that date range are returned

--------------------------------------------------

Story 5: Sort Events by Price

As a customer,
I want to sort events by price,
so that I can compare cheaper and more expensive events.

Acceptance Criteria

- Given a list of events
- When I sort by price
- Then events are displayed in ascending order
- The original event list remains unchanged

--------------------------------------------------

Story 6: Sort Events by Date

As a customer,
I want to sort events by date,
so that I can see upcoming events first.

Acceptance Criteria

- Given a list of events
- When I sort by date
- Then events are displayed in chronological order
- The original event list remains unchanged

--------------------------------------------------

Story 7: Sort Events by Availability

As a customer,
I want to sort events by availability,
so that I can easily find events with more remaining seats.

Acceptance Criteria

- Given a list of events
- When I sort by availability
- Then events are displayed based on remaining seats
- The original event list remains unchanged

--------------------------------------------------

Story 8: Automated Testing

As a developer,
I want automated tests for search and sorting features,
so that I can verify the application works correctly after changes.

Acceptance Criteria

- Given the test suite
- When I run npm test
- Then all tests pass successfully
- Search and sorting functionality are covered by tests

