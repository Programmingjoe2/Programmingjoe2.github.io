window.addEventListener('scroll', function(e){
  var navbar = document.getElementById("navbar");
  if (e.pageY > 0) {
    navbar.className = "navbar-scrolled";
  } else {
    navbar.className = "";
  }
});
