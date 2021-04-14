var txt= "dgjdg.mp3";
function find(text){
var arr = text.split('.');
return arr[arr.length-1];
}
console.log(find(txt));
