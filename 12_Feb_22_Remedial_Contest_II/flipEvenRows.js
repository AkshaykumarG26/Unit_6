function flipEvenRows(arr){
    for (var i = 0; i < arr.length; i++) {
      var out = "";

      if (i % 2 == 1) {
        for (var j = arr[i].length - 1; j >= 0; j--) {
          out += arr[i][j] + " ";
        }
      } else {
        for (var j = 0; j < arr[i].length; j++) {
          out += arr[i][j] + " ";
        }
      }
      console.log(out);
    }
}



function runProgram(input) {
  input = input.trim().split("\n");
  var [row, col] = input[0].trim().split(" ").map(Number);
  var arr = [];
  var line = 1;
  for (var i = 0; i < row; i++) {
    arr.push(input[line++].trim().split(" ").map(Number));
  }
  // console.log(arr);
  flipEvenRows(arr)
}
if (process.env.USERNAME === "akshra") {
  runProgram(`4 2
    1 2
    3 4
    5 6
    7 8
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
