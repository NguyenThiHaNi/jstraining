var number;
console.log(number)

function shortnumber(number){
var check = number;
var count = 0;

while( check/1000>=1 )
{ 
    count++;
    check = check /1000;
}
 var res = check.toFixed(2);
switch(count)
{
    case 1:
        return  res + 'k';
    case 2:
        return res + 'm';
    case 3:
        return res + "b";
    default:
        return res;
}
}