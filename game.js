// var canvas = document.querySelector('canvas');

// canvas.width = 864;
// canvas.height = 530;

// var c = canvas.getContext('2d');
// var delay = 500;
// var som = document.getElementById("som");

// var x=0;
// var y=380;
// var dx=10;
// var dy=10;

//     function passos(event) {
//         tecla = event.key;
//         som.play()

//     function Personagem(){

//         var imagem="res/img/passo1.png";
//         var img = new Image();
//         img.onload = function(){
//         c.clearRect(0, 0, 864, 530);
//         c.drawImage(img,x,y,400,250);
//         }
//         img.src = imagem;

//         if(tecla=="w"||tecla=="W"){
//             y = y - dy;
//             new Audio("res/sound/Andar.mp3").play()
//             console.log(imagem);
//             if(imagem=="res/img/passo1.png"){
//                 imagem="res/img/passo2.png";
//                 console.log(imagem);
//             }
//             else if(imagem=="res/img/passo2.png"){
//                 imagem="res/img/passo1.png";
//             }
//             console.log(imagem);
//             tecla = '';
//             console.log(imagem);
//         }
//         else if(tecla=="s"||tecla=="S"){
//             y = y + dy;
//             new Audio("res/sound/Andar.mp3").play()
//             tecla = '';
//             imagem="res/img/passo2.png";
          
//         }
//         else if(tecla=="d"||tecla=="D"){
//             x = x + dx;
//             new Audio("res/sound/Andar.mp3").play()
//             tecla = '';
//             if(imagem=="res/img/passo1.png"){
//                 imagem="res/img/passo2.png";
//             }
//             else {
//                 imagem="res/img/passo1.png";
//             }
//         }
//         else if(tecla=="a"||tecla=="A"){
//             x = x - dx;
//             new Audio("res/sound/Andar.mp3").play()
//             tecla = '';
//             if(imagem=="res/img/passo1.png"){
//                 imagem="res/img/passo2.png";
//             }
//             else {
//                 imagem="res/img/passo1.png";
//             }
//         }
//     }

// function draw(){
//     Personagem();
// }
// draw();
// }




window.onload = function(){
	//Constantes que armazenam o código de cada seta do teclado
	var LEFT = 37, UP = 38, RIGHT = 39, DOWN = 40;

    var som = document.getElementById("som");
	
	var cnv = document.querySelector("canvas");
	var	ctx = cnv.getContext("2d");
	var spriteSheet = new Image();
	spriteSheet.src = "res/img/img.png";
	var zezim = new Sprite(spriteSheet);
	var scene = new Image();
	scene.src = "res/img/background2.png";
	window.addEventListener("keydown",keydownHandler,false);
	window.addEventListener("keyup",keyupHandler,false);
	
	function keydownHandler(e){
		switch(e.keyCode){
			case RIGHT:
				zezim.mvRight = true;
				zezim.mvLeft = false;
				zezim.mvUp = false;
				zezim.mvDown = false;
                new Audio("res/sound/Andar.mp3").play()
				break;
			case LEFT:
				zezim.mvRight = false;
				zezim.mvLeft = true;
				zezim.mvUp = false;
				zezim.mvDown = false;
                new Audio("res/sound/Andar.mp3").play()
				break;
			case UP:
				zezim.mvRight = false;
				zezim.mvLeft = false;
				zezim.mvUp = true;
				zezim.mvDown = false;
                new Audio("res/sound/Andar.mp3").play()
				break;
			case DOWN:
				zezim.mvRight = false;
				zezim.mvLeft = false;
				zezim.mvUp = false;
				zezim.mvDown = true;
                new Audio("res/sound/Andar.mp3").play()
				break;
		}
	}
	
	function keyupHandler(e){
		switch(e.keyCode){
			case RIGHT:
				zezim.mvRight = false;
				break;
			case LEFT:
				zezim.mvLeft = false;
				break;
			case UP:
				zezim.mvUp = false;
				break;
			case DOWN:
				zezim.mvDown = false;
				break;
		}
	}
	
	//Quano a imagem é carregada, o programa é iniciado
	spriteSheet.onload = function(){
		init();
		zezim.posX = zezim.posY = 150;
	}

	function init(){
		loop();
	}

	function update(){
		zezim.move();
	}

	function draw(){
		ctx.clearRect(0,0,cnv.width,cnv.height);
		ctx.drawImage(scene,0,0,scene.width,scene.height,0,0,scene.width,scene.height);
		zezim.draw(ctx);
	}

	function loop(){
		window,requestAnimationFrame(loop,cnv);
		update();
        som.play();
		draw();
	}
}
function Sprite(img){
	//Atributos ******
	this.mvLeft = this.mvUp = this.mvRight = this.mvDown = false;
	
	//Origem para captura da imagem a ser exibida
	this.srcX = this.srcY = 0;
	//Posição no canvas onde a figura será exibida
	this.posX = this.posY = 0;
	this.width = 24;
	this.height = 32;
	this.speed = 1;
	this.img = img;
	this.countAnim = 0;

	//Métodos *******
	//Desenha a figura
	this.draw = function(ctx){
		ctx.drawImage(	this.img,	//Imagem de origem
						//Captura da imagem
						this.srcX,	//Origem da captura no eixo X
						this.srcY,	//Origem da captura no eixo Y
						this.width,	//Largura da imagem que será capturada
						this.height,//Altura da imagem que será capturada
						//Exibição da imagem
						this.posX,	//Posição no eixo X onde a imagem será exibida 
						this.posY,	//Posição no eixo Y onde a imagem será exibida 
						this.width,	//Largura da imagem a ser exibida 
						this.height	//Altura da imagem a ser exibida 
					);
		this.animation();
	}

	//Move a figura
	this.move = function(){
		if(this.mvRight){
			this.posX += this.speed;
			this.srcY = this.height * 3; 
		} else
		if(this.mvLeft){
			this.posX -= this.speed;
			this.srcY = this.height * 2; 
		} else
		if(this.mvUp){
			this.posY -= this.speed;
			this.srcY = this.height * 1; 
		} else
		if(this.mvDown){
			this.posY += this.speed;
			this.srcY = this.height * 0; 
		}
	}
	
	//Anima a figura
	this.animation = function(){
		if(this.mvLeft || this.mvUp || this.mvRight || this.mvDown){
			//Caso qualquer seta seja pressionada, o contador de animação é incrementado
			this.countAnim++;
			if(this.countAnim >= 40){
				this.countAnim = 0;
			}
			this.srcX = Math.floor(this.countAnim / 5) * this.width;
		} else {
			//Caso nenhuma tecla seja pressionada, o contador de animação é zerado e a imagem do personagem parado é exibida
			this.srcX = 0;
			this.countAnim = 0;
		}
	}
}