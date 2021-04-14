function reverseString(str) {
    return str.split("").reverse().join("");
}
function formatNumber(number){
        var result = "";
        var str = number.toString();
        var count = 0;
        for(var i = str.length - 1; i >= 0; i--){
            result += str[i];
            count++;
            if(count === 3)
            {
                result += ',';
                count =0;
            }
        }
        return reverseString(result);
}