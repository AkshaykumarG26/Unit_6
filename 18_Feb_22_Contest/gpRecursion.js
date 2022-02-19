function GPandRecursion(num1, num2){
    var sum = 1;
    for (var i = 1; i <= num1; i++){
        sum = sum + 1 / (num2**i)
    }

    console.log(sum.toFixed(4))
}



function runProgram(input) {
  input = input.trim().split(' ').map(Number);
//   console.log(input)

var num1 = +input[0]
var num2 = +input[1]

GPandRecursion(num1, num2)


}
if (process.env.USERNAME === "akshra") {
  runProgram(`1 1`);
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
