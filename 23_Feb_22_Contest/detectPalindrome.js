
function canFormPalindrome(str)
{
	

	let list = [];
	for(let i = 0; i < str.length; i++)
	{
        console.log(list)
        if (list.includes(str[i])){

            list.splice(list.indexOf(str[i]), 1);
        }
		else
        list.push(str[i]);
        // console.log(list);
	}
	
	if (str.length % 2 == 0 && list.length == 0 ||
	(str.length % 2 == 1 && list.length == 1))
		return true;
	

	else
		return false;
}


if (canFormPalindrome("aavrrff"))
	console.log("yes")
else
	console.log("No")

