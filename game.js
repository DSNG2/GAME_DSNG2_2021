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