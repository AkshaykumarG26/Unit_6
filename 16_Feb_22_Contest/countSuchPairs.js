function countSuchPairs(n, k, arr) {
    var count = 0
    for (var i = 0; i < n; i++){
        for (var j = i+1; j < n; j++){
            if (arr[i] + arr[j] == k){
                count++
            }
        }
    }
    return count
}

function runProgram(input) {
  input = input.trim().split("\n");
  var [n, k] = input[0].trim().split(" ").map(Number)
  var arr = input[1].trim().split(" ").map(Number)
  console.log(countSuchPairs(n,k,arr))
}
if (process.env.USERNAME === "akshra") {
  runProgram(`5 9
3 0 6 2 7`);
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
