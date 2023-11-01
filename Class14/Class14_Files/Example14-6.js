window.addEventListener("load", function () {
    let btnProp = document.getElementById("btnProp");
    let btnAddEvt = document.getElementById("btnAddEvt");
    btnProp.onclick = fProp;
    btnAddEvt.addEventListener("click", fAddEvt);
    function fProp() {
        alert("Evvent raised with property method.");
    }
    function fAddEvt() {
        alert("Event raised with addEventListener method");
    }
})