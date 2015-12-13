var Deck = function () {
  this.num_cards = 30;
  this.starting_cards = 3;

  this.cards = this.generate_cards();
  console.log(this.cards);
};

Deck.prototype.generate_cards = function () {
  var cards = [];
  for (var i = 0; i < this.num_cards; i+=1){
    cards[i] = this.random_card();
  }
  return cards;
};

Deck.prototype.random_card = function () {
  var random_index = Math.floor((Math.random() * cards.length));
  return cards[random_index];
};


Deck.prototype.starting_hand = function () {
};

var cards = [
  {
    name: "squire",
    health: 2,
    attack: 1
  },
  {
    name: "archer",
    health: 1,
    attack: 3
  },
  {
    name: "knight",
    health: 4,
    attack: 4
  },
  {
    name: "royal_butcher",
    health: 5,
    attack: 3
  },
  {
    name: "sinister_queen",
    health: 5,
    attack: 7
  },
  {
    name: "dark_king",
    health: 8,
    attack: 8
  }
];
