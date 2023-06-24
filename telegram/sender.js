//bot token
var telegram_bot_id = "6238958022:AAE9Xc047sKpeDRZNsWe8oEYUHZsxBWbnt8";
//chat id
var chat_id = 389582669;
var u_name, phone, town, numb, message;
var ready = function () {
    u_name = document.getElementById("name").value;
	phone = document.getElementById("phone").value;
	town = document.getElementById("town").value;
	numb = document.getElementById("numb").value;
    message = "ПІБ: " + u_name + "\nТелефон: " + phone + "\nМісто: " + town + "\nВідділення: " + numb;
};
var sender = function () {
    ready();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"
        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function (response) {
		 console.log(response);
		 alert("Дані надіслані. Дякуємо за замовлення!");
	 });
    document.getElementById("name").value = "";
	document.getElementById("phone").value = "";
	document.getElementById("town").value = "";
	document.getElementById("numb").value = "";
    return false;
};



document.addEventListener("click", function (e) {
	const targetElement = e.target;

	if (targetElement.closest('.menu-icon')) {
		document.documentElement.classList.toggle('menu-open');
		e.preventDefault();
	}

})

