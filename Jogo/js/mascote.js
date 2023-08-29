let yMascote = 360;
let xMascote = 70;
let meusPontos = 0;
let colisao = false;





function verificaColisao() {
    for (let i = 0; i < imagensCarros.length; i++) {
        colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarros, alturaCarros, xMascote, yMascote, 7);
        if (colisao) {

            yMascote = 360
            if (meusPontos > 0) {
                meusPontos -= 1;
            }
        }
    }
    
print('Colisão acontecendo', colisao);

}

function tiraPonto() {
    yMascote = 360  
}



function mostrarMascote() {
    image(imagemMascote, xMascote, yMascote, 70, 40);   
}

function incluirPontos() {
    text(meusPontos, 20,25)
    fill(color(252,15,192))
    textSize(21)

    if (yMascote < 0){
        yMascote = 360;
        meusPontos ++;
    }
}




function movimentoMascote() {
    if(keyIsDown(UP_ARROW)){
        yMascote -=3;

        //imagemMascote = loadImage("img/hellokittyfrente.png")
    }
    
    if(keyIsDown(DOWN_ARROW)){
            yMascote +=3;

            //imagemMascote = loadImage("img/helloparada.png")
        }

    if(keyIsDown(RIGHT_ARROW)){
            xMascote +=3;

            //imagemMascote = loadImage("img/hellodireita.png")
        }

    if(keyIsDown(LEFT_ARROW)){
            xMascote -=3;

            //imagemMascote = loadImage("img/HelloKittyEsquerda.png")
        }
  
        
}


