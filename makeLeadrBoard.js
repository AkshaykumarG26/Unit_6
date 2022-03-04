// https://oj.masaischool.com/contest/1960/problem/01

function leaderBoard(names, marks, N){
    var rank = 1
    var prev = -1
    var count = 0

    for (var i = 0; i < N; i++){
        if(marks[i] == prev){
            console.log(rank + " " + names[i])
        }else{
            rank += count
            console.log(rank + " " + names[i])
            count = 0
        }

        count++
        prev = marks[i]
    }

}

leaderBoard(['rancho','chatur', 'raju', 'farahn', 'virus', 'joy'], [45, 32, 30, 28, 32, 45], 6)


function runProgram(input) {
  input = input.trim().split("\n");
  
}

if (process.env.USERNAME === "akshra") {
  runProgram(`6
rancho 45
chatur 32
raju 30
farhan 28
virus 32
joy 45`);
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
