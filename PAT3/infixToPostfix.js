function infixToPostfix(str) {
  let stack = [];
  let result = "";

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (
      (char >= "a" && char <= "z") ||
      (char >= "A" && char <= "Z") ||
      (char >= "0" && char <= "9")
    ) {
      result += char;
    } else if (char == "(") {
      stack.push("(");
    } else if (char == ")") {
      while (stack[stack.length - 1] != "(") {
        result += stack[stack.length - 1];
        stack.pop();
      }
      stack.pop();
    } else {
      while (
        stack.length != 0 &&
        check(str[i]) <= check(stack[stack.length - 1])
      ) {
        result += stack[stack.length - 1];
        stack.pop();
      }
      stack.push(char);
    }
  }
  while (stack.length != 0) {
    result += stack[stack.length - 1];
    stack.pop();
  }

  console.log(result);
}

function check(symbol) {
  if (symbol == "^") return 3;
  else if (symbol == "/" || symbol == "*") return 2;
  else if (symbol == "+" || symbol == "-") return 1;
  else return -1;
}

function runProgram(input) {
  var e = input;
  infixToPostfix(e);
}

if (process.env.USERNAME === "akshra") {
  runProgram(`a+b-c+d*(e-f)/g+(h*(i/j))`);
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
