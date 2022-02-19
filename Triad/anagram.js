function anagram(str1, str2){
    str1 = str1.split('').sort().join()
    // console.log(str1)
    str2 = str2.split("").sort().join();
    // console.log(str2);

    if (str1 == str2){
        return true
    }else{
        return false
    }
}

console.log(anagram('abcd', 'aedc'))


