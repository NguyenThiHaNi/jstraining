var k = 10;
function count(n){
    if (n <= 0)
    return;
    console.log(n);
    setTimeout(()=>{
        count(n - 1);
    }, 1000);
}
count(k); 


function time(){
    var today = new Date;
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = check(m);
    s = check(s);
    document.getElementById("countdown").innerHTML = h + ":" + m + ":" + s;
    setTimeout (time, 1000);
}
function check(i) {
        return i < 10 ? "0" + i : i;
}
time()
