// 햄버거 버튼/사이드바 열기/닫기 및 스크롤 숨김
document.addEventListener('DOMContentLoaded', function () {
    const leftSidebarToggle = document.getElementById('left-sidebar-toggle');
    const leftSidebar = document.getElementById('left-sidebar');
    const leftSidebarClose = document.getElementById('left-sidebar-close');
    const rightSidebarToggle = document.getElementById('right-sidebar-toggle');
    const rightSidebar = document.getElementById('right-sidebar');
    const rightSidebarClose = document.getElementById('right-sidebar-close');

    // 열기
    leftSidebarToggle.onclick = function (e) {
        e.stopPropagation();
        leftSidebar.classList.add('open');
        leftSidebarToggle.classList.add('hide');
    };
    rightSidebarToggle.onclick = function (e) {
        e.stopPropagation();
        rightSidebar.classList.add('open');
        rightSidebarToggle.classList.add('hide');
    };
    // 닫기
    leftSidebarClose.onclick = function () {
        leftSidebar.classList.remove('open');
        leftSidebarToggle.classList.remove('hide');
    };
    rightSidebarClose.onclick = function () {
        rightSidebar.classList.remove('open');
        rightSidebarToggle.classList.remove('hide');
    };
    // 바깥 클릭 시 닫기
    document.addEventListener('click', function (e) {
        if (
            leftSidebar.classList.contains('open') &&
            !leftSidebar.contains(e.target) &&
            e.target !== leftSidebarToggle
        ) {
            leftSidebar.classList.remove('open');
            leftSidebarToggle.classList.remove('hide');
        }
        if (
            rightSidebar.classList.contains('open') &&
            !rightSidebar.contains(e.target) &&
            e.target !== rightSidebarToggle
        ) {
            rightSidebar.classList.remove('open');
            rightSidebarToggle.classList.remove('hide');
        }
    });

    // 스크롤 시 햄버거 버튼 위로 이동(숨김 효과)
    function toggleHamburgerOnScroll() {
        const show = window.scrollY < 10;
        if (!leftSidebar.classList.contains('open')) {
            leftSidebarToggle.classList.toggle('hide-scroll', !show);
        }
        if (!rightSidebar.classList.contains('open')) {
            rightSidebarToggle.classList.toggle('hide-scroll', !show);
        }
    }
    window.addEventListener('scroll', toggleHamburgerOnScroll);
    toggleHamburgerOnScroll();
});