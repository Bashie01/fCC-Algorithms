function largestOfFour(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    let subArr = arr[i];
    let largestNum = Math.max(...subArr);
    result.push(largestNum);
  }
  return result
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

