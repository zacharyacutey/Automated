var DELAY = 5000;
var NICK = "SPAM";
var CHANNEL = "#chat";
var SERVER = "connorb.xyz";
var MESSAGE = "Pure blank canvases always bring me joy\nA sky waiting to be sprinkled with stars\nLike the innocent eyes of a young boy\nOr a field stretching unreachably far\nValant adventures anxious to be had\nPoems and songs screaming to be released\nHappy or fearful, nostalgic or sad\nCreativity should never be ceased\nThe world itself is you own blank canvas\nTo write or paint your own unique story\nTo believe that it's wired against us\nIs useless and unbearably boring\nAlthough I know it's difficult to see\nYour canvas is just what you want it to be";
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
