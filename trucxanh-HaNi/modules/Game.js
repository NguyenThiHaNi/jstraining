import { Label } from "../lib/Label.js";
import { Node } from "../lib/Node.js";
import { Card } from "./Card.js";
import {Button} from "../lib/Button.js";
import {Audio} from "../lib/Audio.js";

export class Game extends Node {

    init() {
        this._initSize();
        //this._initCards();
        this._initScore();
        this._initButton();
        this.countClick = 0;
        this.countDone = 0;
        this.firstCard = null;
        this.secondCard = null;
        this.timeline = gsap.timeline();
    }
    _initSize() {
        this.width = 800;
        this.height = 480;
        this.elm.style.backgroundImage = "url(./img/trucxanh_bg.jpg)";
        this.elm.style.border = "1px solid red";
    }
    _timeOut(n){
        if (n <= 0){
            this.btn.elm.innerHTML = "BẮT ĐẦU";
            this._initCards();
            this.label.score = 10000;
            this.countDone = 0;
            return;
        }
        this.btn.elm.innerHTML = n;
        setTimeout(() => {
            this._timeOut(n-1);
        }, 200);        

    }
    _initButton(){
        this.btn = new Button();
        this.addChild(this.btn);
        this.btn.elm.innerHTML =" BẮT ĐẦU ";
        this.btn.elm.onclick = () => {
            this.themesong = new Audio("./Audio/nhacnen.mp3");
            this.themesong.playLoop();
           this._timeOut(10);
        }
    }
    _initScore() {
        this.label = new Label();
        this.addChild(this.label);
        this.label.score = 10000;
    }

    _initCards() {

        const rand = this.ranDom(20);
        for (let i = 0; i < 5; i++) {
            for (let j = 0; j < 4; j++) {
                let card = new Card(i, j, rand[i * 4 + j] % 10 + 1);
                let x = i * 100 + 150;
                let y = j * 100 + 60;
                this.addChild(card);               
                this.timeline.to(card,{
                    duration : 0.1,
                    opacity : 1,
                    x : x,
                    y : y,
                    zIndex : 0,
                    ease : "back",
                } 
                    )
                card.on("mousedown", this.onClickCard.bind(this));
            }
        }

    }

    onClickCard(evt) {
        if(this.label.score === 0 || this.countDone === 10){
            return;
        }
        let clickSound = new Audio("./Audio/click.wav");
        clickSound.playOneShot();
        this.countClick++;
        let card = evt.target.node;

        if (this.countClick === 1) {
            this.firstCard = card;
            this.firstCard.showface();
            // break;
        } else if (this.countClick === 2) {
            const checkVsCard1 = this.firstCard.find(card.index, card.value);
            if ( checkVsCard1 === false) {      
                this.secondCard = card;
                this.secondCard.showface();
            } else if (checkVsCard1 === true) {
                this.countClick--;
            }
            if (this.countClick === 2) {
                setTimeout(() => {
                    if (this.firstCard.bg === this.secondCard.bg) {
                        this.firstCard.hidecard();
                        this.secondCard.hidecard();
                        this.label.score += 1000;
                        this.countDone += 1;
                    } else {
                        this.firstCard.showCover();
                        this.secondCard.showCover();
                        this.label.score -= 500;
                    }
                    if (this.countDone === 10) {
                        this.label.score = "YOU WIN";
                    }
                    if (this.label.score <= 0){
                    while(this != null && this.elm.hasChildNodes()){
                        this.elm.removeChild(this.elm.lastChild);
                    }
                    this._initButton();
                    this.btn.setName("CHƠI LẠI");
                    this._initScore();
                    this.label.score = "YOU LOSE";
                    this.themesong.pause();
                    //process.exit(1);
                    }
                    this.countClick = 0;    
                }, 500);
            }
        }
        console.log(this.firstCard, this.secondCard);
        console.log(card.index, card.value);
    }
    ranDom(n) {
        var arr = [];
        while (arr.length < n) {
            var r = Math.floor(Math.random() * n);
            if (arr.indexOf(r) === -1) arr.push(r);
        }
        return arr;
    }

}