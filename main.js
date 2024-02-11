function sortList(arr = []) {
  const newArr = JSON.parse(JSON.stringify(arr));
  return newArr.sort();
}

const arr1 = [4, 2, 1, 7];

const sortedArr1 = sortList(arr1);

console.log(sortedArr1);
