let BoBai=[];
let Play1=[];
let Play2=[];
let Result=[0,0];
function resetBoBai() {
    BoBai=[];
    Play1=[];
    Play2=[];
    Result=[0,0];
    for(let i=1;i<=52;i++){
        BoBai.push(i);
    }
    printPlay(BoBai,Play1,Play2);
}

function swap(arr,i,j) {
    let temp=arr[i];
    arr[i]=arr[j];
    arr[j]=temp;
}
function xaoBai(numberSwap) {
    let randomPos1;
    let randomPos2;
    for(let i=0; i< numberSwap;i++) {
        randomPos1= Math.floor(Math.random() * 52);
        randomPos2= Math.floor(Math.random()*52);
        if(randomPos1 != randomPos2 && BoBai.length ==52){
            swap(BoBai,randomPos1,randomPos2)
        }
    }
    //document.getElementById("deckCard").innerHTML=BoBai.toString();
    printPlay(BoBai,Play1,Play2);
}
function chiaBai() {
    if(BoBai.length==52){
        while(BoBai.length>=2){
            Play1.push(BoBai.pop());
            Play2.push(BoBai.pop());
        }
        printPlay(BoBai,Play1,Play2);
    }
}

function printPlay(deckCard, player1, player2) {
    document.getElementById("play1").innerHTML=player1.toString();
    document.getElementById("play2").innerHTML=player2.toString();
    document.getElementById("deckCard").innerHTML=deckCard.toString();
    document.getElementById("result").innerText="";
}

function soSanh(){
    if(Play1.length==26 && Play2.length==26){
        for(let i=0;i<26;i++){
            if(Play1[i] > Play2[i]){
                Result[0]+=1;
            }else{
                Result[1]+=1;
            }
        }
        winLose(Result);
    }
}
function winLose(result) {
    if(result.length==2){
        if(result[0]> result[1]){
            document.getElementById("result").innerHTML="Player 1: "+ result[0] + " Điểm | Player 2: "+
                result[1] + " Điểm  <span style='color: blue'>Player 1 WIN WIN WIN !!!</span>";
        }else if(result[0] < result[1]){
            document.getElementById("result").innerHTML="Player 1: "+ result[0] + " Điểm | Player 2: "+
                result[1] + " Điểm |  <span style='color: blue'>Player 2 WIN WIN WIN !!!</span>";
        }else{
            document.getElementById("result").innerHTML="Player 1: "+ result[0] + " Điểm | Player 2: "+
                result[1] + " Điểm | <span style='color: blue'>HÒA HÒA HÒA !!!</span>";
        }
    }
}
