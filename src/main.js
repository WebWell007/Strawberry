$(document).ready(function () {
    $('.popupiki').magnificPopup({
    });

    $('.popisat').click(function () { // ловим клик по ссылке с классом go_to


        $('html, body').animate({scrollTop: $('#lv-formLanding1').offset().top}, 500); // анимируем скроолинг к элементу scroll_el

        return false; // выключаем стандартное действие
    });
    $('.ollia2').click(function () { // ловим клик по ссылке с классом go_to


        $('html, body').animate({scrollTop: $('.comments-section').offset().top}, 500); // анимируем скроолинг к элементу scroll_el

        return false; // выключаем стандартное действие
    });
    $('.ollia3').click(function () { // ловим клик по ссылке с классом go_to


        $('html, body').animate({scrollTop: $('.info-section').offset().top}, 500); // анимируем скроолинг к элементу scroll_el

        return false; // выключаем стандартное действие
    });


    $('.nevidi').hover(function () {
        $(".popupiki").click();
    });

    $('.owl-carousel').owlCarousel({
        items: 1,
        loop: true,
        nav: true
    });

    $(".owl-prev").empty();
    $(".owl-next").empty();


});