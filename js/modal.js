var modal = function (url) {
    var e = $('body');
    var height = document.documentElement.clientHeight;
    var isSmall = false;
    var eWidth = 360;
    var eHeight = 640;
    if (isSmall) {
        var html = '<div class="clone">' +
            '<p class="cloneTooltip">' +
            '<i class="fas fa-info-circle"></i>' +
            'Please note that this is a sample preview! The actual appearance will differ between devices and applications</p>' +
            '<div class="bannerBorder smallImageBorder">' +
            '<img src="' + url + '" />' +
            // '<div class="adaptSmallImage"></div>' +
            '</div>' +
            '</div>';
    } else {
        var html = '<div class="clone">' +
            '<p class="cloneTooltip">' +
            '<i class="fas fa-info-circle"></i>' +
            'Please note that this is a sample preview! The actual appearance will differ between devices and applications</p>' +
            '<div class="bannerBorder">' +
            '<div class="imageContainer">' +
            '<img src="' + url + '" />' +
            '<div class="bannerTimer"><span>8 sec</span></div>' +
            '<div class="bannerDislike"><span>Dislike\&nbsp;</span><i class="fas fa-thumbs-down"></i></div>' +
            '<div class="bannerDontShow"><span>Don\'t show\&nbsp;</span><i class="fas fa-eye-slash"></i></div>' +
            '<i class="fas fa-times-circle"></i>' +
            '</div>' +
            '<div class="bannerMainButton"></div>' +
            '<div class="bannerLoudspeaker"></div>' +
            '</div>' +
            '</div>';
    }

    e.append(html);
    e = e.find('.clone');
    var img = e.find('img');
    var container = e.find('.imageContainer');
    var bannerBorder = e.find('.bannerBorder');
    var bannerButton = e.find('.bannerMainButton');
    var bannerTimer = e.find('.bannerTimer span');
    var bannerDislike = e.find('.bannerDislike span');
    var bannerDontShow = e.find('.bannerDontShow span');
    var iconDontShow = e.find('.fa-eye-slash');
    var iconDislike = e.find('.fa-thumbs-down');
    var iconCros = e.find('.fa-times-circle');
    var resize = function () {
        container.css('height', e.outerHeight() * 0.6);
        var contHeight = container.outerHeight();
        container.css('width', eWidth * contHeight / eHeight);
        bannerBorder.css({
            'padding': contHeight * 0.13 + 'px ' + contHeight * 0.02 + 'px',
            'borderRadius': contHeight * 0.04 + 'px'
        });
        var buttonSize = contHeight * 0.06;
        bannerButton.css({
            'width': buttonSize + 'px',
            'height': buttonSize + 'px',
            'borderRadius': buttonSize + 'px',
            'left': ((bannerBorder.outerWidth() - buttonSize) / 2) + 'px'
        });
        bannerTimer.css({
            'fontSize': buttonSize / 2 + 'px',
            'lineHeight': bannerTimer.outerHeight() + 'px'
        });
        bannerDislike.css({
            'fontSize': buttonSize / 2 + 'px',
            'lineHeight': bannerDislike.outerHeight() + 'px'
        });
        bannerDontShow.css({
            'fontSize': buttonSize / 2 + 'px',
            'lineHeight': bannerDontShow.outerHeight() + 'px'
        });
        iconDontShow.css({
            'fontSize': buttonSize + 'px',
            'lineHeight': bannerDontShow.outerHeight() + 'px'
        });
        iconDislike.css({
            'fontSize': buttonSize + 'px',
            'lineHeight': bannerDislike.outerHeight() + 'px'
        });
        iconCros.css({
            'fontSize': buttonSize + 'px',
            'borderRadius': buttonSize / 2 + 'px'
        });

        if (eWidth / eHeight > img.outerWidth() / img.outerHeight()) {
            var padding = (container.outerWidth() - img.outerWidth()) / 2;
            container.css({
                'paddingLeft': padding,
                'paddingRight': padding
            });
            img.css('height', '100%');
        } else {
            var padding = (container.outerHeight() - img.outerHeight()) / 2;
            container.css({
                'paddingTop': padding,
                'paddingBottom': padding
            });
            img.css('width', '100%');
        }
    };
    $(window).resize(resize);
    e.fadeTo(300, 1);
    resize();
    e.click(function () {
        $(this).fadeTo(300, 0, function () { $(this).remove(); });
    });
    // resize();
}