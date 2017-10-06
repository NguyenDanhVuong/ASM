function openNav1(){
	document.getElementById("myNav").style.height = "100%";
}

function closeNav1(){
	document.getElementById("myNav").style.height = "0%";
}
function openNav2() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav2() {
    document.getElementById("mySidenav").style.width = "0";
}
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

