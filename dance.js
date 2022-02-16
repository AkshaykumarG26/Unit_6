function dance(boysN, girlsN, boysHeight, girlsHeight) {
  boysHeight = boysHeight.sort(function (a, b) {
    return a - b;
  });
  girlsHeight = girlsHeight.sort(function (a, b) {
    return a - b;
  });

  var i = 0;
  var j = 0;

  while (i < boysN && j < girlsN) {
    if (boysHeight[i] <= girlsHeight[i]) {
        return "NO"
    }
    i++
    j++
    return "YES"
  }
}

function runProgram(input) {
  input = input.trim().split("\n");
  var testCases = +input[0];
  var line = 1;
  for (var i = 0; i < testCases; i++) {
    var [boysN, girlsN] = input[line++].trim().split(" ").map(Number);
    var boysHeight = input[line++].trim().split(" ").map(Number);
    var girlsHeight = input[line++].trim().split(" ").map(Number);

    console.log(dance(boysN, girlsN, boysHeight, girlsHeight));
  }
}

if (process.env.USERNAME === "akshra") {
  runProgram(`1
4 5
2 5 6 8
3 8 5 1 7`);
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
