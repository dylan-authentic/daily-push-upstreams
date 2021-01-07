/* Adding Very Large Numbers using Strings */
function bigAddition(str1, str2) {
    let sum = '';

    let topNumber = str1;
    let bottomNumber = str2;

    if(bottomNumber.length > topNumber.length) {
        let temp = topNumber;
        topNumber = bottomNumber;
        bottomNumber = temp;
    }

    let carry = 0;
    let a;
    let b;
    let temp; 
    let singleDigitSum;
    for(let i = 0; i < topNumber.length; i++) {
        a = parseInt(topNumber.charAt(topNumber.length - 1 - i));
        b = parseInt(bottomNumber.charAt(bottomNumber.length - 1 - i));
        b = (b) ? b : 0;
        temp  = (carry + a + b).toString();
        singleDigitSum = temp.charAt(temp.length - 1);
        carry = parseInt(temp.charAt(0));
        carry = (carry) ? carry : 0;
        
        sum = (i === topNumber.length - 1) ? temp + sum : singleDigitSum + sum; 
    }

    return sum;
}

var value1 = '90071992547409916324883284778932'
var value2 = '90071992547409912354653283'; 

bigAddition(value1, value2); // 189992179709403064034802729432265
bigAddition("2750", "3750") // 6500