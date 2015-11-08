function check_empty() {
if (document.getElementById('name').value == "" || document.getElementById('email').value == "" || document.getElementById('msg').value == "") {
alert("Fill All Fields !");
} else {
document.getElementById('form').submit();
alert("Form Submitted Successfully...");
}
}
//Function To Display Popup
function div_show() {
document.getElementById('abc').style.display = "block";
}
//Function to Hide Popup
function div_hide(){
document.getElementById('abc').style.display = "none";
}

//Function To Display Popup
var ctr = 0;
function div_show2() {
	console.log("hey");
document.getElementById('xyz').style.display = "block";
}
//Function to Hide Popup
function div_hide2(){
document.getElementById('xyz').style.display = "none";
}