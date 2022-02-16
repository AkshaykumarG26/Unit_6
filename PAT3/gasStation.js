function gasStation(n, gas, cost) {
  var start = 0;
  var fill = 0;
  var total = 0;
  for (var i = 0; i < n; i++) {
    total = total + gas[i] - cost[i];
    if (total < 0) {
      fill = fill + total;
      total = 0;
      start = i + 1;
    }
  }
  if (total + fill >= 0) {
    console.log(start);
  } else {
    console.log(-1);
  }
}

function runProgram(input) {
  input = input.trim().split("\n");
  var n = +input[0];
  var gas = input[1].trim().split(" ").map(Number);
  var cost = input[2].trim().split(" ").map(Number);

  gasStation(n, gas, cost)
}
if (process.env.USERNAME === "akshra") {
  runProgram(`5
    1 2 3 4 5
    3 4 5 1 2`);
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
