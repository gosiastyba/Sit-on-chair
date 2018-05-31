document.addEventListener("DOMContentLoaded", function () {

    //slider

    var leftBtn = document.querySelector('div.sliderArrowLeft');
    var rightBtn = document.querySelector('div.sliderArrowRight');
    var imgLi = document.querySelectorAll('div.sliderChair ul li');

    var index = 0;

    imgLi[index].style.display = "initial";

    leftBtn.addEventListener("click", function () {
        imgLi[index].style.display = "none";
        index--;
        if (index < 0) {
            index = imgLi.length - 1;
        }
        imgLi[index].style.display = "initial";
    });

    rightBtn.addEventListener("click", function () {
        imgLi[index].style.display = "none";
        index++;
        if (index >= imgLi.length) {
            index = 0;
        }
        imgLi[index].style.display = "initial";
    });
});

