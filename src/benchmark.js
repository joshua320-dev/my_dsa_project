const SIZE = 100000;

const array = [];
const map = new Map();

for (let i = 0; i < SIZE; i++) {
  const record = {
    id: i,
    name: `User${i}`
  };

  array.push(record);
  map.set(i, record);
}

const target = SIZE - 1;

console.time("Array.find");

array.find(
  person => person.id === target
);

console.timeEnd("Array.find");

console.time("Map.get");

map.get(target);

console.timeEnd("Map.get");