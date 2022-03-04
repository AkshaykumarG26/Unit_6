function runProgram(input) {
  input = input.trim().split("\n");
  var [x, n] = input[0].trim().split(" ").map(Number);
  console.log(check(x, x, 0, n));
}

let res = 0;
function check(num, x, k, n) {
  if (x == 0) res++;

  let r = Math.floor(Math.pow(num, 1.0 / n));

  for (let i = k + 1; i <= r; i++) {
    let a = x - Math.pow(i, n);
    if (a >= 0) check(num, x - Math.pow(i, n), i, n);
  }
  return res;
}

if (process.env.USERNAME === "DELL") {
  runProgram(`10 2`);
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
