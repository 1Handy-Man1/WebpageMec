var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
if (prevScrollpos > currentScrollPos) {//If the scroller don't move down, the navbar wont move
    document.getElementById("navbar").style.top = "0";
} else {
    document.getElementById("navbar").style.top = "-135px";//When the scroller move down, the navbar moving by -75 pixels up
}
prevScrollpos = currentScrollPos;
}

function myEpicMode() {
    var element = document.body;
    element.classList.toggle("darkmode");
    var navbar = document.getElementById("navbar");
    navbar.classList.toggle("darkmode");
}

