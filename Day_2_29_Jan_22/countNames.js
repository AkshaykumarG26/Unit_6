
function countNames(arr){
    var objct = {};
    for (var i = 0; i < arr.length; i++) {
        var char = arr[i];
        if (objct[char] === undefined) {
            objct[char] = 1;
        } else {
            var prev = objct[char];
            objct[char] = prev + 1;
        }
    }
    for (k in objct) {
        console.log(k + " "+ objct[k]);
    }
}

function runProgram(input) {
  input = input.trim().split("\n");
  var testCases = +input[0]
  var line = 1;
  var arr = [];
  for (var i = 0; i < testCases; i++){
      var ins = input[line++]
      arr.push(ins)
    }
    countNames(arr)

}

if (process.env.USERNAME === "akshra") {
  runProgram(`3
masai
school
masai`);
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
