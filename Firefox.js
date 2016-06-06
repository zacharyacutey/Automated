var NICK = "Zachary";
var CHANNEL = "#chat";
var SERVER = ""; //Not showwing the server

var w = window.open("https://www.kiwiirc.com");
//Some wait time
w.document.getElementsByClassName("btn")[2].click();
//Some wait time

w.document.getElementById("server_select_nick").value = NICK;
//Some wait time
w.document.getElementById("server_select_channel").value = CHANNEL;
//Some wait time
w.document.getElementsByClassName("show_more")[0].click();
//Some wait time
w.document.getElementById("server_select_server").value = SERVER;
//Some wait time
w.document.getElementsByTagName("button")[0].click();
