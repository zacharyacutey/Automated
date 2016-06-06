var NOT_OVER = true;
function wait()
{
  window.setTimeout(function(){NOT_OVER=false;},5000);
  while(NOT_OVER)
  {
    
  }
  NOT_OVER = true;
}

var NICK = "Zachary";
var CHANNEL = "#chat";
var SERVER = ""; //Not showwing the server

var w = window.open("https://www.kiwiirc.com");
wait();
w.document.getElementsByClassName("btn")[2].click();
wait();

w.document.getElementById("server_select_nick").value = NICK;
wait();
w.document.getElementById("server_select_channel").value = CHANNEL;
wait();
w.document.getElementsByClassName("show_more")[0].click();
wait();
w.document.getElementById("server_select_server").value = SERVER;
wait();
w.document.getElementsByTagName("button")[0].click();
