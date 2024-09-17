let as = new Array ();
let i = 1
for (; i <=52; i++) {
    as.push(i)
};
let s = as.sort(func);

function func() {
    return 0.5 - Math.random();
}

let nguoi1 = new Array ();
let nguoi2 = new Array();
let a = 0
for (; a <= 51; a++) {
    if (a % 2 == 0) {
    nguoi1.push(s[a])
}
    else {
    nguoi2.push(s[a])}
}
document.write("Bài của người chơi 1: " + nguoi1 + "<br/>");
document.write("Bài của người chơi 2: " + nguoi2)
let b = 0;
let c = 0;
for(; b <= 25; b++ ) {
    if (nguoi1[b] > nguoi2[b]) {
        c++
    }
}
alert ("so bai 1 lon hon 2 " + c)
if (c > 13) {
    alert("nguoi choi 1 thang")
} else if (c == 13) {
    alert("2 nguoi choi hoa")
} else {
    alert("nguoi choi 2 thang")
}