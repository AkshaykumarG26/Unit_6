// var arr = [10,20,20,10,10,30,50,10,20]
var arr = [1,2,1,2,1,3,2]
var count = 0
var n = arr.length
var sum = 0

arr = arr.sort((a,b) => a-b)
// console.log(arr)
var obj = {}

for (var i = 0; i < arr.length; i++){
    var char  = arr[i]
    if (obj[char] == undefined){
        obj[char] = 1
    }else{
        var prev = obj[char]
        obj[char] = prev + 1
    }
}

for (k in obj){
    if(obj[k] % 2 == 0){
        count++
    }else if(obj[k] == 1){
        count++
    }
}
console.log(count)


