const data = [1, 2, 3, 4, 5];

function forLoop(list) {
  let sum = 0;
  for (const i of list) {
    sum += i;
  }
  return sum;
}

function whileLoop(list) {
  let sum = 0;
  let i = 0;
  while (i < list.length) {
    sum += list[i];
    i++;
  }
  return sum;
}

console.log(forLoop(data));
console.log(whileLoop(data));
