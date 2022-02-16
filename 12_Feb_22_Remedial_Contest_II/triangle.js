function triangle(n){
    var rows = n;

    for (let i = 0; i < rows; i++) {
      let string = "";

      let number = 1;

      for (let k = 1; k <= rows - i; k++) {
        string += " ";
      }

      for (let j = 0; j <= i; j++) {
        string += number + " ";
        number = (number * (i - j)) / (j + 1);
      }
      

      for (let k = i + 1; k <= rows; k++) {
        string += " ";
      }
      console.log(string);
    }
}


function runProgram(input) {
  input = input.trim().split("\n");
  var n = +input[0];
triangle(n)
  
}
if (process.env.USERNAME === "akshra") {
  runProgram(`6`);
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
