var game = document.createElement("div");
document.body.appendChild(game);
game.style.position = "relative";

var score = 10000;
var countClick = 0;

var text = document.createElement("div");
text.innerHTML = "score: 1000";
text.style.position = "absolute";
text.style.top = '450px';
game.appendChild(text);

var bg = createImage("./img/trucxanh_bg.jpg", 0, 0,700,600);

var onclick = 0;
//bien luu
var handle = {
    onclick : 0,
    countRight : 0,
    image : [],
}

var card01 = createImage("./img/cam.jpeg", 100, 100, 500, 300);
//tao mang random

var arr =[];
var obj = {}; 

while ( arr.length<10 )
{
    var r = Math.floor(Math.random()*20);
    if (arr.indexOf(r)===-1) arr.push(r);
}
 // tao 20 o hinh
function creatmagic (){
    var count = 0;
     for ( let i= 0; i<4; i++){
         for (let j=0; j<5; j++){
             if (arr.indexOf(i * 4 + j) !== -1){
                 obj[i*100+"-"+j*100] = "./img/trucxanh"+count+".jpg";
                 count++;
              }
            createImage( "./img/cam.jpeg", 100+100*i,100+100*j, 100 ,100)
         }
     }
 }
creatmagic();

function createImage(src, top, left, width, height) {
    var image = document.createElement("img");
    image.onclick = () => {
    console.log(image.src);
         if (true){
             handle.image.push(image);
             handle.countClick++;
             if (obj[top + "-" + left ]) {
                handle.countRight++;
                image.src = obj[top + "-" + left];
             }  
             if (handle.countClick ===2){
                 if (handle.countRight === 2){
                     score +=1000;
             }else{
                 score -= 500;
                 if (score === 0){
                     text.innerHTML = 'game over';
                 }
                 handle.image[0].src = '';
                 handle[1].src = ''; 
             }
             handle.countClick = 0;
             handle.countRight = 0 ;
             handle.image = [];
             text.innerHTML = "SCORE :" + score ;
             }
         }
    }
    image.src = src;
    image.style.position = "absolute";
    width && (image.style.width = width +"px");
    height && (image.style.height = height+ "px");
    image.style.top = top + "px";
    image.style.left = left + "px";
    image.style.borderStyle = "solid";
    image.style.borderStyle = "2px";
    game.appendChild(image);
    return image;
    }
