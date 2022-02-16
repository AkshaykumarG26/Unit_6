// function stringDifference(str1, str2) {
//   var out = ''
//   for (var i = 0; i < str1.length; i++){
//       for (var j = 0; j < str2.length; j++){
//           if (str1[i] != str2[j]){
//               out = str1[i]
//           }
//       }
//   }

//   console.log(out)
// }


function stringDifference(str1, str2) {
  let diff = "";
  str1.split("").forEach(function (value, i) {
    if (value != str2.charAt(i)) diff += value;
  });
  return diff;
}


function runProgram(input) {
  input = input.trim().split("\n");
  //   console.log(input)
  var str1 = input[0]
  var str2 = input[1]
//   stringDifference(str1, str2)
console.log(stringDifference(str1, str2));
}

if (process.env.USERNAME === "akshra") {
  runProgram(`ABCX
ABCD`);
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
