/**
 * Created by rlawk on 2017-08-07.
 */
var title;
var date;
var writer;
var write;

init('hello', '2017-12-13', 'admin', "w<b><i>wwwwwwwwwwwww<font color='#0000ff'>werijioejrgwn</font></i></b>");
putValue();


function init(db_title, db_date, db_writer, db_write){
    title=db_title;
    date=db_date;
    writer=db_writer;
    write=db_write;
}


function putValue(){
    alert("hello");
    $("#read_title").find('p').html('<br>' + title);
    $("#read_type").find('p').html('날짜: '+date);
    $("#read_date").find('p').html('작성자: '+ writer);
    var body = $("#read_board").contents().find('body');
    alert(write);
    alert(body.html());
    body.append(write);
}