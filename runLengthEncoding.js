// Run length encoding
// input - aaaaabbbbcccddd
// output - a5b4c3d3





// var arr = ["a","a","a","a","a","b","b","b","b","e","e","e","e","e","e","n","n","n"]
var arr = "aaaaabbbbcccddd";
var n = arr.length
for (var i = 0; i < n; i++){
    var count = 1;
    while(i < n && arr[i] == arr[i+1]){
        count++
        i++
    }

    console.log((arr[i] + count));
}