var str = "akshAy";
var out = "";
for (var i = 0; i < str.length; i++) {
  if (
    str[i] == "a" ||
    str[i] == "e" ||
    str[i] == "i" ||
    str[i] == "o" ||
    str[i] == "u"
  ) {
    out += str[i].toUpperCase();
  } else if (
    str[i] == "A" ||
    str[i] == "E" ||
    str[i] == "I" ||
    str[i] == "O" ||
    str[i] == "U"
  ) {
    out += str[i].toLowerCase();
  }else{
      out += str[i]
  }
}

console.log(out);
