window.onload = function () { // после загрузки страницы

    var scrollUp = document.getElementById('scrollup'); // найти элемент

    scrollUp.onmouseover = function () { // добавить прозрачность
        scrollUp.style.opacity = 0.3;
        scrollUp.style.filter = 'alpha(opacity=30)';
    };

    scrollUp.onmouseout = function () { //убрать прозрачность
        scrollUp.style.opacity = 0.5;
        scrollUp.style.filter = 'alpha(opacity=50)';
    };

    scrollUp.onclick = function () { //обработка клика
        window.scrollTo(0, 0);
    };

// show button

    window.onscroll = function () { // при скролле показывать и прятать блок
        if (window.pageYOffset > 0) {
            scrollUp.style.display = 'block';
        } else {
            scrollUp.style.display = 'none';
        }
    };
};
$(document).ready(function () {
    $('.carousel').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500
    });
});

$(document).click(function (e) {
    if ($('.collapsedMenu').css('display') === 'block') {
        console.log("collapsed block");
        if ($(e.target).closest(".collapsedMenu").length)
            $('.main-nav').show();
        else
            $(".main-nav").hide();
    }

});
