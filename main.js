// Menu button
let menuList = document.getElementById("menuList")
menuList.style.maxHeight = "0px";
function toggleMenu(){
  if(menuList.style.maxHeight == "0px")
  {
      menuList.style.maxHeight = "600px";
  }
  else{
      menuList.style.maxHeight = "0px";
  }
}

const menu_button = document.getElementById('menuButton');
menu_button.addEventListener('click', function() {toggleMenu()});

