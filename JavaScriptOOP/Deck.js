class Card
{
    constructor()
    {
        this.cards = [];
        var suits = ['Hearts', 'Clubs', 'Diamonds', 'Spades'];
        
        for(let i = 0; i < suits.length; i++)
        {
            var cardTypes = [
                {'name': 'Ace', 'value': '1'},
                {'name': 'Two', 'value': '2'},
                {'name': 'Three', 'value': '3'},
                {'name': 'Four', 'value': '4'},
                {'name': 'Five', 'value': '5'},
                {'name': 'Six', 'value': '6'},
                {'name': 'Seven', 'value': '7'},
                {'name': 'Eight', 'value': '8'},
                {'name': 'Nine', 'value': '9'},
                {'name': 'Ten', 'value': '10'},
                {'name': 'Jack', 'value': '11'},
                {'name': 'Queen', 'value': '12'},
                {'name': 'King', 'value': '13'}
            ];
            for(let p = 0; p < cardTypes.length; p++)
            {
                let newCard = cardTypes[p];
                newCard['suit'] = suits[i];
                this.cards.push(newCard);
            }
        }
    }

    show()
    {
        var random = Math.floor(Math.random() * this.cards.length);
        var card = this.cards[random];
        return card;
    }
}

class Deck {
	deckCards = new Card()
	constructor () {
		this.deck = this.deckCards.cards;
	}

	dealCard() {
		var rand = Math.floor(Math.random() * this.deck.length);
		var card = this.deck[rand];
		this.deck.splice(rand, 1);
		return card;
	}

	reset() {
		delete this.deck;
		var newDeck = new Deck()
		return newDeck.deck;
	}

	shuffle() {
		var count = this.deck.length;

		while (count) {
			var random = Math.floor(Math.random() * count--);
			var current = this.deck[count];
			this.deck[count] = this.deck[random];
			this.deck[random] = current;
		}
		return this.deck;
	}
}

class Player 
{
	allCards = new Deck()
	constructor(name) 
    {
		this.name = name;
		var count = 2;
		var hand = [];
		for (var i = 0; i < count; i++)
		{
			hand.push(this.allCards.dealCard());
			console.log("PUSHED " + hand[i]['name'] + " of " + hand[i].suit)
		}
		this.hand = hand;
	}

	discard() {
		var rand = Math.floor(Math.random() * this.hand.length);
		this.hand.splice(rand, 1);
		return this.hand;
	}

	take() {
		this.hand.push(this.allCards.dealCard());
		return this.hand;
	}
}

var card = new Card();
console.log(card.show())
var player = new Player("James");
player.take();
console.log(player.hand);
player.discard();
console.log(player.hand);
// console.log(player.hand[0]);
// console.log(player.take())
// player.take();