let arraytotal = [];
function game() {
    for (let i = 1; i <= 52; i++) {
        arraytotal.push(i);
        document.getElementById("result").innerHTML = arraytotal;
        arraytotal.sort(() => Math.random() - 0.5);
        document.getElementById("result").innerHTML = arraytotal;
    }
    // return arraytotal;
}
function chunk() {
    let array1 = [];
    let array2= [];
    for (let i = 1; i <= 26; i++) {
        array1.push(arraytotal[i]);
    }
    for (let i = 27; i <= 52; i++) {
        array2.push(arraytotal[i]);
    }
    document.getElementById("arr1").innerHTML = array1;
    document.getElementById("arr2").innerHTML = array2;
    score=[0,0];
    for(i=1;i<=26;i++) {
        if (array1[i] > array2[i]) {
            score[0] ++;
        }else {
            score[1]++;
        }
    }
    if(score[0] > score[1]){
        document.getElementById("result1").innerHTML="Người 1 là người chiến thắng";
    }else if(score[0]=score[1]){
        document.getElementById("result1").innerHTML="Hai người chơi hòa";
    }else {
        document.getElementById("result1").innerHTML="Người 2 là người chiến thắng";
    }
}




