class Poker {
    static onePair = "One Pair";//2
    static twoPair = "Two Pair";
    static threeOfAKind = "Three of A Kind";//3
    static straights = "Straight";//5
    static flush = "Flush";
    static fullHouse = "Full House";
    static fourOfAKind = "Four of A Kind";
    static straightFlush = "Straight Flush";
    static royalFlush = "Royal Flush";

    static getSameValue(card1, card2){
        return card1.value === card2.value;
    }
    static getSameSuit(card1,card2){
        return card1.suit === card2.suit;
    }

    static checkFiveCards(cards) {
        let arr = cards.sort();
    }
    static checkFullHouse(cards){
        let result = [];
        cards.forEach(function (index) {
            result[index-1] = (result[index-1] || 0)+1;
        });
        console.log(result.length);
    }

}

// Poker.checkFullHouse([1,1,1,2,2,4,3]);