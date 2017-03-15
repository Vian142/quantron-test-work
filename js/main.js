$(function () {
    // проверка наличия кнопки на старнице
    if ($("#buttonMenu").length) {
        var listMenu = $("#menuList");
        var btnMenu = $("#buttonMenu");
        // обработка клика
        $(btnMenu).click(function (e) {
            e.preventDefault();
            if ($(listMenu).hasClass("hideList")) {
                $(listMenu).children().stop().addClass("view");
                $(listMenu).removeClass('hideList');
            } else {
                $(listMenu).children().stop().removeClass("view");
                $(listMenu).addClass('hideList');
            }
        })
    } else {
        console.log('Нету элемента на странице');
    }
});