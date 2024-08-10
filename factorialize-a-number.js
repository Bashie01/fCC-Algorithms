function factorialize(num) {
  let returnNum = 1;
  for (let i = 1; i <= num; i++) {
    returnNum *= i;
  }
  return returnNum;
}
  


factorialize(5);