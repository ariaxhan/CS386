// Use jQuery function for load event
// ❑ Inside function test for location.search (query string after ?) (whether it is empty or not)
// ❑ If true, disable all input elements using attr() method and disabled attribute

$(function () { 
    if (location.search) {
        $("input").attr("disabled", true);
    }

});