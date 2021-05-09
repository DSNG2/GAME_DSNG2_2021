var canvas = document.querySelector('canvas');

canvas.width = 864;
canvas.height = 530;

var c = canvas.getContext('2d');
var delay = 500;
var som = document.getElementById("som");

var pontuacao1 = 0;
var pontuacao2 = 0;

var x = 5;
var y = 440;
var dx = 5;
var dy = 5;

function passos(event) {
    var tecla = event.key;
    som.play()

    function Personagem() {

        var imagem = "res/img/passo1.png";
        var img = new Image();
        img.onload = function () {
            //Como o clear está para a tela toda, toda vez que o Alaric anda, o fantasma pisca, pois está sendo apagado junto.
            c.clearRect(0, 0, 864, 530);
            c.drawImage(img, x, y, 400, 250);
        }
        img.src = imagem;

        if (tecla == "w" || tecla == "W") {
            if (y >= 442) {
                y = y - dy;
                //console.log("W - y" + y);
                new Audio("res/sound/Andar.mp3").play()
                console.log(imagem);
                if (imagem == "res/img/passo1.png") {
                    imagem = "res/img/passo2.png";
                    console.log(imagem);
                }
                else if (imagem == "res/img/passo2.png") {
                    imagem = "res/img/passo1.png";
                }
                console.log(imagem);
                tecla = '';
                console.log(imagem);
            }
        }
        else if (tecla == "s" || tecla == "S") {
            if ((y - dy) < canvas.height - 50) {
                y = y + dy;
                //console.log("S - Y" + y);
                new Audio("res/sound/Andar.mp3").play()
                tecla = '';
                if (imagem == "res/img/passo1.png") {
                    imagem = "res/img/passo2.png";
                }
                else {
                    imagem = "res/img/passo1.png";
                }
            }
        }
        else if (tecla == "d" || tecla == "D") {
            if ((x - dx) < canvas.width - 40) {
                x = x + dx;
                //console.log("D - x" + x);
                new Audio("res/sound/Andar.mp3").play()
                tecla = '';
                if (imagem == "res/img/passo1.png") {
                    imagem = "res/img/passo2.png";
                }
                else {
                    imagem = "res/img/passo1.png";
                }
            }
        }
        else if (tecla == "a" || tecla == "A") {
            if (x > 0) {
                x = x - dx;
                //console.log("A - x" + x);
                new Audio("res/sound/Andar.mp3").play()
                tecla = '';
                if (imagem == "res/img/passo1.png") {
                    imagem = "res/img/passo2.png";
                }
                else {
                    imagem = "res/img/passo1.png";
                }
            }
        }

        console.log("x - "+x+" y - "+y);
        if ((x >= 275 && x <= 320) && (y >= 465 && y <= 485)) {
            pontuacao1++;
            console.log("pontuacao 1 - " + pontuacao1);
        }
        if ((x>=575 && x<=625) && (y >= 430 && y <= 450)) {
            pontuacao2++;
            console.log("pontuacao 2 - " + pontuacao2);
        }
    }

    function Ghost1() {

        var imagemG = "res/img/ghost.png";
        var imgG = new Image();

        imgG.onload = function () {
            c.drawImage(imgG, 300, 500, 30, 30);
        }
        imgG.src = imagemG;
    }

    function Ghost2() {

        var imagemG = "res/img/ghost.png";
        var imgG = new Image();

        imgG.onload = function () {
            c.drawImage(imgG, 600, 455, 30, 30);
        }
        imgG.src = imagemG;
    }

    function vida(){
        var vida = "res/img/vida.png";
        var morte = "res/img/morte.png";
        var img1 = new Image()
        img1.onload = function(){
            c.drawImage(img1, 700, 0);
        }
        if(pontuacao1==0){
            img1.src = vida;
        }
        else{
            img1.src = morte;
        }
        var img1 = new Image()
        img1.onload = function(){
            c.drawImage(img1, 720, 0);
        }
        if(pontuacao1==0){
            img1.src = vida;
        }
        else{
            img1.src = morte;
        }
        var img1 = new Image()
        img1.onload = function(){
            c.drawImage(img1, 740, 0);
        }
        img1.src = vida;
    }

    function animate() {
        requestAnimationFrame(animate);
        Personagem();
        Ghost1();
        Ghost2();
        vida();
    }

    animate();
}