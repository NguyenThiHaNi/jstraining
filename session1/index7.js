var arr=[];
var brr=[];
function findelement(arr,brr){
       for(var i=0 ; i<arr.length ; i++){
            for( var j = 0; j < brr.length ; j++){
               if (arr[i]===brr[j]){
                 brr[j] = brr[brr.length-1]
                 brr.pop();
                 break;
                }
            }
       }
       return brr;
}
console.log(findelement(arr,brr))