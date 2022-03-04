function flowerManagement(arr, n, x) {
  let flag = true;
  let num = 0;
  for (let i = 0; i < n; i++) {
    if (arr[i] === 1) {
      flag = false;
    } else if (arr[i] === 0 && !flag) {
      flag = true;
    } else if (arr[i] === 0 && flag && (i === n - 1 || arr[i + 1] === 0)) {
      num++;
      flag = false;
    }
    if (num >= x) {
      return true;
    }
  }
  return false;
}

function runProgram(input) {
  input = input.trim().split("\n");
  var testCases = +input[0];
  var line = 1;
  for (var i = 0; i < testCases; i++) {
    var [n, x] = input[line++].trim().split(" ").map(Number);
    var arr = input[line++].trim().split(" ").map(Number);
    if (flowerManagement(arr, n, x)) {
      console.log("Yes");
    } else {
      console.log("No");
    }
  }
}

if (process.env.USERNAME === "akshra") {
  runProgram(`1
    5 1
    1 0 0 0 1`);
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
