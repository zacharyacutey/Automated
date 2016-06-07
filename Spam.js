function wait2(fn)
{
  window.setTimeout(fn,250);
}
var MESSAGE = "Pure blank canvases always bring me joy\n\
A sky waiting to be sprinkled with stars\n\
Like the innocent eyes of a young boy\n\
Or a field stretching unreachably far\n\
Valant adventures anxious to be had\n\
Poems and songs screaming to be released\n\
Happy or fearful, nostalgic or sad\n\
Creativity should never be ceased\n\
The world itself is you own blank canvas\n\
To write or paint your own unique story\n\
To believe that it's wired against us\n\
Is useless and unbearably boring\n\
Although I know it's difficult to see\n\
Your canvas is just what you want it to be";
var ITERATIONS = 20;
var ITERATED = 0;
function g(){
if(ITERATIONS == ITERATED)
{
  return;
}
ITERATED += 1;
window.document.getElementsByTagName("textarea")[0].value=MESSAGE;
window.$(window.document.getElementsByTagName("textarea")[0]).trigger({type: 'keydown', which: 13, keyCode: 13});
wait2(g);
}
g();
