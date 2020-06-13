let
one = document.getElementById("one"),
two = document.getElementById("two"),
three = document.getElementById("three"),
cont = document.getElementById("container"),
    random,
    randomm,
    randommm;
one.style.width = "1000px";
one.style.height = "20px";
two.style.width = "1000px";
two.style.height = "20px";
three.style.width = "1000px";
three.style.height = "20px";
setInterval(function () {
    let div = [one, two, three];
    do {random = Math.floor(Math.random()*3),
        randomm= Math.floor(Math.random()*3);
        randommm = Math.floor(Math.random()*3);
    }while (randomm===random || randomm===randommm || random === randommm);
    cont.removeChild(one);
    cont.removeChild(two);
    cont.removeChild(three);
    cont.appendChild(div[randommm]);
    cont.appendChild(div[randomm]);
    cont.appendChild(div[random]);
 }, 1000)