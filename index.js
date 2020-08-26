var slideIndex, slides, dots;

function initGallery(){
    slideIndex=0;
    slides=document.getElementsByClassName("image_holder");
    slides[slideIndex].style.opacity=1;

    dots=[];
    var dots_container = document.getElementById("dots_container"), i;

    for(var i=0; i<slides.length; i++){
        var dot=document.createElement("span");
        dot.classList.add("dots");
        dot.setAttribute("onclick","moveSlide("+i+")");
        dots_container.append(dot);
        dots.push(dot);
    }
    dots[slideIndex].classList.add("active");
}
initGallery();

function plusSlides(n) {
    moveSlide(slideIndex+n);
}

function moveSlide(n){
    var i;
    var current,next;
    var moveSlideAnimClass={
          forCurrent:"",
          forNext:""
    };

    if(n>slideIndex) {
        if(n >= slides.length){n=0;}
        moveSlideAnimClass.forCurrent="moveLeftCurrentSlide";
        moveSlideAnimClass.forNext="moveLeftNextSlide";
    }else if(n<slideIndex){
        if(n<0){n=slides.length-1;}
        moveSlideAnimClass.forCurrent="moveRightCurrentSlide";
        moveSlideAnimClass.forNext="moveRightPrevSlide";
    }

    if(n!=slideIndex){
        next = slides[n];
        current=slides[slideIndex];
        for (i = 0; i < slides.length; i++) {
            slides[i].className = "image_holder";
            slides[i].style.opacity=0;
            dots[i].classList.remove("active");
        }
        current.classList.add(moveSlideAnimClass.forCurrent);
        next.classList.add(moveSlideAnimClass.forNext);
        dots[n].classList.add("active");
        slideIndex=n;
    }
}

var timer=null;
function setTimer(){
    timer=setInterval(function () {
        plusSlides(1) ;
    },5000);
}
setTimer();