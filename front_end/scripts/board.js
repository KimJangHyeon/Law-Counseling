/**
 * Created by rlawk on 2017-07-29.
 */
var estateSize;
var crimSize;
var civilSize;

init();

function init(){
    var a = 123;
    var b = 32;
    var c = 21;

    estateSize = a;
    crimSize = b;
    civilSize = c;
}


var slideIndex = 1;

showSlides(slideIndex);



function plusSlides(n){
    showSlides(slideIndex +=n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}





function showSlides(n) {
    var numberNode = 0;
    var numberPage = 0;
  var i;
  var slides = document.getElementsByClassName("board_title");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";

  /////////////
    if(slideIndex == 1){
        numberNode = estateSize;
        alert(estateSize);
                alert(numberNode);
    } else if (slideIndex==2){
        numberNode = crimSize;
                alert(numberNode);
    } else {
        numberNode = civilSize;
                alert(numberNode);
    }

    numberPage = numberNode/10;

    var li = document.createElement('li');

    for( i = 0 ; i<numberPage;i++) {
        li.innerHTML += '<li class="paging_block"><a class="paging_a" href="#">' + (i + 1) + '</a></li>';
    }


    alert(numberPage);
    alert(li.innerHTML);
    $('.pagination').empty();
    document.getElementById('pageShow').appendChild(li);
}


