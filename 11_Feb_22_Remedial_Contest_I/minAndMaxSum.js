function newsort(arr) {
  for (var i = 0; i < arr.length; ++i) {
    var min = i;
    for (var j = i; j < arr.length; ++j) {
      if (arr[min] > arr[j]) {
        min = j;
      }
    }

    var temp = arr[min];
    arr[min] = arr[i];
    arr[i] = temp;
  }
  return arr;
}


function minMax(array, n) {
  var maxValue = 0;
  var minValue = 0
  var arr = newsort(array);
//   console.log("arr-", arr);

  for (var i = 0, j = n - 1; i < n - 1; i++, j--) {
    maxValue += arr[j];
    minValue += arr[i]
  }

  console.log(maxValue - minValue);
}


function runProgram(input) {
  input = input.trim().split("\n");
  //   console.log(input)

  var testCases = +input[0]
  var line = 1;
  for (var i = 0; i < testCases; i++){
      var [n, minValue] = input[line++].trim().split(" ").map(Number)
      var array = input[line++].trim().split(" ").map(Number);

      minMax(array, n)
  }

}

if (process.env.USERNAME === "akshra") {
  runProgram(`1
5 1
1 2 3 4 5`);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}

