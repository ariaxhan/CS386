// Create the following JavaScript/jQuery code to perform DOM manipulation and animation
// Step 1: jQuery Load Event

window.addEventListener("load", fLoad);

function fLoad() {
    fAnimate();
    $("#btn").click(fCreateLinks);
    $("#btn").click(fAnchorTarget);
}

// Step 2: Function fAnimate
function fAnimate() {
    // console.log("fAnimate called");
    // Select the img element by id and store the alt attribute in variable alt
    alt = $("#intro").attr("alt");
    // Select the img element by id, hide it first, then fade it in over 5 seconds
    $("#intro").hide().fadeIn(5000, function () {
         // In the callback function (anonymous or named function), issue an alert displaying the variable alt
        alert("alt variable is " + alt);
    });
}
// Step 3: Function fCreateLinks
function fCreateLinks() {
    // console.log("fCreateLinks called");
    // Select the body and append a div element with an id of linklist, and inside the div element an h1 header
    // with the title: List of Links
    $("body").append("<div id='linklist'><h1>List of Links</h1></div>");
    // Select all anchor elements, clone them, and append them to the div element created above using the id
    $("a").clone().appendTo("#linklist");
    // Select all anchor elements under the div element created above using selector combinator syntax and add a
    // horizontal ruler after it
    $("#linklist a").after("<hr/>");
    // Save everything and execute the html page in your browser, click on the button label List of all Links, you
    // should see at the very bottom listed all anchor links contained in this document
}

// Step 4: Function fAnchorTarget
function fAnchorTarget() {
    // console.log("fAnchorTarget called")
    // Select all anchor elements and add the attribute target with a value of _blank
    $("a").attr("target", "_blank");
}
