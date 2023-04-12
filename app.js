var darkButton = document.getElementById("darkButton");
var expButton = document.getElementById("expButton");

// dark mode and stuff

darkButton.addEventListener("click", () => {
    var app = document.getElementsByTagName("BODY")[0];
    if (localStorage.getItem("lightMode") == "dark") {
	localStorage.setItem ("lightMode", "light");
	app.setAttribute("light-mode", "light");
    } else {
	localStorage.setItem ("lightMode", "dark");
	app.setAttribute("light-mode", "dark");
    }		
})

expButton.addEventListener("click", () => {
	document.location='experiments.html'
})
