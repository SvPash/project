'use strict';

// Масив кінцевих точок
let points = [
    {dateTo: '2023-09-20T23:59:59', price: 590},
    {dateTo: '2023-10-01T23:59:59', price: 690},
    {dateTo: '2023-10-15T23:59:59', price: 790},
    {dateTo: '2023-11-01T23:59:59', price: 890},
    {dateTo: '2023-11-01T23:59:59', price: 890},
    {dateTo: '2023-12-01T23:59:59', price: 990},
    {dateTo: '2023-12-15T23:59:59', price: 990},
    {dateTo: '2024-01-01T23:59:59', price: 1150},
    {dateTo: '2024-01-13T23:59:59', price: 1250},
    {dateTo: '2024-01-27T23:59:59', price: 1550},
    {dateTo: '2024-02-05T23:59:59', price: 1750},
    {dateTo: '2024-02-12T23:59:59', price: 1950},
    {dateTo: '2024-02-19T23:59:59', price: 2250},
    {dateTo: '2024-02-24T23:59:59', price: 2750},
    {dateTo: '2024-02-26T23:59:59', price: 3250},
];

function getTimeRemaining (aPoints) {
    // Знаходимо поточну кінцеву точку
    let point = aPoints.find(x => new Date(x.dateTo).getTime() > new Date().getTime());

    let t = Date.parse(point.dateTo) - Date.parse(new Date());
    let seconds = Math.floor((t / 1000) % 60);
    let minutes = Math.floor((t / 1000 / 60) % 60);
    let hours   = Math.floor((t / (1000 * 60 * 60)) % 24);
    let days    = Math.floor(t / (1000 * 60 * 60 * 24));

    return {
        'total'  : t,
        'days'   : days,
        'hours'  : hours,
        'minutes': minutes,
        'seconds': seconds,
        // Повертаємо поточну ціну
        'price'  : point.price
    };
}

function initializeClock (id, aPoints) {
    let clock       = document.getElementById(id);
    let daysSpan    = clock.querySelector('.days');
    let hoursSpan   = clock.querySelector('.hours');
    let minutesSpan = clock.querySelector('.minutes');
    let secondsSpan = clock.querySelector('.seconds');
    let priceLabel  = document.getElementById('price');

    function updateClock () {
        let t = getTimeRemaining(aPoints);

        daysSpan.innerHTML    = ('0' + t.days).slice(-2);
        hoursSpan.innerHTML   = ('0' + t.hours).slice(-2);
        minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
        secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

        // Виводимо поточну ціну
        priceLabel.innerHTML  = t.price + ' ГРН';

        if (t.total <= 0) {
            clearInterval(timeinterval);
            setTimeout(initializeClock('clockdiv', endtimeTwo), 1000);
        }
    }

    updateClock();

    var timeinterval = setInterval(updateClock, 1000);
}

setTimeout(initializeClock('clockdiv', points), 1000);