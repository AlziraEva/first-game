
let cat
let pave
let sandbox

let size = 64

let paceX = 0
let paceY = 0
let speed = 64

let restart 

function setup() {
  createCanvas(576, 576)
  cat= loadImage('cat.png')
  pave= loadImage('piso2.png')
  sandbox= loadImage('caixa areia.png')
}

function draw() {
  if (paceX < 0){
      paceX = 0
      }
  
  if (paceY < 0){
      paceY = 0
      }
  
  if (paceX > size * 8){
      paceX = size * 8
      }
  
  if (paceY > size * 8){
        paceY = size * 8
      }
  
  background(220)
  for(let i=0; i < 9; i++){
  for(let j=0; j < 9; j++) 
  {image(pave, size * i, size * j, size, size)
  }
  image(sandbox, 512, 512, size, size)
  image(cat, paceX, paceY, size, size) } 
 
  
  if (paceX === size * 7 && paceY === size * 8 ||
      paceX === size * 8 && paceY === size * 7){
    image(sandbox, 230, 300, 100, 100)
    textSize(35)
    text('Ganhou !!!', 200, 250)
   
  restart = createButton('Reiniciar')
  restart.mousePressed(reset)
    noLoop()
    }}

function reset (){
  paceX = 0
  paceY = 0
  restart.remove()
  loop()
}

function keyPressed(){
  if(keyIsDown(UP_ARROW)){
    paceY -= speed
  }
  if(keyIsDown(DOWN_ARROW)){
    paceY += speed
  }
  if(keyIsDown(LEFT_ARROW)){
    paceX -= speed
  }
  if(keyIsDown(RIGHT_ARROW)){
    paceX += speed
}}