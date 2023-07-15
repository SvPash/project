function isWebp() {
	function testWebP(callback) {
		 let webP = new Image;
		 webP.onload = webP.onerror = function() {
			  callback(webP.height == 2);
		 };
		 webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
	}
	testWebP((function(support) {
		 let className = support === true ? "webp" : "no-webp";
		 document.documentElement.classList.add(className);
	}));
}
let addWindowScrollEvent = false;
setTimeout((() => {
	if (addWindowScrollEvent) {
		 let windowScroll = new Event("windowScroll");
		 window.addEventListener("scroll", (function(e) {
			  document.dispatchEvent(windowScroll);
		 }));
	}
}), 0);
const animItems = document.querySelectorAll("._anim-items");
if (animItems.length > 0) {
	window.addEventListener("scroll", animOnScroll);
	function animOnScroll() {
		 for (let index = 0; index < animItems.length; index++) {
			  const animItem = animItems[index];
			  const animItemHeight = animItem.offsetHeight;
			  const animItemOffset = offset(animItem).top;
			  const animStart = 4;
			  let animItemPoint = window.innerHeight - animItemHeight / animStart;
			  if (animItemHeight > window.innerHeight) animItemPoint = window.innerHeight - window.innerHeight / animStart;
			  if (pageYOffset > animItemOffset - animItemPoint && pageYOffset < animItemOffset + animItemHeight) animItem.classList.add("_active"); else if (!animItem.classList.contains("_anim-no-hide")) animItem.classList.remove("_active");
		 }
	}
	function offset(el) {
		 const rect = el.getBoundingClientRect(), scrollLeft = window.pageXOffset || document.documentElement.scrollLeft, scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		 return {
			  top: rect.top + scrollTop,
			  left: rect.left + scrollLeft
		 };
	}
	setTimeout((() => {
		 animOnScroll();
	}), 300);
}
window["FLS"] = true;
isWebp();



function getTimeRemaining(endtime) {
	var t = Date.parse(endtime) - Date.parse(new Date());
	var seconds = Math.floor((t / 1000) % 60);
	var minutes = Math.floor((t / 1000 / 60) % 60);
	var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
	var days = Math.floor(t / (1000 * 60 * 60 * 24));
	return {
	  'total': t,
	  'days': days,
	  'hours': hours,
	  'minutes': minutes,
	  'seconds': seconds
	};
 }
 
 function initializeClock(id, endtime) {
	var clock = document.getElementById(id);
	var daysSpan = clock.querySelector('.days');
	var hoursSpan = clock.querySelector('.hours');
	var minutesSpan = clock.querySelector('.minutes');
	var secondsSpan = clock.querySelector('.seconds');
 
	function updateClock() {
	  var t = getTimeRemaining(endtime);
 
	  daysSpan.innerHTML = ('0' + t.days).slice(-2);
	  hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
	  minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
	  secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
 
	  if (t.total <= 0) {
		 clearInterval(timeinterval);
	  }
	}
 
	updateClock();
	var timeinterval = setInterval(updateClock, 1000);
 }
 
 var deadline="August 10 2023 23:59:59 GMT+0200"; //for Ukraine
 initializeClock('clockdiv', deadline);