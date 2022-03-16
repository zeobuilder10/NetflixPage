function buttonLeft(){
    const button = document.getElementById('arrowLeft')

    button.onclick = function(){
        document.getElementById('carousel').scrollLeft -= 1500;
    }
}

function buttonRight(){
    const button = document.getElementById('arrowRight')

    button.onclick = function(){
        document.getElementById('carousel').scrollLeft += 1500;
    }
}