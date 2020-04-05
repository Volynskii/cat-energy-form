(function () {
var screenWidth  = window.innerWidth || document.documentElement.clientWidth || 
document.body.clientWidth;
var height = window.innerHeight|| document.documentElement.clientHeight|| 
document.body.clientHeight;
var mobileWidth = 320;
var tabletWidth = 769;
var headlines = document.querySelectorAll(".header-menu-item");
var arrayHeadlines = Array.from(headlines);

var closeMenuTextContent =  function(evt) {
    if (screenWidth >= mobileWidth && screenWidth <= tabletWidth) {
arrayHeadlines.forEach((it) => {
        console.log(789);
    it.innerHTML = "123";

})}
 else {
   return;  
 };
};
window.addEventListener("resize",closeMenuTextContent);
window.addEventListener("load", closeMenuTextContent);
    })();
