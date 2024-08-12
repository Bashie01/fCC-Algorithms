
function mutation(arr) {
  const secondArr = arr[1].toLowerCase();
  const firstArr = arr[0].toLowerCase();

  for (let i = 0; i < secondArr.length; i++){
    if (firstArr.indexOf(secondArr[i]) < 0) return false;
  }
  return true;
}

mutation(["hello", "hey"]);