
function random(min,max){
    return Math.floor(Math.random() * (max - min)) + min;
}   
console.log(random());
function elementarr(array){
  return array[random(0,array.length-1)];
}
console.log(elementarr());