$(function () {
    // Select all paragraphs, use each function passing index
    $("p").each(function (index) {
        // Wrap JavaScript this object into jQuery object
        $(this).on(
            "click", // Event type of click
            // For data use object with message property:
            { message: `This is the paragraph indexed at ${index}` },
            // Event handler: fEvent
            fEvent
        );
    })
})
// Create function fEvent passing event object
function fEvent(event) {
    // Use append method passing html line break element
    // concatenated with event.data.message
    $(this).append("<br/>" + event.data.message);
}