window.onload = choosePic;
window.onscroll = function() {scrollFunction()};

var action = new Array(
    "./assets/img/action/action1.jpg",
    "./assets/img/action/action2.jpg",
    "./assets/img/action/action3.jpg",
    "./assets/img/action/action4.jpg",
    "./assets/img/action/action5.jpg",
    "./assets/img/action/action6.webp",
    "./assets/img/action/action7.jpg",
    "./assets/img/action/action8.jpg",
);

var comedy = new Array(
    "./assets/img/comedy/comedy1.jpg",
    "./assets/img/comedy/comedy2.webp",
    "./assets/img/comedy/comedy3.jpg",
    "./assets/img/comedy/comedy4.webp",
    "./assets/img/comedy/comedy5.jpg",
    "./assets/img/comedy/comedy6.jpg",
    "./assets/img/comedy/comedy7.jpg",
    "./assets/img/comedy/comedy8.webp",
    "./assets/img/comedy/comedy9.jpg",
);

var voyage = new Array(
    "./assets/img/voyage/voyage1.jpg",
    "./assets/img/voyage/voyage2.jpg",
    "./assets/img/voyage/voyage3.jpg",
    "./assets/img/voyage/voyage4.jpg",
    "./assets/img/voyage/voyage5.jpg",
    "./assets/img/voyage/voyage6.jpg",
    "./assets/img/voyage/voyage7.jpg",
    "./assets/img/voyage/voyage8.webp",
);

function choosePic() {
    for (let i = 1; i < 11; i++) {
        var randomNum = Math.floor(Math.random() * action.length);
        document.getElementById("actionPic" + i.toString()).src = action[randomNum];
    }
    for (let i = 1; i < 11; i++) {
        var randomNum = Math.floor(Math.random() * comedy.length);
        document.getElementById("comedyPic" + i.toString()).src = comedy[randomNum];
    }
    for (let i = 1; i < 11; i++) {
        var randomNum = Math.floor(Math.random() * voyage.length);
        document.getElementById("voyagePic" + i.toString()).src = voyage[randomNum];
    }
}

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      document.getElementById("header").style.backgroundColor = "black";
    } else {
      document.getElementById("header").style.backgroundColor = "transparent";
    }
}

function videoPlay() {
    document.getElementById("backgroundI").style.visibility = "hidden"
    document.getElementById("backgroundV").play()
}

function videoStop() {
    document.getElementById("backgroundI").style.visibility = "visible"
    document.getElementById("backgroundV").pause()
}

/* this is a stupid solution but at this point i'm running on 5h of sleep per day and i just can't
keep up so that's that */

function buttonLeft1(){
    document.getElementById('carousel1').scrollLeft -= 1500;
}

function buttonLeft2(){
    document.getElementById('carousel2').scrollLeft -= 1500;
}

function buttonLeft3(){
    document.getElementById('carousel3').scrollLeft -= 1500;
}

function buttonLeft4(){
    document.getElementById('carousel4').scrollLeft -= 1500;
}

function buttonLeft5(){
    document.getElementById('carousel5').scrollLeft -= 1500;
}

function buttonLeft6(){
    document.getElementById('carousel6').scrollLeft -= 1500;
}

function buttonLeft7(){
    document.getElementById('carousel7').scrollLeft -= 1500;
}

function buttonLeft8(){
    document.getElementById('carousel8').scrollLeft -= 1500;
}

function buttonLeft9(){
    document.getElementById('carousel9').scrollLeft -= 1500;
}



function buttonRight1(){
        document.getElementById('carousel1').scrollLeft += 1500;
}

function buttonRight2(){
    document.getElementById('carousel2').scrollLeft += 1500;
}

function buttonRight3(){
    document.getElementById('carousel3').scrollLeft += 1500;
}

function buttonRight4(){
    document.getElementById('carousel4').scrollLeft += 1500;
}

function buttonRight5(){
    document.getElementById('carousel5').scrollLeft += 1500;
}

function buttonRight6(){
    document.getElementById('carousel6').scrollLeft += 1500;
}

function buttonRight7(){
    document.getElementById('carousel7').scrollLeft += 1500;
}

function buttonRight8(){
    document.getElementById('carousel8').scrollLeft += 1500;
}

function buttonRight9(){
    document.getElementById('carousel9').scrollLeft += 1500;
}


/* changing the images on hover de la pire des manières possible une meilleur facon de faire
   serais d'utiliser l'élément <video> avec un poster qui s'afficherais si elle n'est pas 
   hover, cependant je ne peut pas travailler après 17h aujourd'hui */
   
function imageHover1() {
    document.getElementById("image1-1").src = "./assets/img/video/monkey1.gif"
}
function imageOut1() {
    document.getElementById("image1-1").src = "./assets/img/thumbnails/Content_1.jpg"
}

function imageHover2() {
    document.getElementById("image1-2").src = "./assets/img/video/monkey2.gif"
}
function imageOut2() {
    document.getElementById("image1-2").src = "./assets/img/thumbnails/Content_2.jpg"
}

function imageHover3() {
    document.getElementById("image1-3").src = "./assets/img/video/monkey3.gif"
}
function imageOut3() {
    document.getElementById("image1-3").src = "./assets/img/thumbnails/Content_4.jpg"
}

function imageHover4() {
    document.getElementById("image1-4").src = "./assets/img/video/monkey4.gif"
}
function imageOut4() {
    document.getElementById("image1-4").src = "./assets/img/thumbnails/Content_9.jpg"
}

function imageHover5() {
    
}

function imageHover6() {
    
}

function imageHover7() {
    
}

function imageHover8() {
    
}

function imageHover9() {
    
}

function imageHover10() {
    
}