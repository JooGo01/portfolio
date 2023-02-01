$('.navTrigger').click(function () {
    $(this).toggleClass('active');
    console.log("Clicked menu");
    $("#mainListUl").toggleClass("show_list");
    $("#navegador").toggleClass("activo");
    $("#navegador").fadeIn();
    $("#mainListUl").fadeIn();

});

$(window).scroll(function() {
    if ($(document).scrollTop() > 50) {
        $('.nav').addClass('affix');
        console.log("OK");
    } else {
        $('.nav').removeClass('affix');
    }
});

// scroll bar
const scrollProgress = document.querySelector("#scrollProgress");
let totalPageHeight = document.body.scrollHeight - window.innerHeight;
window.onscroll = () => {
    let newProgressHeight = (window.pageYOffset / totalPageHeight) * 100;
    scrollProgress.style.height = `${newProgressHeight}%`;
    scrollProgress.style.opacity = `${newProgressHeight}%`;
};
