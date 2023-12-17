document.addEventListener('DOMContentLoaded', function () {
    const slider = document.querySelector('.slider');
    const leftArrow = document.querySelector('.arrow.left');
    const rightArrow = document.querySelector('.arrow.right');
    const indicatorParents = document.querySelector('.controls ul');
    var sectionIndex = 0;

    document.querySelectorAll('.controls li').forEach(function (indicator, ind) {
        indicator.addEventListener('click', function () {
            sectionIndex = ind;
            document.querySelector('.controls .selected').classList.remove('selected');
            indicator.classList.add('selected');
            slider.style.transform = 'translate(' + (sectionIndex) * -33.333 + '%)';
        });
    });

    rightArrow.addEventListener('click', function () {
        sectionIndex = (sectionIndex < 2) ? sectionIndex + 1 : 0;
        document.querySelector('.controls .selected').classList.remove('selected');
        indicatorParents.children[sectionIndex].classList.add('selected');
        slider.style.transform = 'translate(' + (sectionIndex) * -33.333 + '%)';
    });

    leftArrow.addEventListener('click', function () {
        sectionIndex = (sectionIndex > 0) ? sectionIndex - 1 : 0;
        document.querySelector('.controls .selected').classList.remove('selected');
        indicatorParents.children[sectionIndex].classList.add('selected');
        slider.style.transform = 'translate(' + (sectionIndex) * -33.333 + '%)';
    });
});