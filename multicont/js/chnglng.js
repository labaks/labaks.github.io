function onChangeLng(e) {
    if ($.cookie('mult_lng') !== e.id) {
        $.cookie('mult_lng', e.id);
    }
    changeLng($.cookie('mult_lng'));
}

function changeLng(lng) {
    $('[multilang]').each(function () {
        for (var i = 0; i < lng.length(); i++)
        $(this).html();
    });
}
