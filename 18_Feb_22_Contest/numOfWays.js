function numberOfWays(n){
    var a = 1;
    var b = 2;
    var c = 3;
    var count = 0;
    for (var i = 0; i < n; i++){
        if (i + a + b == n){
            count++
        }else if(i + b + c == n){
            count++
        }else if(i + c + a == n){
            count++
        }
    }

    console.log(count)
}




function runProgram(input) {
  input = +input

  numberOfWays(input)
  
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
