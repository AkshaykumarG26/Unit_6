function rotateMatrix(matrix, m, n) {
  var row = 0,
    col = 0;
  var prev, current;
  while (row < m && col < n) {
    if (row + 1 == m || col + 1 == n) break;

    prev = matrix[row + 1][col];

    for (var i = col; i < n; i++) {
      current = matrix[row][i];
      matrix[row][i] = prev;
      prev = current;
    }
    row++;

    for (var i = row; i < m; i++) {
      current = matrix[i][n - 1];
      matrix[i][n - 1] = prev;
      prev = current;
    }
    n--;

    if (row < m) {
      for (var i = n - 1; i >= col; i--) {
        current = matrix[m - 1][i];
        matrix[m - 1][i] = prev;
        prev = current;
      }
    }
    m--;

    if (col < n) {
      for (var i = m - 1; i >= row; i--) {
        current = matrix[i][col];
        matrix[i][col] = prev;
        prev = current;
      }
    }
    col++;
  }

  for (var k = 0; k < matrix.length; k++) {
    var res = "";
    for (var l = 0; l < matrix[k].length; l++) {
      res += matrix[k][l] + " ";
    }
    console.log(res);
  }
}

function runProgram(input) {
  input = input.trim().split("\n");
  var n = +input[0];
  var matrix = [];
  var line = 1;
  for (var i = 0; i < n; i++) {
    matrix.push(input[line++].trim().split(" ").map(Number));
}
console.log(matrix)

  rotateMatrix(matrix, n, n);
}

if (process.env.USERNAME === "akshra") {
  runProgram(`4
    1 2 3 4
    1 2 3 4
    1 2 3 4
    1 2 3 4`);
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
