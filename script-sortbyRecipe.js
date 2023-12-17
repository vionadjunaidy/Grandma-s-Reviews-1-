$(document).ready(function () {
    $('#byRating').on('click', function () {
        $('.list-recipes div.rating:hidden').map(function () {
            return { val: parseFloat($(this).text(), 10), el: this.parentNode.parentNode };
        }).sort(function (a, b) {
            return b.val - a.val;
        }).map(function () {
            return this.el;
        }).appendTo('.list-recipes');
    });
    $('#byRating1').on('click', function () {
        $('.list-recipes div.rating:hidden').map(function () {
            return { val: parseFloat($(this).text(), 10), el: this.parentNode.parentNode };
        }).sort(function (a, b) {
            return a.val - b.val;
        }).map(function () {
            return this.el;
        }).appendTo('.list-recipes');
    });

    $('.rating').hide();
});
