//Task number 1.

var a = (3);
var b = (10);
document.write("This is first variable:", a, "<br>");
document.write("This is second variable:", b, "<br>");

//Task number 2.

function Trangle(a, b) {
	var s = (0.5 * a * b);
	document.write("<br>",s);
}
Trangle(a, b);

//Task number 3.

//Basic variables
var rev=["one","two","three","four","five"];

//Var 1 with "while"

document.write("<br>");
function rev1(){
	var x=rev.length;
	while (x > 0) {
		x --
		var y=rev[x];
		document.write("<br>",y);
	}
}
rev1();

//Var 2 with "do while"

document.write("<br>")
function rev2(){
	var x=rev.length;
	do {
		x--
		var y=rev[x];
		document.write("<br>",y);
	} while(x>0);
}
rev2();

//Var 3 with "for"

document.write("<br>")
function rev3(){
	for (var x=rev.length - 1; x >= 0; x--) {
		var y=rev[x];
		document.write("<br>",y);
	}
}
rev3();

//Task number 4.

document.write("<br>");

function pre(){
	var v = 1;
	var i = ++v;
	document.write("<br>","Here \"++\" before variable which = 1:","<br>", i);
}
pre();

document.write("<br>");

function pre1(){
	var v = 1;
	var i = v++;
	document.write("<br>","Here \"++\" after variable which = 1:","<br>", i);
}
pre1();

document.write("<br><br>","You can see what both operations which add \"++\" before and after variable returns different values","<br>","Second operation return the old value")

//Task number 5.

document.write("<br>","<br>");
var number=0;
function possitive(){
if (number < 0) {
	document.write("number <", 0)
} else if (number > 0) {
	document.write("number >", 0)
} else {
	document.write("number =", 0)
}
}
possitive();

//Task number 6

document.write("<br>","<br>")
var name=prompt("What is your name?","Enter your name");
alert("Your name is:" + name);

//Task number 7

var f=5

function factorial(f){
	var factorial=f;
	while (f!=1){
		factorial=factorial*(f-1);
		f--;
	}
	document.write(factorial);
}
factorial(f);