window.addEventListener("load", fCompStyle);

function fCompStyle() {
    let par = document.getElementsByTagName("p")[0];
    par.style.fontSize = "18pt";
    par.style.width = "60%";
    let parStyle = "font-size: 18pt; width: 60%";
    par.setAttribute("style", parStyle);
    console.log("CSS Computed width: " + window.getComputedStyle(par).width);
    console.log("CSS Computed font size: " + window.getComputedStyle(par).fontSize);
}