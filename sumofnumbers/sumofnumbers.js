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

function recursive(list) {
  const temp = [...list];
  if (temp.length === 0) {
    return 0;
  }
  return temp[0] + recursive(temp.splice(1));
}

function underscore(list) {
  return _.reduce(list, (temp, total) => temp + total, 0);
}

console.log(forLoop(data));
console.log(whileLoop(data));
console.log(recursive(data));
console.log(underscore(data));
