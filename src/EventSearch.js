function searchByText(events, text) {
  return events.filter(event =>
    event.name
      .toLowerCase()
      .includes(text.toLowerCase())
  );
}
function filterByCity(events, city) {
  return events.filter(
    event =>
      event.city.toLowerCase() ===
      city.toLowerCase()
  );
}
function filterByPrice(
  events,
  maxPrice
) {
  return events.filter(
    event => event.price <= maxPrice
  );
}
function filterByDateRange(
  events,
  startDate,
  endDate
) {
  return events.filter(event => {
    const date = new Date(event.date);

    return (
      date >= new Date(startDate) &&
      date <= new Date(endDate)
    );
  });
}
module.exports = {
  searchByText,
  filterByCity,
  filterByPrice,
  filterByDateRange
};