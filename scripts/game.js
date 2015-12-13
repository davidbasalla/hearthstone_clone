var Game = function (width, height) {
  this.width = width;
  this.height = height;

  this.player1 = new Player("David", 1);
  this.player2 = new Player("Marian", 2);

  this.turn_duration = 2000;
};

Game.prototype.start = function(){
  console.log("Start game loop");
  this.start_round(this.player1);
};

Game.prototype.next_player = function(current_player){
  if (current_player.equals(this.player1)){
    return this.player2;
  }
  else {
    return this.player1;
  }
};

Game.prototype.start_round = function(player){
  console.log("START ROUND FOR " + player.name);

  var _this = this;
  var round_finished = function(){
    console.log("TURN OVER");
    _this.start_round(_this.next_player(player));
  };

  myVar = setTimeout(round_finished, this.turn_duration);
};

