var Player = function (name, order, deck) {
  this.name = name;
  this.order = order;
  this.deck = deck;
  this.hand = this.deck.starting_hand();

  console.log("STARTING HAND:");
  console.log(this.hand);
};

Player.prototype.equals = function (o) {
    return this.name === o.name;
};
