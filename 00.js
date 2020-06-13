const butt = document.getElementById("Button");
    let   div = document.getElementsByTagName("div"),
    i=-2;
console.log(div[0]);
butt.onclick = function () {
    i++
    for (let m=0; m<5; m++){
        div[m].style.backgroundColor="green";
    }
    if (i>4){
        i=0;
    }
    if (i>=0){
        div[i].style.backgroundColor="red";
    }
}
