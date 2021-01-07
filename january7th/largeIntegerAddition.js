/* Adding Very Large Numbers using Strings */
function bigAddition(str1, str2) {
    let sum = '';

    let topNumberLength = str1.length;
    let bottomNumberLength = str2.length;

    if(bottomNumberLength > topNumberLength) {
        let temp = topNumberLength;
        topNumberLength = bottomNumberLength;
        bottomNumberLength = temp;
    }

    let carry = 0;
    let a;
    let b;
    let temp; 
    let singleDigitSum;
    for(let i = 0; i < topNumberLength; i++) {
        a = parseInt(str1.length - 1 - i);
        b = parseInt(str2.length - 1 - i);
        b = b ? b : 0;
        temp  = (carry + a + b).toString();
        singleDigitSum = parseInt(temp.length - 1);
        carry = parseInt(temp.charAt(0));
        carry = carry ? carry : 0;
        
        sum = (i === topNumberLength - 1) ? temp + sum : singleDigitSum + sum; 
    }

    return sum;
}