window.addEventListener('scroll', function(e){
  var navbar = document.getElementById("navbar");
  if (e.pageY > 0) {
    navbar.className = "navbar-scrolled";
  } else {
    navbar.className = "";
  }
});

function showHamburger() {
  var hamburgerx = document.getElementById('hamburger-x');
  var hamburgermenu = document.getElementById('hamburger-menu');
  var hamburgerlines = document.getElementById('hamburger-lines');
  var id = setInterval(frame, 2);
  var pos = 100;

  hamburgerlines.style.display = 'none';
  hamburgerx.style.opacity = '1';
  hamburgermenu.style.display = 'block';
  document.body.className = 'body-no-scroll';

  function frame() {
    if (pos == 0) {
      clearInterval(id);
    } else {
      pos--;
      hamburgermenu.style.left = pos + 'vw';
    }
  }
}

function hideHamburger() {
  var hamburgerx = document.getElementById('hamburger-x');
  var hamburgermenu = document.getElementById('hamburger-menu');
  var hamburgerlines = document.getElementById('hamburger-lines');
  var id = setInterval(frame, 2);
  var pos = 0;

  setTimeout(function(){
    hamburgerlines.style.display = 'block';
    hamburgerx.style.opacity = '0';
    hamburgermenu.style.display = 'none';
    document.body.className = '';
  }, 350);

  function frame() {
    if (pos == 100) {
      clearInterval(id);
    } else {
      pos++;
      hamburgermenu.style.left = pos + 'vw';
    }
  }
}
