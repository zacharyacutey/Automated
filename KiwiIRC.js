var DELAY = 5000;
var NICK = "SPAM";
var CHANNEL = "#chat";
var SERVER = "";
var MESSAGE = "SPAM";
var INTERVAL = 500;
var ITERATIONS = 20;
function wait(fn)
{
	window.setTimeout(fn,DELAY)
}
function spam_spam(window_)
{
	function wait3(fn)
	{
  		window_.setTimeout(fn,INTERVAL);
	}
	var MESSAGE="SPAM";
	var ITERATED = 0;
	function G(){
		if(ITERATIONS == ITERATED)
		{
  			return;
		}
		ITERATED += 1;
		window_.document.getElementsByTagName("textarea")[0].value=MESSAGE;
		window_.$(window_.document.getElementsByTagName("textarea")[0]).trigger({type: 'keydown', which: 13, keyCode: 13});
		wait3(G);
	}
	G();
}
var window1 = window.open("https://www.kiwiirc.com");
function spam(w) {
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
                            wait(function(){spam_spam(w);});

                        });
                    });
                });
            });
        });
    });
}
spam(window1);
