let data = [1, 2, 3, 4, 5];

function forLoop(list) {
  let sum = 0;
  for (const i of list) {
    sum += i;
  }
  return sum;
}

console.log(forLoop(data));