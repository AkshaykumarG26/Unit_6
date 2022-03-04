


function minAmdMaxSum(arr, n, m){
    var diff = n-m

    arr = arr.sort((a,b) => a-b) 
    var minSum = 0
    
    for (var i = 0; i < diff; i++){
        minSum += arr[i]
    }
    
    arr = arr.sort((a,b) => b-a)
    var maxSum = 0

    for (var i = 0; i < diff; i++){
        maxSum += arr[i]
    }

    return maxSum - minSum
}



function runProgram(input) {
  input = input.trim().split("\n")
  var testCases = +input[0]

  var line = 1
  for (var i = 0; i < testCases; i++){

      var [n,m] = input[line++].trim().split(" ").map(Number)
      var arr = input[line++].trim().split(" ").map(Number);

      console.log(minAmdMaxSum(arr, n, m))
  }
  
}
if (process.env.USERNAME === "akshra") {
  runProgram(`1
5 1
1 2 3 4 5`);
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
