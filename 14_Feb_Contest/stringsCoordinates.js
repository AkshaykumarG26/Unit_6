function stringCoordinates(n, str) {
  var x = 0;
  var y = 0;

  for (var i = 0; i < str.length; i++) {
    if (str[i] == "u") {
      x = x + 1;
    }

    if (str[i] == "d") {
      x = x - 1;
    }

    if (str[i] == "r") {
      y = y + 1;
    }

    if (str[i] == "l") {
      y = y - 1;
    }

  }

  console.log(x, y)
}
function runProgram(input) {
  input = input.trim().split("\n");
  var n = +input[0];
  var str = input[1].trim().split("");
  stringCoordinates(n, str)
}
if (process.env.USERNAME === "akshra") {
  runProgram(`4
lldd`);
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
