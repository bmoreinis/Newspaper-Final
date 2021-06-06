var navBar = document.getElementById("navbarsExampleDefault");
var folders=[["\\","Home"],["captions","Captions Contest"],["chessgo","Chess vs. Go"],["instahurts","Social Media Hurts"],["music","Pandemic Music"],["pandemic","Student Mental Health"],["powerpuff","Racist Live Action"],["rockets","Space Race"],["romeo","R&J Memes"],["spanish","Ventajas del Idioma"],["racism","US Racism"],["wagegap","Wage Gap Math"]];
var menu = "<ul class=\"navbar-nav mr-auto\">";
for (i=0;i<folders.length;i++){
  menu+="<li class=\"nav-item\"><a class=\"nav-link\" href=\""+popper+folders[i][0]+"\">"+folders[i][1]+"</a>";
}
menu+="</ul>";
navBar.innerHTML=menu;