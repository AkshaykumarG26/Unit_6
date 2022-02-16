function highFrequency(n, arr) {
  if (n == 0) return null;

  var obj = {};
  var highElement = arr[0];
  var maxCount = 1;
  for (var i = 0; i < n; i++) {
    var el = arr[i];
    // console.log(el)
    if (obj[el] == null) {
      obj[el] = 1;
    } else {
      obj[el]++;
    }
    
    if (obj[el] > maxCount) {
      highElement = el;
      maxCount = obj[el];
    }
  }
  // console.log(obj)
  return highElement;
}

function runProgram(input) {
  input = input.trim().split("\n");
  var testCases = +input[0];
  var line = 1;
  var arr = [];
  for (var i = 0; i < testCases; i++) {
    var n = +input[line++];
    var arr = input[line++].trim().split(" ").map(Number);

    console.log(highFrequency(n, arr));
  }
}

if (process.env.USERNAME === "akshra") {
  runProgram(`2
6
1 4 4 4 5 3
11
1 2 3 4 5 4 3 2 1 3 4
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
