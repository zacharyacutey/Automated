function wait(fn)
{
  window.setTimeout(fn,3000);
}
function wait2(fn)
{
  window.setTimeout(fn,10);
}
var NICK="SPAM";
var CHANNEL="#chat";
var SERVER="connorb.xyz";
var MESSAGE="SPAM";
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
wait(g=function(){
w.document.getElementsByTagName("textarea")[0].value=MESSAGE;
w.$(w.document.getElementsByTagName("textarea")).trigger({type: 'keydown', which: 13, keyCode: 13});
wait2(g);// For spamming
});
});
});
});
});
});
});
