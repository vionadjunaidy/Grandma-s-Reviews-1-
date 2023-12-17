$(document).ready(function () {
    $('#byPrice').on('click', function () {
        $('.list-restaurants div.price:hidden').map(function () {
            return { val: parseFloat($(this).text(), 10), el: this.parentNode.parentNode };
        }).sort(function (a, b) {
            return a.val - b.val;
        }).map(function () {
            return this.el;
        }).appendTo('.list-restaurants');
    });
    $('#byPrice1').on('click', function () {
        $('.list-restaurants div.price:hidden').map(function () {
            return { val: parseFloat($(this).text(), 10), el: this.parentNode.parentNode };
        }).sort(function (a, b) {
            return b.val - a.val;
        }).map(function () {
            return this.el;
        }).appendTo('.list-restaurants');
    });

    $('#byRating').on('click', function () {
        $('.list-restaurants div.rating:hidden').map(function () {
            return { val: parseFloat($(this).text(), 10), el: this.parentNode.parentNode };
        }).sort(function (a, b) {
            return b.val - a.val;
        }).map(function () {
            return this.el;
        }).appendTo('.list-restaurants');
    });
    $('#byRating1').on('click', function () {
        $('.list-restaurants div.rating:hidden').map(function () {
            return { val: parseFloat($(this).text(), 10), el: this.parentNode.parentNode };
        }).sort(function (a, b) {
            return a.val - b.val;
        }).map(function () {
            return this.el;
        }).appendTo('.list-restaurants');
    });

    $('.price').hide();
    $('.rating').hide();
});