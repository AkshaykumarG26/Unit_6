function maxApples(n, w, arr) {
  var sum = 0;
  var count = 0;
  for (var i = 0; i <= n; i++) {
    sum = sum + arr[i];
    if (sum <= w) {
      count++;
    }
    
  }

  // console.log(sum)

  console.log(count);
}

function runProgram(input) {
  input = input.trim().split("\n");
  //   console.log(input)
  var [n, w] = input[0].trim().split(" ").map(Number);
  var arr = input[1].trim().split(" ").map(Number);
  var arr = arr.sort(function (a, b) {
    return a - b;
  });
  // console.log(arr)
  maxApples(n, w, arr);
}

if (process.env.USERNAME === "akshra") {
  runProgram(`4 100
12 14 120 10`);
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
