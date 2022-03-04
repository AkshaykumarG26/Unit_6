// detect pallindrome using two pouinter technique


function towPointerPalindorme(str){
    var left = 0
    var right = str.length - 1

    while(left < right){
        if(str[left] != str[right]){
            return "No"
        }

        left++
        right--
    }

    return "Yes"
}

console.log(towPointerPalindorme("aaaa"));