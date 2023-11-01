$(function () { 
    // select paragraphs that are immediate children of div elements:
    //Apply red border using css method
    $("div > p").css("border", "3px solid red");

    // Select anchor links that are immediate children of li
// elements, and those in turn are immediate children
// of class .samplelist:
// ❑ Use click event on elements selected
// ❑ Inside click event, pass JavaScript this into jQuery function
// to make it jQuery object
// ❑ Change background color to red
    $(".sampleList > li > a").click(function () {
        $(this).css("background-color", "red");
    })
// passing html string, create paragraph element and add it to element with id jQuery
    $("#jQuery").append("<p>This is a <b>p</b> element created with jQuery.</p>");
    
})
