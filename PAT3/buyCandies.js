const combinationSum = (arr, target) => {
  let temp = [];
  let result = [];
  let sum = 0;
  let index = 0;

  const backtrack = (temp, sum, index) => {
    if (sum > target) {
      return;
    }

    if (sum === target) {
      result.push([...temp]);
      return;
    }

    for (let i = index; i < arr.length; i++) {
      temp.push(arr[i]);
      backtrack(temp, sum + arr[i], i);
      temp.pop();
    }
  };

  backtrack(temp, sum, index);

  return result;
};
