document.addEventListener("DOMContentLoaded", checkLng);

var cookiesName = 'mult_lng';
var attrName = 'data-multilang';
var activeBtnClass = "activeLng";
var lngBtn = ".languages button";

function checkLng() {
    if ($.cookie(cookiesName)) {
        replacementWords($.cookie(cookiesName));
        $(lngBtn).removeClass(activeBtnClass);
        $("#" + $.cookie(cookiesName)).addClass(activeBtnClass);
        console.log($.cookie(cookiesName));
    }
}

function onChangeLng(e) {
    if ($.cookie(cookiesName) !== e.id) {
        $.cookie(cookiesName, e.id);
    }
    replacementWords($.cookie(cookiesName));
//    replacementWords(e.id);
    $(lngBtn).removeClass(activeBtnClass);
    $(e).addClass(activeBtnClass);
}

function replacementWords(lang) {
    $('[' + attrName + ']').each(function () {
        $(this).html(langs[lang][$(this).attr(attrName)]);
    });
}

var langs = {
    "ru": {
        "main": "Главная",
        "phone": "Телефон:",
        "fax": "Факс:",
        "about_us": "О нас",
        "services": "Услуги",
        "forwarding_services": "Экспедиторские услуги",
        "customs_brokerage_services": "Таможенно-брокерские услуги",
        "logistics": "Логистика",
        "commerce_brokerage_services": "Торгово-брокерские услуги (ВЭД)",
        "professional_translation_of_documents": "Профессиональный перевод документов",
        "affreightment": "Фрахтование",
        "contacts": "Контакты",
        "copyright": "&copy; Логистическая компания 'Multicont, Одесса'"
    },
    "en": {
        "main": "Main",
        "phone": "Phone:",
        "fax": "Fax:",
        "about_us": "About us",
        "services": "Services",
        "forwarding_services": "Forwarding services",
        "customs_brokerage_services": "Customs-brokerage services",
        "logistics": "Logistics",
        "commerce_brokerage_services": "Commerce and brokerage services",
        "professional_translation_of_documents": "Proffessional translation of documents",
        "affreightment": "Affreightment",
        "contacts": "Contacts",
        "copyright": "&copy; Logistics company 'Multicont, Odessa'"
    },
    "ua": {
        "main": "Головна",
        "phone": "Телефон:",
        "fax": "Факс:",
        "about_us": "Про нас",
        "services": "Послуги",
        "forwarding_services": "Експедиторські послуги",
        "customs_brokerage_services": "Митно-брокерські послуги",
        "logistics": "Логістика",
        "commerce_brokerage_services": "Торгово-брокерські послуги (ЗЕД)",
        "professional_translation_of_documents": "Професійний переклад документів",
        "affreightment": "Фрахтування",
        "contacts": "Контакти",
        "copyright": "&copy; Логістична компанія 'Multicont, Одеса'"
    }
};
