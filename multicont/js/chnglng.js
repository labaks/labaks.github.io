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
        "language": "Язык:",
        "about_us": "О нас",
        "services": "Услуги",
        "forwarding_services": "Экспедиторские услуги",
        "customs_brokerage_services": "Таможенно-брокерские услуги",
        "logistics": "Логистика",
        "commerce_brokerage_services": "Торгово-брокерские услуги (ВЭД)",
        "professional_translation_of_documents": "Профессиональный перевод документов",
        "affreightment": "Фрахтование",
        "contacts": "Контакты",
        "copyright": "&copy; Логистическая компания 'Multicont, Одесса'",
        "our_offers": "Наши предложения",
        "reliability_of_partnership_and_collaboration_on_long_term_period": "Надежность партнерства и долговременное сотрудничество.",
        "business_meetings_in_the_b2b_mode": "Заключение сделок в режиме B2B",
        "delivery_of_cargoes_where_pleasing_the_regime_door_to_door": "Доставка грузов куда угодно в режиме «door–to–door»",
        "our_services_confirmed_the_quality_and_time_tested": "Качество наших услуг – подтверждено и проверено временем",
        "we_are_the_members_of_aifu_and_fiata": "Мы являемся членами АМЭУ и FIATA",
        "we_have_received_recognition_and_cultivate_new_successes": "Мы получили признание и совершенствуемся для новых успехов",
        "our_partners_is_the_key_of_our_success": "Наши партнеры – залог нашего успеха",
        "llc_vob": "ЧП «ВОБ»",
        "llc_yuval_trade": "ЧП «Ювал Трейд»",
        "we_always_together_with": "Мы всегда вместе с",
        "about_us_text1": "Логистическая компания Мультиконт Одесса предоставляет широкий спектр услуг и консалтинга в сфере организации международной морской доставки грузов: морские контейнерные перевозки, экспедирование в портах, таможенное оформление, фрахтование. Мы работаем напрямую с крупнейшими Альянсами судоходных компаний сферы контейнерных перевозок, а это означает -  безупречное качество оказываемых услуг и залог стабильности работы Вашего бизнеса.",
        "about_us_text2": "Мультиконт Одесса имеет большие возможности предоставления морских логистических и экспедиторских услуг на территории Одесского, Черноморского, Южного портов, благодаря удобному расположению в Одессе и заключенным договорам с ними. Квалифицированный персонал компании в любой момент готов Вас персонально проконсультировать относительно вопросов: организации доставки груза, морских контейнерных перевозок, таможенного оформления (растаможки) Вашего груза, составить оптимальный логистический план с предварительными просчетами для каждого персонального клиента. Мы ценим своих клиентов и предоставляем услуги качественно и точно в срок. В работе с клиентами Мы всегда стремимся долгосрочному и взаимовыгодному сотрудничеству, предлагаем решения самых сложных задач в сфере организации доставки грузов.",
        "about_us_text3": "Наша миссия - предоставление качественных и надежных услуг в сфере международных контейнерных перевозок на долгосрочной основе, решение логистических экспортных задач для удовлетворения потребностей клиента и функционирования его бизнеса.",
        "about_us_text4": "«Мы не просто осуществляем перевозки, а оптимизируем логистику и предлагаем стратегию устойчивого развития перевозки, бизнеса наших клиентов»",
        "about_us_text5": "Всегда рады сотрудничеству!"
    },
    "en": {
        "main": "Home",
        "phone": "Phone:",
        "fax": "Fax:",
        "language": "Language:",
        "about_us": "About us",
        "services": "Services",
        "forwarding_services": "Forwarding services",
        "customs_brokerage_services": "Customs-brokerage services",
        "logistics": "Logistics",
        "commerce_brokerage_services": "Commerce and brokerage services",
        "professional_translation_of_documents": "Proffessional translation of documents",
        "affreightment": "Affreightment",
        "contacts": "Contacts",
        "copyright": "&copy; Logistics company 'Multicont, Odessa'",
        "our_offers": "Our offers",
        "reliability_of_partnership_and_collaboration_on_long_term_period": "Reliability of Partnership and Collaboration on long-term period",
        "business_meetings_in_the_b2b_mode": "Business meetings in the B2B mode",
        "delivery_of_cargoes_where_pleasing_the_regime_door_to_door": "Delivery of cargoes where pleasing the regime «door - to - door»",
        "our_services_confirmed_the_quality_and_time_tested": "Our Services confirmed the quality and time-tested",
        "we_are_the_members_of_aifu_and_fiata": "We are the members of AIFU and FIATA",
        "we_have_received_recognition_and_cultivate_new_successes": "We have received recognition and cultivate new successes",
        "our_partners_is_the_key_of_our_success": "Our partners is the key of our success",
        "llc_vob": "LLC «VOB»",
        "llc_yuval_trade": "LLC «Yuval Trade»",
        "we_always_together_with": "We always Together with",
        "about_us_text1": "Logistics company Multicont Odessa offers a wide range of services and consulting in the sphere of international maritime cargo delivery: container shipping, forwarding in ports, customs clearance, chartering. We work directly with the largest alliance of shipping companies in container traffic, which means impeccable quality of service and the guarantee of the stability of your business.",
        "about_us_text2": "Multicont Odessa has great potential of marine logistics and forwarding services on the territory of Odessa, the Black Sea, the Southern ports, thanks to its convenient location in Odessa and signed contracts with them. Qualified personnel of the company is always ready to advise you personally concerning the questions of organization of cargo delivery, container shipping, customs clearance, to make logistics plan with preliminary calculation for each customer's personal. We value our clients and provide services efficiently and in time. In  our work with clients, we always strive to long-term and mutually beneficial cooperation, we offer solutions to the most complex tasks in the field of organization of cargo delivery.",
        "about_us_text3": "Our mission is to provide quality and reliable services in the field of international container traffic in the long term period of time, the decision an export logistics tasks, to meet the needs of the client and the operation of its business.",
        "about_us_text4": "«We do not just provide transportation, and optimize logistics, but we offer a strategy for sustainable development of transport, our customers' business»",
        "about_us_text5": "Always glad to cooperate!"
    },
    "ua": {
        "main": "Головна",
        "phone": "Телефон:",
        "fax": "Факс:",
        "language": "Мова:",
        "about_us": "Про нас",
        "services": "Послуги",
        "forwarding_services": "Експедиторські послуги",
        "customs_brokerage_services": "Митно-брокерські послуги",
        "logistics": "Логістика",
        "commerce_brokerage_services": "Торгово-брокерські послуги (ЗЕД)",
        "professional_translation_of_documents": "Професійний переклад документів",
        "affreightment": "Фрахтування",
        "contacts": "Контакти",
        "copyright": "&copy; Логістична компанія 'Multicont, Одеса'",
        "our_offers": "Наші пропозиції",
        "reliability_of_partnership_and_collaboration_on_long_term_period": "Надійність партнерства і довготривала співпраця",
        "business_meetings_in_the_b2b_mode": "Ділові зустрічі у режимі B2B",
        "delivery_of_cargoes_where_pleasing_the_regime_door_to_door": "Доставка вантажів куди завгодно у режимі « door – to – door»",
        "our_services_confirmed_the_quality_and_time_tested": "Якість наших послуг - підтверджено і перевірено часом",
        "we_are_the_members_of_aifu_and_fiata": "Ми є членами АМЕУ і FIATA",
        "we_have_received_recognition_and_cultivate_new_successes": "Ми отримали визнання і вдосконалюємося для нових успіхів",
        "our_partners_is_the_key_of_our_success": "Наші партнери - запорука нашого успіху",
        "llc_vob": "ПП «ВОБ»",
        "llc_yuval_trade": "ПП «Ювал Трейд»",
        "we_always_together_with": "Мы завжди разом з",
        "about_us_text1": "Логістична компанія Мультиконт Одеса надає широкий спектр послуг і консалтингу у сфері організації міжнародної морської доставки вантажів: морські контейнерні перевезення, експедирування в портах, митне оформлення, фрахтування. Ми працюємо безпосередньо з найбільшими Альянс судноплавних компаній сфери контейнерних перевезень, а це означає - бездоганна якість при наданні послуг і запорука стабільності роботи Вашого бізнесу.",
        "about_us_text2": "Мультиконт Одеса має великі можливості надання морських логістичних та експедиторських послуг на території Одеського, Чорноморського, Южного портів, завдяки зручному розташуванню нашого офісу в м. Одесі і укладеними договорами з ними. Кваліфікований персонал компанії у будь-який момент готовий Вас персонально проконсультувати щодо питань: організації доставки вантажу, морських контейнерних перевезень, митного оформлення Вашого вантажу, скласти оптимальний логістичний план з попередніми прорахунками для кожного персонального клієнта. Ми цінуємо своїх клієнтів і надаємо послуги якісно і в становленні терміни . У роботі з клієнтами Ми завжди прагнемо довгострокового і взаємовигідного співробітництва, пропонуємо рішення найскладніших завдань у сфері організації доставки вантажів.",
        "about_us_text3": "Наша місія - надання якісних і надійних послуг в сфері міжнародних морських та контейнерних перевезень на довгостроковій основі, рішення логістичних експортних завдань для задоволення потреб клієнта і функціонування його бізнесу.",
        "about_us_text4": "«Ми не просто здійснюємо перевезення, а оптимізуємо логістику і пропонуємо стратегію сталого розвитку перевезеннь, бізнесу наших клієнтів»",
        "about_us_text5": "Завжди раді співпраці!"
    }
};
