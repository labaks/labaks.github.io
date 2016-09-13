function changeLng(e) {

		console.log($.cookie('mult_lng'));
		console.log(e.id);

	$.cookie('mult_lng', e.id);
	if ($.cookie('mult_lng')) {
		console.log("true");
		console.log($.cookie('mult_lng'));
	}
}
