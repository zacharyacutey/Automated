function wait2(fn)
{
  window.setTimeout(fn,250);
}
var MESSAGE = "";
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
