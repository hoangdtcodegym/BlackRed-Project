let cards = [];
function dealCard() {
    returnCard();
    cards = game.dealCard(5);
    console.log(cards)
    let html = '';
    for (let i = 0; i < cards.length; i++) {
        html += cards[i].getHtml();
    }
    display('desk',html);
}

function returnCard() {
    for (let i = 0; i < cards.length; i++) {
        game.addCard(cards[i]);
    }
    let html='';
    display('desk',html);
}

function display(elementId,content) {
    document.getElementById(elementId).innerHTML = content;
}
