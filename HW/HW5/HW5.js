$(document).ready(function() {
    // Registering the click event for elements with the class "delete"
    $('.delete').on('click', fDeleteRow);

    // Registering the mouseover event for elements with the class "delete"
    $('.delete').on('mouseover', fMousePointer);

    // Registering the change event for elements with the id "even" and "odd"
    $('#even, #odd').on('change', fAlternateRow);
});

// Event handler for the click event
function fDeleteRow() {
    console.log('fDeleteRow function executed');
    // create variable tr
    let tr = $(this).closest('tr');
    // chain with the fadeout method with 2 seconds
    tr.fadeOut(2000, function() {
        // chain with the remove method
        tr.remove();
        fAlternateRow();
    });
}

// Event handler for the mouseover event
function fMousePointer() {
    console.log('fMousePointer function executed');
    // set the current delete button
    let currentDeleteButton = $(this);
    // use css method to set cursor property to pointer
    currentDeleteButton.css('cursor', 'pointer');
}

// Event handler for the change event
function fAlternateRow() {
    console.log('fAlternateRow function executed');
    // select all even rows and use css method to set the background color to the 
    // value of the input element with id "even"
    $('#tblData tr:even').css('background-color', $('#even').val());
    // select all odd rows and use css method to set the background color to the
    // value of the input element with id "odd"
    $('#tblData tr:odd').css('background-color', $('#odd').val());
}
