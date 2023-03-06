let textOptions = { origin: "bottom", duration: 800, distance: "30px", reset: true };
let imageOptions = { delay: 100, origin: "bottom", duration: 1200, distance: "30px", reset: true };
let imageSlideOptions = { delay: 300, origin: "right", duration: 1500, distance: "80px", reset: true };
var w = window.innerWidth;

ScrollReveal().reveal("h1", textOptions);
ScrollReveal().reveal(".shadow", imageOptions);
w > 900 && ScrollReveal().reveal(".second-image-container", imageSlideOptions);
ScrollReveal().reveal(".journeyImgContainer", imageSlideOptions);
