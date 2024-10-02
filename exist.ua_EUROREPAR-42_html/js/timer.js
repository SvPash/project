(() => {
	"use strict";
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
	class DynamicAdapt {
		 constructor(type) {
			  this.type = type;
		 }
		 init() {
			  this.оbjects = [];
			  this.daClassname = "_dynamic_adapt_";
			  this.nodes = [ ...document.querySelectorAll("[data-da]") ];
			  this.nodes.forEach((node => {
					const data = node.dataset.da.trim();
					const dataArray = data.split(",");
					const оbject = {};
					оbject.element = node;
					оbject.parent = node.parentNode;
					оbject.destination = document.querySelector(`${dataArray[0].trim()}`);
					оbject.breakpoint = dataArray[1] ? dataArray[1].trim() : "767";
					оbject.place = dataArray[2] ? dataArray[2].trim() : "last";
					оbject.index = this.indexInParent(оbject.parent, оbject.element);
					this.оbjects.push(оbject);
			  }));
			  this.arraySort(this.оbjects);
			  this.mediaQueries = this.оbjects.map((({breakpoint}) => `(${this.type}-width: ${breakpoint}px),${breakpoint}`)).filter(((item, index, self) => self.indexOf(item) === index));
			  this.mediaQueries.forEach((media => {
					const mediaSplit = media.split(",");
					const matchMedia = window.matchMedia(mediaSplit[0]);
					const mediaBreakpoint = mediaSplit[1];
					const оbjectsFilter = this.оbjects.filter((({breakpoint}) => breakpoint === mediaBreakpoint));
					matchMedia.addEventListener("change", (() => {
						 this.mediaHandler(matchMedia, оbjectsFilter);
					}));
					this.mediaHandler(matchMedia, оbjectsFilter);
			  }));
		 }
		 mediaHandler(matchMedia, оbjects) {
			  if (matchMedia.matches) оbjects.forEach((оbject => {
					this.moveTo(оbject.place, оbject.element, оbject.destination);
			  })); else оbjects.forEach((({parent, element, index}) => {
					if (element.classList.contains(this.daClassname)) this.moveBack(parent, element, index);
			  }));
		 }
		 moveTo(place, element, destination) {
			  element.classList.add(this.daClassname);
			  if (place === "last" || place >= destination.children.length) {
					destination.append(element);
					return;
			  }
			  if (place === "first") {
					destination.prepend(element);
					return;
			  }
			  destination.children[place].before(element);
		 }
		 moveBack(parent, element, index) {
			  element.classList.remove(this.daClassname);
			  if (parent.children[index] !== void 0) parent.children[index].before(element); else parent.append(element);
		 }
		 indexInParent(parent, element) {
			  return [ ...parent.children ].indexOf(element);
		 }
		 arraySort(arr) {
			  if (this.type === "min") arr.sort(((a, b) => {
					if (a.breakpoint === b.breakpoint) {
						 if (a.place === b.place) return 0;
						 if (a.place === "first" || b.place === "last") return -1;
						 if (a.place === "last" || b.place === "first") return 1;
						 return 0;
					}
					return a.breakpoint - b.breakpoint;
			  })); else {
					arr.sort(((a, b) => {
						 if (a.breakpoint === b.breakpoint) {
							  if (a.place === b.place) return 0;
							  if (a.place === "first" || b.place === "last") return 1;
							  if (a.place === "last" || b.place === "first") return -1;
							  return 0;
						 }
						 return b.breakpoint - a.breakpoint;
					}));
					return;
			  }
		 }
	}
	const da = new DynamicAdapt("max");
	da.init();
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
	var deadline = "October 31 2024 23:59:59 GMT+0200";
	initializeClock("clockdiv", deadline);
	window["FLS"] = true;
	isWebp();
})();