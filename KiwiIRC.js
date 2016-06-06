function wait(fn)
{
  window.setTimeout(fn,3000);
}
var NICK;
var CHANNEL;
var SERVER;

var w = window.open("https://www.kiwiirc.com");
wait(function(){
w.document.getElementsByClassName("btn")[2].click();
wait(function(){

w.document.getElementById("server_select_nick").value = NICK;
wait(function(){
w.document.getElementById("server_select_channel").value = CHANNEL;
wait(function(){
w.document.getElementsByClassName("show_more")[0].click();
wait(function(){
w.document.getElementById("server_select_server").value = SERVER;
wait(function(){
w.document.getElementsByTagName("button")[0].click();
});
});
});
});
});
});
