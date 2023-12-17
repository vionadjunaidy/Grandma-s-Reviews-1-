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
            slider.style.transform = 'translate(' + (sectionIndex) * -20 + '%)';
        });
    });

    rightArrow.addEventListener('click', function () {
        sectionIndex = (sectionIndex < 4) ? sectionIndex + 1 : 0;
        document.querySelector('.controls .selected').classList.remove('selected');
        indicatorParents.children[sectionIndex].classList.add('selected');
        slider.style.transform = 'translate(' + (sectionIndex) * -20 + '%)';
    });

    leftArrow.addEventListener('click', function () {
        sectionIndex = (sectionIndex > 0) ? sectionIndex - 1 : 0;
        document.querySelector('.controls .selected').classList.remove('selected');
        indicatorParents.children[sectionIndex].classList.add('selected');
        slider.style.transform = 'translate(' + (sectionIndex) * -20 + '%)';
    });
});

function showSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}
function hideSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}

function checkWindowWidth() {
    const windowWidth = window.innerWidth;
    if (windowWidth >= 600) {
        hideSidebar();
    }
}

window.addEventListener('resize', checkWindowWidth);
checkWindowWidth();