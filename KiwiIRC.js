function wait(fn)
{
  window.setTimeout(fn,5000);
}
function wait2(fn)
{
  window.setTimeout(fn,100);
}
function g(){
w.document.getElementsByTagName("textarea")[0].value=MESSAGE;
w.$(w.document.getElementsByTagName("textarea")[0]).trigger({type: 'keydown', which: 13, keyCode: 13});
wait2(g);// For spamming
}
var NICK="SPAM";
var CHANNEL="#chat";
var SERVER="";
var MESSAGE="SPAM";
var g;
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
wait(g);
});
});
});
});
});
});
