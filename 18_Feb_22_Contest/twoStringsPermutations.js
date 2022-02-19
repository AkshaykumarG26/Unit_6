function twoStringsPermutation(str1, str2){
    var str1 = str1.split('').sort().join('')
    var str2 = str2.split('').sort().join('')

    if (str1 == str2){
        console.log("Yes")
    }else{
        console.log("No")
    }

}



function runProgram(input) {
  input = input.trim().split("\n");
//   console.log(input)
var str1 = input[0]
var str2 = input[1]
twoStringsPermutation(str1, str2)
}
if (process.env.USERNAME === "akshra") {
  runProgram(`amit
mtia`);
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
