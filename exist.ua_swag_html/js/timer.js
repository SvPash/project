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
 

(() => {
	"use strict";
	const modules_flsModules = {};
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
	function functions_FLS(message) {
		 setTimeout((() => {
			  if (window.FLS) console.log(message);
		 }), 0);
	}
	function getDigFormat(item, sepp = " ") {
		 return item.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, `$1${sepp}`);
	}
	function uniqArray(array) {
		 return array.filter((function(item, index, self) {
			  return self.indexOf(item) === index;
		 }));
	}
	class MousePRLX {
		 constructor(props, data = null) {
			  let defaultConfig = {
					init: true,
					logging: true
			  };
			  this.config = Object.assign(defaultConfig, props);
			  if (this.config.init) {
					const paralaxMouse = document.querySelectorAll("[data-prlx-mouse]");
					if (paralaxMouse.length) {
						 this.paralaxMouseInit(paralaxMouse);
						 this.setLogging(`Прокинувся, стежу за об'єктами: (${paralaxMouse.length})`);
					} else this.setLogging("Немає жодного обєкта. Сплю...");
			  }
		 }
		 paralaxMouseInit(paralaxMouse) {
			  paralaxMouse.forEach((el => {
					const paralaxMouseWrapper = el.closest("[data-prlx-mouse-wrapper]");
					const paramСoefficientX = el.dataset.prlxCx ? +el.dataset.prlxCx : 100;
					const paramСoefficientY = el.dataset.prlxCy ? +el.dataset.prlxCy : 100;
					const directionX = el.hasAttribute("data-prlx-dxr") ? -1 : 1;
					const directionY = el.hasAttribute("data-prlx-dyr") ? -1 : 1;
					const paramAnimation = el.dataset.prlxA ? +el.dataset.prlxA : 50;
					let positionX = 0, positionY = 0;
					let coordXprocent = 0, coordYprocent = 0;
					setMouseParallaxStyle();
					if (paralaxMouseWrapper) mouseMoveParalax(paralaxMouseWrapper); else mouseMoveParalax();
					function setMouseParallaxStyle() {
						 const distX = coordXprocent - positionX;
						 const distY = coordYprocent - positionY;
						 positionX += distX * paramAnimation / 1e3;
						 positionY += distY * paramAnimation / 1e3;
						 el.style.cssText = `transform: translate3D(${directionX * positionX / (paramСoefficientX / 10)}%,${directionY * positionY / (paramСoefficientY / 10)}%,0) rotate(0.02deg);`;
						 requestAnimationFrame(setMouseParallaxStyle);
					}
					function mouseMoveParalax(wrapper = window) {
						 wrapper.addEventListener("mousemove", (function(e) {
							  const offsetTop = el.getBoundingClientRect().top + window.scrollY;
							  if (offsetTop >= window.scrollY || offsetTop + el.offsetHeight >= window.scrollY) {
									const parallaxWidth = window.innerWidth;
									const parallaxHeight = window.innerHeight;
									const coordX = e.clientX - parallaxWidth / 2;
									const coordY = e.clientY - parallaxHeight / 2;
									coordXprocent = coordX / parallaxWidth * 100;
									coordYprocent = coordY / parallaxHeight * 100;
							  }
						 }));
					}
			  }));
		 }
		 setLogging(message) {
			  this.config.logging ? functions_FLS(`[PRLX Mouse]: ${message}`) : null;
		 }
	}
	modules_flsModules.mousePrlx = new MousePRLX({});
	class ScrollWatcher {
		 constructor(props) {
			  let defaultConfig = {
					logging: true
			  };
			  this.config = Object.assign(defaultConfig, props);
			  this.observer;
			  !document.documentElement.classList.contains("watcher") ? this.scrollWatcherRun() : null;
		 }
		 scrollWatcherUpdate() {
			  this.scrollWatcherRun();
		 }
		 scrollWatcherRun() {
			  document.documentElement.classList.add("watcher");
			  this.scrollWatcherConstructor(document.querySelectorAll("[data-watch]"));
		 }
		 scrollWatcherConstructor(items) {
			  if (items.length) {
					this.scrollWatcherLogging(`Прокинувся, стежу за об'єктами (${items.length})...`);
					let uniqParams = uniqArray(Array.from(items).map((function(item) {
						 return `${item.dataset.watchRoot ? item.dataset.watchRoot : null}|${item.dataset.watchMargin ? item.dataset.watchMargin : "0px"}|${item.dataset.watchThreshold ? item.dataset.watchThreshold : 0}`;
					})));
					uniqParams.forEach((uniqParam => {
						 let uniqParamArray = uniqParam.split("|");
						 let paramsWatch = {
							  root: uniqParamArray[0],
							  margin: uniqParamArray[1],
							  threshold: uniqParamArray[2]
						 };
						 let groupItems = Array.from(items).filter((function(item) {
							  let watchRoot = item.dataset.watchRoot ? item.dataset.watchRoot : null;
							  let watchMargin = item.dataset.watchMargin ? item.dataset.watchMargin : "0px";
							  let watchThreshold = item.dataset.watchThreshold ? item.dataset.watchThreshold : 0;
							  if (String(watchRoot) === paramsWatch.root && String(watchMargin) === paramsWatch.margin && String(watchThreshold) === paramsWatch.threshold) return item;
						 }));
						 let configWatcher = this.getScrollWatcherConfig(paramsWatch);
						 this.scrollWatcherInit(groupItems, configWatcher);
					}));
			  } else this.scrollWatcherLogging("Сплю, немає об'єктів для стеження. ZzzZZzz");
		 }
		 getScrollWatcherConfig(paramsWatch) {
			  let configWatcher = {};
			  if (document.querySelector(paramsWatch.root)) configWatcher.root = document.querySelector(paramsWatch.root); else if (paramsWatch.root !== "null") this.scrollWatcherLogging(`Эмм... батьківського об'єкта ${paramsWatch.root} немає на сторінці`);
			  configWatcher.rootMargin = paramsWatch.margin;
			  if (paramsWatch.margin.indexOf("px") < 0 && paramsWatch.margin.indexOf("%") < 0) {
					this.scrollWatcherLogging(`йой, налаштування data-watch-margin потрібно задавати в PX або %`);
					return;
			  }
			  if (paramsWatch.threshold === "prx") {
					paramsWatch.threshold = [];
					for (let i = 0; i <= 1; i += .005) paramsWatch.threshold.push(i);
			  } else paramsWatch.threshold = paramsWatch.threshold.split(",");
			  configWatcher.threshold = paramsWatch.threshold;
			  return configWatcher;
		 }
		 scrollWatcherCreate(configWatcher) {
			  this.observer = new IntersectionObserver(((entries, observer) => {
					entries.forEach((entry => {
						 this.scrollWatcherCallback(entry, observer);
					}));
			  }), configWatcher);
		 }
		 scrollWatcherInit(items, configWatcher) {
			  this.scrollWatcherCreate(configWatcher);
			  items.forEach((item => this.observer.observe(item)));
		 }
		 scrollWatcherIntersecting(entry, targetElement) {
			  if (entry.isIntersecting) {
					!targetElement.classList.contains("_watcher-view") ? targetElement.classList.add("_watcher-view") : null;
					this.scrollWatcherLogging(`Я бачу ${targetElement.classList}, додав клас _watcher-view`);
			  } else {
					targetElement.classList.contains("_watcher-view") ? targetElement.classList.remove("_watcher-view") : null;
					this.scrollWatcherLogging(`Я не бачу ${targetElement.classList}, прибрав клас _watcher-view`);
			  }
		 }
		 scrollWatcherOff(targetElement, observer) {
			  observer.unobserve(targetElement);
			  this.scrollWatcherLogging(`Я перестав стежити за ${targetElement.classList}`);
		 }
		 scrollWatcherLogging(message) {
			  this.config.logging ? functions_FLS(`[Спостерігач]: ${message}`) : null;
		 }
		 scrollWatcherCallback(entry, observer) {
			  const targetElement = entry.target;
			  this.scrollWatcherIntersecting(entry, targetElement);
			  targetElement.hasAttribute("data-watch-once") && entry.isIntersecting ? this.scrollWatcherOff(targetElement, observer) : null;
			  document.dispatchEvent(new CustomEvent("watcherCallback", {
					detail: {
						 entry
					}
			  }));
		 }
	}
	modules_flsModules.watcher = new ScrollWatcher({});
	let addWindowScrollEvent = false;
	function digitsCounter() {
		 if (document.querySelectorAll("[data-digits-counter]").length) document.querySelectorAll("[data-digits-counter]").forEach((element => {
			  element.dataset.digitsCounter = element.innerHTML;
			  element.innerHTML = `0`;
		 }));
		 function digitsCountersInit(digitsCountersItems) {
			  let digitsCounters = digitsCountersItems ? digitsCountersItems : document.querySelectorAll("[data-digits-counter]");
			  if (digitsCounters.length) digitsCounters.forEach((digitsCounter => {
					digitsCountersAnimate(digitsCounter);
			  }));
		 }
		 function digitsCountersAnimate(digitsCounter) {
			  let startTimestamp = null;
			  const duration = parseFloat(digitsCounter.dataset.digitsCounterSpeed) ? parseFloat(digitsCounter.dataset.digitsCounterSpeed) : 1e3;
			  const startValue = parseFloat(digitsCounter.dataset.digitsCounter);
			  const format = digitsCounter.dataset.digitsCounterFormat ? digitsCounter.dataset.digitsCounterFormat : " ";
			  const startPosition = 0;
			  const step = timestamp => {
					if (!startTimestamp) startTimestamp = timestamp;
					const progress = Math.min((timestamp - startTimestamp) / duration, 1);
					const value = Math.floor(progress * (startPosition + startValue));
					digitsCounter.innerHTML = typeof digitsCounter.dataset.digitsCounterFormat !== "undefined" ? getDigFormat(value, format) : value;
					if (progress < 1) window.requestAnimationFrame(step);
			  };
			  window.requestAnimationFrame(step);
		 }
		 function digitsCounterAction(e) {
			  const entry = e.detail.entry;
			  const targetElement = entry.target;
			  if (targetElement.querySelectorAll("[data-digits-counter]").length) digitsCountersInit(targetElement.querySelectorAll("[data-digits-counter]"));
		 }
		 document.addEventListener("watcherCallback", digitsCounterAction);
	}
	setTimeout((() => {
		 if (addWindowScrollEvent) {
			  let windowScroll = new Event("windowScroll");
			  window.addEventListener("scroll", (function(e) {
					document.dispatchEvent(windowScroll);
			  }));
		 }
	}), 0);
	function script_isWebp() {
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
	let script_addWindowScrollEvent = false;
	setTimeout((() => {
		 if (script_addWindowScrollEvent) {
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
	script_isWebp();
	function getTimeRemaining(endtime) {
		 var t = Date.parse(endtime) - Date.parse(new Date);
		 var seconds = Math.floor(t / 1e3 % 60);
		 var minutes = Math.floor(t / 1e3 / 60 % 60);
		 var hours = Math.floor(t / (1e3 * 60 * 60) % 24);
		 var days = Math.floor(t / (1e3 * 60 * 60 * 24));
		 return {
			  total: t,
			  days,
			  hours,
			  minutes,
			  seconds
		 };
	}
	function initializeClock(id, endtime) {
		 var clock = document.getElementById(id);
		 var daysSpan = clock.querySelector(".days");
		 var hoursSpan = clock.querySelector(".hours");
		 var minutesSpan = clock.querySelector(".minutes");
		 var secondsSpan = clock.querySelector(".seconds");
		 function updateClock() {
			  var t = getTimeRemaining(endtime);
			  daysSpan.innerHTML = ("0" + t.days).slice(-2);
			  hoursSpan.innerHTML = ("0" + t.hours).slice(-2);
			  minutesSpan.innerHTML = ("0" + t.minutes).slice(-2);
			  secondsSpan.innerHTML = ("0" + t.seconds).slice(-2);
			  if (t.total <= 0) clearInterval(timeinterval);
		 }
		 updateClock();
		 var timeinterval = setInterval(updateClock, 1e3);
	}
	var deadline = "October 20 2023 22:59:59 GMT+0200";
	initializeClock("clockdiv", deadline);
	window["FLS"] = true;
	isWebp();
	digitsCounter();
})();