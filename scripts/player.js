var Player = function (name, order) {
  this.name = name;
  this.order = order;
};

Player.prototype.equals = function (o) {
    return this.name === o.name;
};
