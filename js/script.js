function showMenu() {
        $('.sidebar').show();
		$('.sidebar').css('opacity', '1');
        $('body').css('overflow', 'hidden');
}

function hideMenu() {
    $('.sidebar').hide();
    $('.sidebar').css('opacity', '0');
    $('body').css('overflow', 'auto');
}