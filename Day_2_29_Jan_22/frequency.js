function frequency(arr,left, right, query) {
  var count = 0;
  for (var j = left - 1; j < right; j++) {
    if (arr[j] === query) {
      count++;
    }
  }
  console.log(count);
}

function runProgram(input) {
  var input = input.trim().split("\n");
  var testCases = input[0].trim().split(" ").map(Number);
  var arr = input[1].trim().split(" ").map(Number);
  var line = 2;
  for (var i = 0; i < testCases[1]; i++) {
    var values = input[line++].trim().split(" ").map(Number);
    var left = values[0];
    var right = values[1];
    var query = values[2];
    frequency(arr, left, right, query)
  }
}
if (process.env.USERNAME === "akshra") {
  runProgram(`6 2
  1 5 3 2 3 2 
  3 6 2
  4 4 2
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
