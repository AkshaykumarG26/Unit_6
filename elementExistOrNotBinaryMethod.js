function elementExistOrNotBinaryMethod(n, k, arr){

    var low = 0
    var high = n-1
    var flag = false
    while(low <= high){
        var mid = Math.floor((low + high) / 2)
        if (arr[mid] == k){
            return "Yes"
        }else if(arr[mid] > k){
            high = mid - 1
        }else{
            low = mid + 1
        }
    }
    return "No"
}


console.log(elementExistOrNotBinaryMethod(8, 3, [1, 2, 3, 4, 5, 6, 7, 8]));




function binaryRecursive(arr, low, high, k) {
  if (high < low) return -1;
  if (arr[low] == k) return low;
  if (arr[high] == k) return high;
  return binaryRecursive(arr, low + 1, high - 1, k);
}