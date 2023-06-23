// dark mode and stuff

function changeMode() {
  var app = document.getElementsByTagName("BODY")[0];
  if (localStorage.getItem("lightMode") == "dark") {
    localStorage.setItem("lightMode", "light");
    app.setAttribute("light-mode", "light");
  } else {
    localStorage.setItem("lightMode", "dark");
    app.setAttribute("light-mode", "dark");
  }		
}
