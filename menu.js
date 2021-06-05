var navBar = document.getElementById("navbarsExampleDefault");
var folders=["template","captions","chessgo","instahurts","music","pandemic","powerpuff","racism","rockets","romeo","spanish","wagegap"];
var menu = "<ul class=\"navbar-nav mr-auto\">";
for (i=0;i<folders.length;i++){
  menu+="<li class=\"nav-item\"><a class=\"dropdown-item\" href=\""+popper+folders[i]+"\">"+folders[i]+"</a>";
}
menu+="</ul>";
navBar.innerHTML=menu;