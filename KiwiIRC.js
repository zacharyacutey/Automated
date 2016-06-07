//To import JQuery: var script = document.createElement('script');script.src = "https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js";document.getElementsByTagName('head')[0].appendChild(script);

function wait(fn) {
  window.setTimeout(fn,5000);
}

function wait2(fn) {
  window.setInterval(fn,500);
}

function g(w) {
		w.document.getElementsByTagName("textarea")[0].value=MESSAGE;

		w.$(w.document.getElementsByTagName("textarea")[0]).trigger({type: 'keydown', which: 13, keyCode: 13});

		wait2(g);
}
function spam_spam(window_)
{
	function wait3(fn)
	{
  		window_.setTimeout(fn,250);
	}
	var MESSAGE="SPAM";
	var ITERATIONS = 20;
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
var NICK = "SPAM";
var CHANNEL = "#chat";
var SERVER = "connorb.xyz";
var MESSAGE = "SPAM";

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
