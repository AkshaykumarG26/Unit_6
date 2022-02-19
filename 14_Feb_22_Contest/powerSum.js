function powerSum(x, n){
    var sum = 0
    var power = n;
    var len = x
    var count = 0;
    for (var i = 0; i < len; i++){
        
        sum = sum + i
        if (i ** power == x || i+1 ** power == x){
            count++

        }
    }
    return count
}



function runProgram(input) {
  var [X, N] = input.trim().split(" ").map(Number);
//   console.log(X, N)
console.log(powerSum(X, N));
}
if (process.env.USERNAME === "akshra") {
  runProgram(`10 2`);
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
