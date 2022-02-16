// function maxSubarrayProduct(arr, n) {
//   var result = arr[0];

//   for (var i = 0; i < n; i++) {
//     var product = arr[i];

//     for (var j = i + 1; j < n; j++) {
//       result = Math.max(result, product);
//       product *= arr[j];
//     }
//     result = Math.max(result, product);
//   }
//   return result;
// }

function maxProduct(arr) {
  var maxValue = arr[0];

  var minValue = arr[0];

  var finalMax = arr[0];

  for (var i = 1; i < arr.length; i++) {
    var temp = maxValue;

    maxValue = Math.max(
      Math.max(maxValue * arr[i], minValue * arr[i]),
      arr[i]
    );

    minValue = Math.min(
      Math.min(temp * arr[i], minValue * arr[i]),
      arr[i]
    );

    finalMax = Math.max(maxValue, finalMax);
  }

//   return finalMax;
console.log(finalMax)
}

function runProgram(input) {
  input = input.trim().split("\n");
  //   console.log(input)
  var testCases = +input[0];
  //   console.log(testCases);
  var line = 1;
  for (var i = 0; i < testCases; i++) {
    var n = +input[line++];
    var arr = input[line++].trim().split(" ").map(Number);
    //   console.log(n, arr)

    maxProduct(arr)
  }
}

if (process.env.USERNAME === "akshra") {
  runProgram(`2
3
-3 0 -2
4
4 5 -1 2
`);
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
