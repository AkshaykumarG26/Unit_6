function pairLessThanK(n, arr, k) {
  var sum = 0;
  for (var i = 0; i < n; i++) {
      var sumArr = [];
    for (var j = i+1; j < n; j++) {
      sum = arr[i] + arr[j];
      sumArr.push(sum);
    //   sum = 0

    //   console.log(sum)
    }
    var max = 0
    for (var i = 0; i <= sumArr.length; i++){
            if (max < sumArr[i]){
                    max = sumArr[i]
                }
    }
    if (max < k){
        return max
    }else{
            return -1
    }

    // return max
    // return sumArr
}
}

function runProgram(input) {
  input = input.trim().split("\n");
  var testCases = +input[0]
//   console.log(testCases)
    var line = 1;
    for (var i = 0; i < testCases; i++){
        var n = +input[line++]
        var arr = input[line++].trim().split(" ").map(Number)
        var k = +input[line++]
console.log(pairLessThanK(n, arr, k));
        // console.log(k)
        // console.log(n, arr, k)


    }
}
if (process.env.USERNAME === "akshra") {
  runProgram(`2
5
1 2 3 4 5
7
3
30 10 20
15`);
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
