var arr = [3,4,4,4,4,5,3]
var max_count = 0
var index = -1
for (var i = 0; i < arr.length; i++){
    var count  = 0;
    for (var j = 0; j < arr.length; j++){
        if (arr[i] == arr[j]){
            count++
        }
    }
    if (max_count < count){
        max_count = count
        index = i
    }

    if (max_count > arr.length/2){
        console.log(arr[index])
    }
}

// console.log(count)
