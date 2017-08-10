/**
 * Created by rlawk on 2017-07-23.
 */
src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"



function pass_value(){
    var getval=$('#write_board').contents().find('body').html();
    document.getElementById("send_board").innerText=getval;
    alert($('#write_board').contents().find('body').html());
    alert(document.getElementById("send_board"));
}