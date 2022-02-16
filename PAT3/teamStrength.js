function teamStrength(n, k, arr){
  var sum1 = 0;
  var sum2 = 0;
  // var n2 = arr.length
  // console.log("n2-", n2)
  for (var i = 0; i < n; i++) {
    sum1 = sum1 + arr[i];
  }
  for (var j = n; j < arr.length; j++) {
    // console.log(arr[j]);
    // console.log("j-", j)
    sum2 = sum2 + arr[j];
  }

  // console.log("sum1-", sum1);
  // console.log("sum2-", sum2);

  var absDiff = Math.abs(sum1-sum2)
  // console.log(absDiff)

  if (absDiff < k){
    console.log("Valid")
  }else{
    console.log("Invalid")
  }
}


function runProgram(input) {
  input = input.trim().split("\n");
  // console.log(input)
  var [n,k] = input[0].trim().split(" ").map(Number)
  // console.log(n)
//   console.log(k)

var arr = input[1].trim().split(" ").map(Number)
// console.log(arr)

teamStrength(n,k, arr)


}

if (process.env.USERNAME === "akshra") {
  runProgram(`3 4
1 8 5 9 6 1
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
