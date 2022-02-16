

function runProgram(input) {

    var arr = input.trim().split(" ").map(Number)
    var x = arr[0]
    var y = arr[1]
    var z = arr[2]

      if (x != y && y != z && x != z) {
        console.log(0);
      } else if (x == y) {
        console.log(z);
      } else if (y == z) {
        console.log(x);
      } else if (x == z) {
        console.log(y);
      }



}

if (process.env.USERNAME === "akshra") {
  runProgram(`2 5 2`);
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