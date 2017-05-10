/*
window.onscroll = function() {myFunction()};
function myFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        ("header").removeClass("large").addClass("small");
    } else{
        ("header").removeClass("small").addClass("large");
    }
}
*/

var modal = document.getElementById('myModal');

var img = document.getElementsByClassName('img-items');
var modalImg = document.getElementById("img01");
for (var i = 0; i < img.length; i++) {
	img[i].onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
	}
}

var span = document.getElementsByClassName("close")[0];
span.onclick = function() { 
    modal.style.display = "none";}