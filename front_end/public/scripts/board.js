/**
 * Created by rlawk on 2017-08-10.
 */
/**
 * Created by rlawk on 2017-07-29.
 */
var kinds;//어떤 법인지
var estateSize;
var crimSize;
var civilSize;
var db_nodes;//그법에 node 갯수
init();

function init(){
    var a = 123;//부동산 사건
    var b = 32;//형법 사건
    var c = 21;//민법 사건

    kinds=1;//각각에 맞는 번호로 우선 넣기 (부동산1, 형법2, 민법3)

    estateSize = a;
    crimSize = b;
    civilSize = c;

    //배열 생성(node수)(6)
    if(kinds==1)
        db_nodes = new Array(estateSize);
    else if(kinds==2)
        db_nodes = new Array(crimSize);
    else
        db_nodes = new Array(civilSize);

}


var slideIndex = 1;

showSlides(slideIndex);



function plusSlides(n){
    showSlides(slideIndex +=n);
    kinds+=n;
    if(kinds>3){kinds = 1;}
    if(kinds==0){kinds=3;}
    alert(kinds);
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

