window.addEventListener("load", fCSS);

function fCSS() {
    // first paragraph
    let par = document.getElementsByTagName("p")[0];
    par.style.fontSize = "18pt";
    let strCSS = "color: blue; background-color: lightgray";
    let h1 = document.getElementsByTagName("h1")[0];
    h1.setAttribute("style", strCSS);
    console.log("CSS Text = " + h1.style.cssText);
}
