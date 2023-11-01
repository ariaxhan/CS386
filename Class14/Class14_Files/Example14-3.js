window.addEventListener("load", function () {
    // add click button for button btn
    document.document.getElementById("btn").addEventListener("click", fCSSClass);
});

function fCSSClass() {
    // get second paragraph
    let par = document.getElementsByTagName("p")[1];
    par.classList.toggle("emphasize");
}