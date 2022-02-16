function minimumInSortedArr(n, arr) {
  var arr = arr.sort(function (a, b) {
    return a - b;
  });

  console.log(arr[0]);
}

function runProgram(input) {
  input = +input;
//   console.log(input)
if(input % 4 == 0){
    console.log("Yes")
}else{
    console.log("No")
}
}
if (process.env.USERNAME === "akshra") {
  runProgram(`12`);
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
