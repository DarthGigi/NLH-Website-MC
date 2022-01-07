function startTour() {
    var element = document.querySelector("#tour");
    // smooth scroll to element and align it at the start
    element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

function mobileNavbar() {
    var x = document.getElementById("mobileNav");
    if (x.classList.contains("hidden")) {
        x.classList.remove("hidden");
    } else {
        x.classList.add("hidden");
    }
}