
$(function () {
    // in load event, style paragraphs to 50% width with border
    $("p").css('width', '50%').css('border', '1px solid black');
    // Get current font size of first paragraph using getComputedStyle method, store in variable pFontSize
    const pFontSize = window.getComputedStyle($("p")[0]).fontSize;
    // Register click and hover events on all paragraphs
    $("p").click(fClick).hover(fIn, fOut);
    // Use function fClick for click event
    function fClick() {
         // Set background color to red
        $(this).css("background-color", "red");
    }
    // Use functions fIn and fOut for hover event
    // fIn:
    // Set font size to 18 points
    // Show x and y coordinates using event object
    function fIn(evt) {
        $(this).css("font-size", "18px");
        console.log(`Click position x : ${evt.screenX} and y : ${evt.screenY}`);
    }
    // fOut:
    // Reset font size back to initial
    // Show x and y coordinates using event object
    function fOut(evt) {
        $(this).css("font-size", pFontSize);
        console.log(`Click position x : ${evt.screenX} and y : ${evt.screenY}`);
    }
})