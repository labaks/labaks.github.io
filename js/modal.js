var modal = function (url, isSmall) {
    var e = $('body');
    var eWidth = 360;
    var sHeight = 320;
    var bHeight = 640;
    var bannerTimer, bannerDislike, bannerDontShow, iconDontShow, iconDislike, iconCros;
    var greenPhone, redPhone, greenPhoneBtn, redPhoneBtn, phoneScreenTextCall, phoneScreenTextName, phoneScreenTextPhone;
    var html = '<div class="clone">' +
        '<p class="cloneTooltip">' +
        '<i class="fas fa-info-circle"></i>' +
        'Please note that this is a sample preview! The actual appearance will differ between devices and applications</p>' +
        '<div class="bannerBorder">';
    if (isSmall) {
        html += '<div class="phoneScreen">' +
            '<div class="phoneScreen__toolbar">' +
            '<i class="fas fa-phone"></i>' +
            '<span><i class="fas fa-volume-up"></i>\&nbsp;<i class="fab fa-sticker-mule"></i>\&nbsp;<i class="fas fa-wifi"></i>\&nbsp;42%\&nbsp;<i class="fas fa-battery-half"></i>\&nbsp;17:03</span>' +
            '</div>' +
            '<span class="phoneScreen__textCall">Incoming Call</span>' +
            '<span class="phoneScreen__textName">Ted</span>' +
            '<span class="phoneScreen__textPhone">+44 21 5736 1115</span>' +
            '<div class="imageContainer">' +
            '<img src="' + url + '" />' +
            '<div class="moveIcon"></div>' +
            '<i class="fas fa-times-circle"></i>' +
            '</div>' +
            '<div class="phoneScreen__greenBtn"><i class="fas fa-phone"></i><span>\&nbsp;></span></div>' +
            '<div class="phoneScreen__redBtn"><span><\&nbsp;</span><i class="fas fa-phone"></i></div>' +
            '<span class="phoneScreen__msg">Send a message</span>' +
            '</div>' +
            '<div class="bannerMainButton"></div>' +
            '<div class="bannerLoudspeaker"></div>' +
            '</div>' +
            '</div>';
    } else {
        html += '<div class="imageContainer bannerShadow">' +
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
    if (isSmall) {
        phoneScreenTextCall = e.find('.phoneScreen__textCall');
        phoneScreenTextName = e.find('.phoneScreen__textName');
        phoneScreenTextPhone = e.find('.phoneScreen__textPhone');
        greenPhoneBtn = e.find('.phoneScreen__greenBtn');
        redPhoneBtn = e.find('.phoneScreen__redBtn');
        greenPhone = e.find('.phoneScreen__greenBtn i');
        redPhone = e.find('.phoneScreen__redBtn i');
    } else {
        bannerTimer = e.find('.bannerTimer span');
        bannerDislike = e.find('.bannerDislike span');
        bannerDontShow = e.find('.bannerDontShow span');
        iconDontShow = e.find('.fa-eye-slash');
        iconDislike = e.find('.fa-thumbs-down');
    }
    iconCros = e.find('.fa-times-circle');
    var container = e.find('.imageContainer');
    var bannerBorder = e.find('.bannerBorder');
    var bannerButton = e.find('.bannerMainButton');
    var resize = function () {
        if (isSmall) {
            var phoneScreen = e.find('.phoneScreen');
            phoneScreen.css('height', e.outerHeight() * 0.6);
            var contHeight = phoneScreen.outerHeight();
            var buttonSize = contHeight * 0.06;
            var screenWidth = eWidth * contHeight / bHeight
            phoneScreen.css({
                'width': screenWidth,
                'paddingTop': (contHeight - sHeight * screenWidth / eWidth) / 2,
                'fontSize': buttonSize
            });
            container.css({
                'width': screenWidth,
                'height': sHeight * screenWidth / eWidth
            });
            phoneScreenTextCall.css('fontSize', buttonSize / 2);
            phoneScreenTextPhone.css('fontSize', buttonSize * 0.6);
            redPhone.css({
                'borderRadius': buttonSize,
                'padding': buttonSize / 3
            });
            greenPhone.css({
                'borderRadius': buttonSize,
                'padding': buttonSize / 3
            });
            if (sHeight / eWidth < img.outerHeight() / img.outerWidth()) {
                img.css('height', '100%');
                var padding = (container.outerWidth() - img.outerWidth()) / 2;
                container.css({
                    'paddingLeft': padding,
                    'paddingRight': padding
                });
            } else {
                img.css('width', '100%');
                var padding = (container.outerHeight() - img.outerHeight()) / 2;
                container.css({
                    'paddingTop': padding,
                    'paddingBottom': padding
                });
            }
        } else {
            container.css('height', e.outerHeight() * 0.6);
            var contHeight = container.outerHeight();
            container.css('width', eWidth * contHeight / bHeight);
            var buttonSize = contHeight * 0.06;
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

            if (eWidth / bHeight > img.outerWidth() / img.outerHeight()) {
                img.css('height', '100%');
                var padding = (container.outerWidth() - img.outerWidth()) / 2;
                container.css({
                    'paddingLeft': padding,
                    'paddingRight': padding
                });
            } else {
                img.css('width', '100%');
                var padding = (container.outerHeight() - img.outerHeight()) / 2;
                container.css({
                    'paddingTop': padding,
                    'paddingBottom': padding
                });
            }
        }
        bannerBorder.css({
            'padding': contHeight * 0.13 + 'px ' + contHeight * 0.02 + 'px',
            'borderRadius': contHeight * 0.04 + 'px'
        });
        bannerButton.css({
            'width': buttonSize + 'px',
            'height': buttonSize + 'px',
            'borderRadius': buttonSize + 'px',
            'left': ((bannerBorder.outerWidth() - buttonSize) / 2) + 'px'
        });
        iconCros.css({
            'fontSize': buttonSize + 'px',
            'borderRadius': buttonSize / 2 + 'px'
        });
    };
    $(window).resize(resize);
    e.fadeTo(300, 1);
    resize();
    e.click(function () {
        $(this).fadeTo(300, 0, function () { $(this).remove(); });
    });
}