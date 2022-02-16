function makeEven(n, arr){
    if (n == 1 && arr[0]%2){
        console.log("YES")
    }

    var sum = 0
    for (var i = 0; i < n; i++){
        for (var j = i+1; j < n; j++){
            sum = sum + arr[j]
        }
    }

    if ( sum % 2 == 0){
        console.log("YES")
    }else{
        console.log("NO")
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
      var arr = input[line++].trim().split(" ").map(Number)

    //   console.log(n, arr)

    makeEven(n, arr)
  }

  
}

if (process.env.USERNAME === "akshra") {
  runProgram(`2
1
2
3
1 2 3
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
