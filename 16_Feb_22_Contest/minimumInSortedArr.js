function minimumInSortedArr(n, arr) {
    var arr = arr.sort(function(a,b){
        return a-b
    })

    console.log(arr[0])
}

function runProgram(input) {
  input = input.trim().split("\n");
  var n = +input[0]
  var arr = input[1].trim().split(" ").map(Number);
  minimumInSortedArr(n, arr)
}
if (process.env.USERNAME === "akshra") {
  runProgram(`10
4 6 7 9 10 -1 0 1 2 3`);
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
