function samosa(N, K, arr) {

  var arr = arr.sort(function (a, b) {
    return a - b;
  });
  // console.log(arr)
  var sum = 0;
  var count = 0;
  var i = 0;
  while(sum < K){
    sum = sum + arr[i]
    i = i + 1
    count = count + 1
  }
  // console.log(sum)

  console.log(count);
}

function runProgram(input) {
  input = input.trim().split("\n");
  //   console.log(input)
  var [N, K] = input[0].trim().split(" ").map(Number);
  var arr = input[1].trim().split(" ").map(Number);
  
  // console.log(arr)
  samosa(N, K, arr);
}

if (process.env.USERNAME === "akshra") {
  runProgram(`4 10
5 4 2 4`);
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
