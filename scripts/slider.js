window.onload = function() {

    var slider1 = new Slider({
        images: '.slider img',
        btnPrev: '.slider .prev',
        btnNext: '.slider .next',
        auto: false
    });

}

function Slider(obj) {

    this.images = document.querySelectorAll(obj.images);
    this.auto = obj.auto;
    this.btnPrev = obj.btnPrev;
    this.btnNext = obj.btnNext;
    this.rate = obj.rate || 1000;

    var i = 0;
    var slider = this;

    this.prev = function () {
        slider.images[i].classList.remove('shown');
        i--;

        if (i < 0) {
            i = slider.images.length - 1;
        }

        slider.images[i].classList.add('shown');
    }

    this.next = function () {
        slider.images[i].classList.remove('shown');
        i++;

        if (i >= slider.images.length) {
            i = 0;
        }

        slider.images[i].classList.add('shown');
    }

    document.querySelector(slider.btnPrev).onclick = slider.prev;
    document.querySelector(slider.btnNext).onclick = slider.next;

    if (slider.auto)  {
        setInterval(slider.next, slider.rate);
    }
};


var slideIndex = 1;

var myTimer;

var slideshowContainer;

window.addEventListener("load",function() {
    showSlides(slideIndex);
    myTimer = setInterval(function(){plusSlides(1)}, 4000);

    //COMMENT OUT THE LINE BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME
    slideshowContainer = document.getElementsByClassName('slideshow-inner')[0];

    //UNCOMMENT OUT THE LINE BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME
    // slideshowContainer = document.getElementsByClassName('slideshow-container')[0];

    slideshowContainer.addEventListener('mouseenter', pause)
    slideshowContainer.addEventListener('mouseleave', resume)
})

// NEXT AND PREVIOUS CONTROL
function plusSlides(n){
    clearInterval(myTimer);
    if (n < 0){
        showSlides(slideIndex -= 1);
    } else {
        showSlides(slideIndex += 1);
    }

    //COMMENT OUT THE LINES BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME

    if (n === -1){
        myTimer = setInterval(function(){plusSlides(n + 2)}, 4000);
    } else {
        myTimer = setInterval(function(){plusSlides(n + 1)}, 4000);
    }
}

//Controls the current slide and resets interval if needed
function currentSlide(n){
    clearInterval(myTimer);
    myTimer = setInterval(function(){plusSlides(n + 1)}, 4000);
    showSlides(slideIndex = n);
}

function showSlides(n){
    var i;
    var slides = document.getElementsByClassName("textTrombi");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "inline-block";
    dots[slideIndex-1].className += " active";
}

pause = () => {
    clearInterval(myTimer);
}

resume = () =>{
    clearInterval(myTimer);
    myTimer = setInterval(function(){plusSlides(slideIndex)}, 4000);
}