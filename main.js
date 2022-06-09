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