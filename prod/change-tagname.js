
var screenWidth  = window.innerWidth;
var height = window.innerHeight;
var mobileWidth = 320;
var tabletWidth = 769;
var headlines = document.querySelectorAll(".header-menu-item");
var arrayHeadlines = Array.from(headlines);

// var closeMenuTextContent =  function(evt) {
//     if (screenWidth >= mobileWidth && screenWidth <= tabletWidth) {
// arrayHeadlines.forEach((it) => {
//         console.log(123);
//     it.innerHTML = "123";
//
// })}
//  };
// window.addEventListener('resize',closeMenuTextContent);
// window.addEventListener('load',closeMenuTextContent)
// console.log(screenWidth >= tabletWidth)


const heightOutput = document.querySelector('#height');
const widthOutput = document.querySelector('#width');

function reportWindowSize() {
    heightOutput.textContent = window.innerHeight;
    widthOutput.textContent = window.innerWidth;
}
window.addEventListener('resize',reportWindowSize)
window.onresize = reportWindowSize;