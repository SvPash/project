	//	Открытие модального окна
	$('.modal-link').on('click', function(event) {
		event.preventDefault();
		var target = $(this).attr('href');
		$(target).arcticmodal();
		if ($(this).data('form')) {
			console.log('test');
			console.log($(target).find('input[type=text]').val());
			var new_text = $(this).data('form');
			console.log(new_text);
			$(target).find('input[type=text]').val(new_text);
		}
	});

	//	Закрытие модального окна
	$('.modal-form').on('click', '.close', function(event) {
		event.preventDefault();
		$.arcticmodal('close');
	});

	//	Плавная прокрутка
	$('a[href^="#link-"]').bind('click.smoothscroll',function (e) {
 e.preventDefault();
 
var target = this.hash,
 $target = $(target);
 
$('html, body').stop().animate({'scrollTop': $target.offset().top},
{
    // Свойство анимации
    duration: 500, // Время анимации
    // Шаги анимации (http://api.jquery.com/animate/)
    step: function (progress) {
      // Когда скролл равен или больше высоты окна, то снимается checked с input'а
      if (progress >= $(window).height()) $('#hamburger').prop('checked', false);
    }
}, 'swing').queue(function(){window.location.href = target;});

});
 


	//	Отправка формы
	$('form').on('submit', function(event) {

		var error = false;

		$(this).children('input').each(function(){
			if ($(this).val().length < 1) {
				error = true;
			};
		});

		if(error == false){
			event.preventDefault();
			$.post("send.php", $(this).serialize(),function(result){
				 if(result == "sent"){
				 	$.arcticmodal('close');
				 	$('#modal-thanx').arcticmodal();
				}else{
				}
			});
		}
	});
	
	//Изменение шапки
	$(window).scroll(function() {
    if ($(this).scrollTop() > 0) {
        $('header').addClass("sticky");
    } else {
        $('header').removeClass("sticky");
    }
	});