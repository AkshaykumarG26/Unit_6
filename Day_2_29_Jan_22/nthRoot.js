function nthRoot(m, n) {
  let randomValue = Math.random() % 10;
  let smallValue = 0.001;
  let maxValue = 9999999999;
  let curretnValue = 0.0;
  while (maxValue > smallValue) {
    curretnValue = ((n - 1.0) * randomValue + m / Math.pow(randomValue, n - 1)) / n;
    maxValue = Math.abs(curretnValue - randomValue);
    randomValue = curretnValue;
  }

  return curretnValue;
// console.log(curretnValue)
}

function runProgram(input) {
  input = input.trim().split("\n");
  var testCases = +input[0]
  var line = 1
  for (var i = 0; i < testCases; i++){
      var [n,m] = input[line++].trim().split(" ").map(Number)
    //   console.log(m)
      var rootValue = nthRoot(m,n)
      console.log(Math.floor(Math.round(rootValue * 1000.0) / 1000.0));
  }

}
if (process.env.USERNAME === "akshra") {
  runProgram(`3
2 9
6 4096
3 126`);
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

