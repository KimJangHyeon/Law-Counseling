/**
 * Created by rlawk on 2017-07-29.
 */
var estateSize;
var crimSize;
var civilSize;
var db_nodes;
init();

function init(){
    var a = 123;//부동산 사건
    var b = 32;//형법 사건
    var c = 21;//민법 사건

    estateSize = a;
    crimSize = b;
    civilSize = c;

    //배열 생성
    db_nodes =new Array();
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
        li.innerHTML += '<li class="paging_block text-center"><a class="paging_a text-center"  href="?index='+(i+1)+'">' + (i + 1) + '</a></li>';
    }


    alert(numberPage);
    alert(li.innerHTML);
    $('.pagination').empty();
    document.getElementById('pageShow').appendChild(li);
    /////////////////////////////
    // $('#pageShow li').click(function(){
    //     $("#pageShow li").
    // })
}


function go_read(path){

}

