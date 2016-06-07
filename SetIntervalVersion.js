function wait(fn)
{
  window.setTimeout(fn,5000);
}
function wait2(fn)
{
  w.window.setTimeout(fn,500);
}
var INTERVAL;
var NICK="SPAM";
var CHANNEL="#chat";
var SERVER="";
var MESSAGE="SPAM";
var ITERATIONS = 100;
var ITERATED = 0;
function g(){
if(ITERATIONS == ITERATED)
{
  window.clearInterval(INTERVAL);
  return;
}
ITERATED += 1;
w.document.getElementsByTagName("textarea")[0].value=MESSAGE;
w.$(w.document.getElementsByTagName("textarea")[0]).trigger({type: 'keydown', which: 13, keyCode: 13});
}

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
INTERVAL = window.setInterval(g,500);
});
});
});
});
});
});
