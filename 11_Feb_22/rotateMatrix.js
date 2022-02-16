// Rotate by 90 Clockwise


function rotateMatrix(n, arr){
    for (var i = 0; i < n; i++) {
      var res = "";
      for (var j = arr[i].length - 1; j >= 0; j--) {
        res += arr[j][i] + " ";
      }
      console.log(res);
    }
}

function runProgram(input) {
  input = input.trim().split("\n");
  //   console.log(input)
  var testCases = +input[0];
//   console.log(testCases);
  var line = 1;

  for (var i = 0; i < testCases; i++){
      var n = +input[line++]
    //   console.log(n)
      var arr = []
      for (var j = 0; j < n; j++){
          arr.push(input[line++].trim().split(" ").map(Number));

        }
        // console.log(arr)

        rotateMatrix(n, arr)
  }
}

if (process.env.USERNAME === "akshra") {
  runProgram(`2
4
1 2 3 4
5 6 7 8
1 2 3 4
5 6 7 8
3
1 2 3
4 5 6
7 8 9
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
