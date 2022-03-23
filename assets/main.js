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
    const button = document.getElementById('arrowLeft1')

    button.onclick = function(){
        document.getElementById('carousel1').scrollLeft -= 1500;
    }
}

function buttonLeft2(){
    const button = document.getElementById('arrowLeft2')

    button.onclick = function(){
        document.getElementById('carousel2').scrollLeft -= 1500;
    }
}

function buttonLeft3(){
    const button = document.getElementById('arrowLeft3')

    button.onclick = function(){
        document.getElementById('carousel3').scrollLeft -= 1500;
    }
}

function buttonLeft4(){
    const button = document.getElementById('arrowLeft4')

    button.onclick = function(){
        document.getElementById('carousel4').scrollLeft -= 1500;
    }
}

function buttonLeft5(){
    const button = document.getElementById('arrowLeft5')

    button.onclick = function(){
        document.getElementById('carousel5').scrollLeft -= 1500;
    }
}

function buttonLeft6(){
    const button = document.getElementById('arrowLeft6')

    button.onclick = function(){
        document.getElementById('carousel6').scrollLeft -= 1500;
    }
}

function buttonLeft7(){
    const button = document.getElementById('arrowLeft7')

    button.onclick = function(){
        document.getElementById('carousel7').scrollLeft -= 1500;
    }
}

function buttonLeft8(){
    const button = document.getElementById('arrowLeft8')

    button.onclick = function(){
        document.getElementById('carousel8').scrollLeft -= 1500;
    }
}

function buttonLeft9(){
    const button = document.getElementById('arrowLeft9')

    button.onclick = function(){
        document.getElementById('carousel9').scrollLeft -= 1500;
    }
}



function buttonRight1(){
    const button = document.getElementById('arrowRight1')

    button.onclick = function(){
        document.getElementById('carousel1').scrollLeft += 1500;
    }
}

function buttonRight2(){
    const button = document.getElementById('arrowRight2')

    button.onclick = function(){
        document.getElementById('carousel2').scrollLeft += 1500;
    }
}

function buttonRight3(){
    const button = document.getElementById('arrowRight3')

    button.onclick = function(){
        document.getElementById('carousel3').scrollLeft += 1500;
    }
}

function buttonRight4(){
    const button = document.getElementById('arrowRight4')

    button.onclick = function(){
        document.getElementById('carousel4').scrollLeft += 1500;
    }
}

function buttonRight5(){
    const button = document.getElementById('arrowRight5')

    button.onclick = function(){
        document.getElementById('carousel5').scrollLeft += 1500;
    }
}

function buttonRight6(){
    const button = document.getElementById('arrowRight6')

    button.onclick = function(){
        document.getElementById('carousel6').scrollLeft += 1500;
    }
}

function buttonRight7(){
    const button = document.getElementById('arrowRight7')

    button.onclick = function(){
        document.getElementById('carousel7').scrollLeft += 1500;
    }
}

function buttonRight8(){
    const button = document.getElementById('arrowRight8')

    button.onclick = function(){
        document.getElementById('carousel8').scrollLeft += 1500;
    }
}

function buttonRight9(){
    const button = document.getElementById('arrowRight9')

    button.onclick = function(){
        document.getElementById('carousel9').scrollLeft += 1500;
    }
}