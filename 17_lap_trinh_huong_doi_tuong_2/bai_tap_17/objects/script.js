/**
 * Created by nhatnk on 4/26/17.
 */

function Hero(image, top, left,down, size, speed){
  this.image = image;
  this.top = top;
  this.left = left;
  this.down = down;
  this.size = size;
  this.speed = speed
  this.getHeroElement = function(){
    return '<img width="'+ this.size + '"' +
      ' height="'+ this.size + '"' +
      ' src="' + this.image +'"' +
      ' style="top: '+this.top+'px; left:'+this.left+'px;position:absolute;right: '+this.right+'px"; />';
  }

  this.moveRight = function(){
    this.left += speed;
    console.log('ok: ' + this.left);
  }
  this.moveLeft = function(){
    this.right += speed;
    console.log('ok down: ' + this.down);
  }

}

var hero = new Hero('download.jpg', 20, 30, 30,200,100);

function start(){
  if(hero.left < window.innerWidth - hero.size){
    hero.moveRight();
  }
  if(hero.left >= window.innerWidth - hero.size){
    hero.moveLeft();
  }
  document.getElementById('game').innerHTML = hero.getHeroElement();
  setTimeout(start, 500)
}
start();