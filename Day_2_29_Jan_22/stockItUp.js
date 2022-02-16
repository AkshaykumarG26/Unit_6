function stockItUp(N, arr) {
  var result =
    N *
    (arr[0] * 550 +
      arr[1] * 240 +
      arr[2] * 84 +
      arr[3] * 159 +
      arr[4] * 80 +
      arr[5] * 160 +
      arr[6] * 252);
  console.log(result);
}

function runProgram(input) {
  input = input.trim().split("\n");
  var N = +input[0];
  var arr = input[1].trim().split(" ").map(Number);
  stockItUp(N,arr)
}
if (process.env.USERNAME === "akshra") {
  runProgram(`4
    0 1 1 1 0 0 1`);
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
