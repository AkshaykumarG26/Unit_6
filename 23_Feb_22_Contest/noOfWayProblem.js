function numberOfWayProblem(n) {
  if (n == 0) {
    return 1;
  } else if (n < 0) {
    return 0;
  } else 
    return (
      numberOfWayProblem(n - 3) +
      numberOfWayProblem(n - 2) +
      numberOfWayProblem(n - 1)
    );
  
}



function runProgram(input) {
  var input = +input;
  console.log(numberOfWayProblem(input))
}
if (process.env.USERNAME === "akshra") {
  runProgram(`4`);
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
