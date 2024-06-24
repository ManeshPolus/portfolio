function focusOnFirstElementInHome() {
    var elementToFocus = document.getElementById('tileOfHomePage');

    if (elementToFocus) {
        elementToFocus.focus();
    }
}

function focusOnFirstElementInContact() {
    var elementToFocus = document.getElementById('ContactHeader');

    if (elementToFocus) {
        elementToFocus.focus();
    }
}

window.onload = function() {
    focusOnFirstElementInHome();
    focusOnFirstElementInContact();
};