$(function () {
    $("#btn").click(fAlterDoc); 
})

// create function fAlterDoc
function fAlterDoc() {
    $("h2").each(function (index, elt) {
        console.log(`Index = ${index} : ${elt.innerHTML}`);
        $(elt).replaceWith("<h3>" + (index + 1) + '.' + $(elt).html() + "</h3>");
    });
    $("h3").prepend("§");
    $("h3").before("<hr/>").after("<hr/>");
    console.log(document.body.innerHTML);
}