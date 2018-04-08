// check off todos by clicking
$("ul").on("click", "li", function() {

    $(this).toggleClass("completed");

});


// click on X to delete todo
$("ul").on("click", "span", function(e) {
    e.stopPropagation();
    $(this).parent().fadeOut(1000, function() {
        $(this).remove();
    });
});

$('input[type="text"]').on("keypress", function(e) {
	if (e.which === 13) {

		$("ul").append("<li><span><i class=\"fa fa-trash\" aria-hidden=\"true\"></i></span> " + new Date().toLocaleString() + ": " + $(this).val() + "</li>");
		$(this).val('');

	}

});

$('.fa-minus').on("click", function() {
	$('input').slideToggle(100);
});