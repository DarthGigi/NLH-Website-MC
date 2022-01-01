var element = document.querySelector("#tour");
// smooth scroll to element and align it at the start
function startTour() {
    element.scrollIntoView({ behavior: 'smooth', block: 'start'});
}