var canvas = document.querySelector('canvas');

canvas.width = 864;
canvas.height = 530;

var c = canvas.getContext('2d');
var delay = 500;
var som = document.getElementById("som");

var x=5;
var y=440;
var dx=10;
var dy=10;

    function passos(event) {
        tecla = event.key;
        som.play()

    function Personagem(){

        var imagem="res/img/passo1.png";
        var img = new Image();
        img.onload = function(){
        //Como o clear está para a tela toda, toda vez que o Alaric anda, o fantasma pisca, pois está sendo apagado junto.
        c.clearRect(0, 0, 864, 530);
        c.drawImage(img,x,y,400,250);
        }
        img.src = imagem;

        if(tecla=="w"||tecla=="W"){
            if(y>=442){
                y = y - dy;
                new Audio("res/sound/Andar.mp3").play()
                console.log(imagem);
                if(imagem=="res/img/passo1.png"){
                    imagem="res/img/passo2.png";
                    console.log(imagem);
                }
                else if(imagem=="res/img/passo2.png"){
                    imagem="res/img/passo1.png";
                }
                console.log(imagem);
                tecla = '';
                console.log(imagem);
            }
        }
        else if(tecla=="s"||tecla=="S"){
            if((y - dy)<canvas.height-50){
                y = y + dy;
                new Audio("res/sound/Andar.mp3").play()
                tecla = '';
                if(imagem=="res/img/passo1.png"){
                    imagem="res/img/passo2.png";
                }
                else {
                    imagem="res/img/passo1.png";
                }
            }
        }
        else if(tecla=="d"||tecla=="D"){
            if((x - dx)<canvas.width-40){
                x = x + dx;
                new Audio("res/sound/Andar.mp3").play()
                tecla = '';
                if(imagem=="res/img/passo1.png"){
                    imagem="res/img/passo2.png";
                }
                else {
                    imagem="res/img/passo1.png";
                }
            }
        }
        else if(tecla=="a"||tecla=="A"){
            if(x>0){
                x = x - dx;
                new Audio("res/sound/Andar.mp3").play()
                tecla = '';
                if(imagem=="res/img/passo1.png"){
                    imagem="res/img/passo2.png";
                }
                else {
                    imagem="res/img/passo1.png";
                }
            }
        }
    }

function Ghost(){

    var imagemG ="res/img/ghost.png";
    var imgG = new Image();
    
    imgG.onload = function(){
        c.drawImage(imgG, 600, 470, 30, 30);
    }
    imgG.src = imagemG;
}


function animate(){
    requestAnimationFrame(animate);
    Personagem();
    Ghost();
}

animate();
}