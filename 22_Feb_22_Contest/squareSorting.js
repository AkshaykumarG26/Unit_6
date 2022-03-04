function squareSorting(arr, n){
for (var i = 0; i < n; i++) {
  for (var j = 0; j < n - 1; j++) {
    if (arr[j] * 2 > arr[j + 1] * 2) {
      var temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
    }
  }
}
console.log(arr.join(" "));
}

function findans(n, arr) {
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n - 1; j++) {
      if (arr[j] * 2 > arr[j + 1] * 2) {
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  console.log(arr.join(" "));
}

function runProgram(input) {
  var input = input.trim().split("\n");
  var testCases = +input[0];
  var line = 1;
  for (var k = 0; k < testCases; k++) {
    var n = +input[line++];
    console.log(n)
    var arr = input[line++].trim().split(" ").map(Number);
    console.log(arr)
    // squareSorting(arr, n)
    findans(n, arr)
  }
}
if (process.env.USERNAME === "akshra") {
  runProgram(`1
5
-2 3 1 -4 6
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
