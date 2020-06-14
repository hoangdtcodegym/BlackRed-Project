class Desk {
    constructor() {
        this.cards = [];
        this.creatDesk();
        this.shuffleDesk();
    }

    addCard(card){
        this.cards.push(card);
    }

    creatDesk(){
        for (let i = 0; i < Config.DECK.length; i++) {
            for (let j = 0; j < Config.CARD_SUIT.length; j++) {
                let id = (i*10)+j;
                let card = new Card(id,Config.DECK[i],Config.CARD_SUIT[j]);
                card.init();
                this.addCard(card);
            }
        }
        console.log(this.cards);
    }

    shuffleDesk(){
        for (let i = 0; i < this.cards.length; i++) {
            let ran = Math.floor(Math.random()*this.cards.length);
            let temp = this.cards[i];
            this.cards[i] = this.cards[ran];
            this.cards[ran] = temp;
        }
    }

    dealCard(number){
        let cards = [];
        for (let i = 0; i < number; i++) {
            cards.push(this.cards.shift());
        }
        return cards;
    }


}