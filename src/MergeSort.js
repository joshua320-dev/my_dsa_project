function merge(left, right, compareFn) {
  const result = [];

  let i = 0;
  let j = 0;

  while (
    i < left.length &&
    j < right.length
  ) {
    if (
      compareFn(left[i], right[j]) <= 0
    ) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  return result
    .concat(left.slice(i))
    .concat(right.slice(j));
}

function mergeSort(
  array,
  compareFn
) {
  if (array.length <= 1) {
    return [...array];
  }

  const middle = Math.floor(
    array.length / 2
  );

  const left = mergeSort(
    array.slice(0, middle),
    compareFn
  );

  const right = mergeSort(
    array.slice(middle),
    compareFn
  );

  return merge(left, right, compareFn);
}

module.exports = mergeSort;