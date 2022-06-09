/**
 * @author Hernan David Velasquez Meriño 
 * Función que contiene el tiempo, el movimiento, la barra de movimiento, ancho y alto 
 * que puden tener los jugadores.
 */

(function(){
    self.Board = function(width,height){
  this.width = width;
  this.height = height;
  this.playing = false;
  this.game_over = false;
  this.bars = [];
  this.ball = null;
  this.playing = false;
 }
 /**
 * Metodo que retorna las barras que se encargan de emular 
 * las raquetas de pinpom
 */
  self.Board.prototype = { 
    get elements(){
     var elements = this.bars.map(function(bar){
      return bar;
     });
     elements.push(this.ball);
     return elements;
    }
   }
})();

/**
 * función creada para indicar movimiento, 
 * radio y velocidad de la pelota, 
 * además la dirección de la misma 
 */

(function(){
 self.Ball = function(x,y,radius,board){
  this.x = x;
  this.y = y;
  this.radius = radius;
  this.speed_y = 0;
  this.speed_x = 3;
  this.board = board;
  this.direction = 1;
  this.bounce_angle = 0;
  this.max_bounce_angle = Math.PI / 12;
  this.speed = 3;

  board.ball = this;
  this.kind = "circle";
 }

 /**
 * función encargada de asignar la direccion de las barras
 */

 self.Ball.prototype = {
   move: function(){
      this.x += (this.speed_x * this.direction);
      this.y += (this.speed_y);

   },
   get width(){
    return this.radius * 2;

   },
   get height(){
    return this.radius * 2;

   },

 /**
 * En esta Función de Coalision se indica el momento del choque de dos elementos, es decir,
 * cuando la bola se cruza con la raqueta o barra lateral
 */

   collision: function(bar){
    
    var relative_intersect_y = ( bar.y + (bar.height / 2) ) - this.y;

    var normalized_intersect_y = relative_intersect_y / (bar.height / 2);

    this.bounce_angle = normalized_intersect_y * this.max_bounce_angle;

    this.speed_y = this.speed * -Math.sin(this.bounce_angle);
    this.speed_x = this.speed * Math.cos(this.bounce_angle);

    if (this.x > (this.board.width / 2)) this.direction = -1;
    else this.direction = 1;

   }
  }
})();

/**
 * Función que encargada de mostrar la pisicion, 
 * el tipo el ancho y alto de las Barras, además de su velocidad
 * le define una posición X y Y dentro del tablero
 */
 (function(){
    self.Bar = function(x,y,width,height,board){
     this.x = x;
     this.y = y;
     this.width = width;
     this.height = height;
     this.board = board;
     this.board.bars.push(this);
     this.kind = "rectangle";
     this.speed = 10;
    }
   
    self.Bar.prototype = {
     down: function(){
      this.y += this.speed;
   
     },
     up: function(){
      this.y -= this.speed;
     },
     toString: function(){
      return "x: "+ this.x +"y: "+ this.y ;
     }
    }
 })();
   