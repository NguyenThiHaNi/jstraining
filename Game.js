import { Node } from "../lib/Node.js";
import { Card } from "../modules/Card.js";
import {Label} from "../lib/Label.js";
import {Sprite} from "../lib/Sprite.js";
//import { Cover} from "../modules/Cover.js";

export class Game extends Node {

    init() {
        this._initSize();
        this._initbg();
        this._initCards();
        //this._initCover();  
        this.countClick = 0;
        this.firstCard = null;
        this.secondCard = null;
    }

    _initSize(){
        this.width = 800;
        this.height = 480;
        this.elm.style.border = "1px solid black";
    }

    _initCards(){
        let arr =[];
        for (let i= 0 ;i<10;i++){
            let card ={
                name : i,
                img :"./trucxanh"+i +"jpg"
            }
            arr.push(card);
        }
        const shuffleCard = arr.concat(arr).sort(()=> 0.5 - Math.random());
        //for asdasdas
        //let card = new Card(0, 1);
        //let count = 0;
        //card.x = 135;
       // card.y = 60;  
        //let text = new Label ();
        //this.addChild(text);
        //this.addChild(card);
        //card.on("mousedown", this.onClickCard.bind(this));
       //const ran = this.ranDom(20);
        for ( let i = 0; i<5 ; i++){
            for (let j = 0; j < 4;j++){
                let card = new Card (i,j, ran[i * 4 + j]);
                card.x = 135 + 100*i;
                card.y = 60 + 100*j;
                //this._face = "./img/trucxanh"+ran+".jpg";
                this.addChild(card);
                card.on("mousedown", this.onClickCard.bind(this));

             }
         }
    }
    
    _initbg(){
        let bg = new Sprite("./img/trucxanh_bg.jpg");
        this.addChild(bg);
    }   
    onClickCard(evt){
        this.countClick++;
        if(  this.countClick === 1){


        }else if(this.countClick === 2){
            // compare
        }
        let card = evt.target.node;
        card.showFace();
        console.log(card);
    }

    //ranDom(n) {
    //     var arr = [];
    //     while (arr.length < n) {
    //         var r = Math.floor(Math.random() * n);
    //         if (arr.indexOf(r) === -1) arr.push(r);
    //     }   
    //     return arr;
    // }

}