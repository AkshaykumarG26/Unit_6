function minAndMaxSum(arr, n, m) {
  arr = arr.sort((a,b) => a-b)
  var diff = n-m
  var sum1 = 0
  var sum2 = 0

  for (var i = 0; i < diff; i++){
    sum1 += arr[i]
  }

  arr = arr.sort((a,b) => b-a)

  for (var i = 0; i < diff; i++){
    sum2 += arr[i]
  }

  console.log(sum2 - sum1)
}



function runProgram(input) {
  input = input.trim().split("\n");
  //   console.log(input)

  var testCases = +input[0]
  var line = 1;
  for (var i = 0; i < testCases; i++){
      var [n, m] = input[line++].trim().split(" ").map(Number)
      var array = input[line++].trim().split(" ").map(Number);

      minAndMaxSum(array, n, m)
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

