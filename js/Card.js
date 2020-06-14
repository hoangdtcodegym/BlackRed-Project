class Card {
    constructor(id,value,suit) {
        this.id = id;
        this.status = false;
        this.name = "card";
        this.value = value;
        this.suit = suit;
        this.img = '';
        this.defaultImg = 'card_deck/cardback.jpg';
    }

    init(){
        this.name = this.value+this.suit;
        this.img = this.name+'.jpg';
    }

    getHtml(){
        let html = `<img src="card_deck/${this.img}"/>`;
        return html;
    }
}