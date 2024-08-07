(() => {
    "use strict";
    let addWindowScrollEvent = false;
    setTimeout((() => {
        if (addWindowScrollEvent) {
            let windowScroll = new Event("windowScroll");
            window.addEventListener("scroll", (function(e) {
                document.dispatchEvent(windowScroll);
            }));
        }
    }), 0);
    const counters = document.querySelectorAll("[data-counter]");
    if (counters) counters.forEach((counter => {
        counter.addEventListener("click", (e => {
            const target = e.target;
            if (target.closest(".counter__button")) {
                let value = parseInt(target.closest(".counter").querySelector("input").value);
					if (target.classList.contains("counter__button_plus")) value += 5;
					if (target.classList.contains("counter__button_minus")) value -= 5;
               if (value <= 10) value = 10;
               target.closest(".counter").querySelector("input").value = value;
            }
        }));
    }));
    window["FLS"] = true;
    isWebp();
})();