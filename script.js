// script.js
document.addEventListener('DOMContentLoaded', () => {
    const logo = document.querySelector('.logo');
    let angle = 0;
    let position = 0;
    const speed = 2; // 이동 속도를 조정하세요

    // 로고 클릭 이벤트 추가
    logo.addEventListener('click', () => {
        window.location.href = 'index1.html'; // 여기에 열고자 하는 URL을 넣으세요
    });

    function rollLogo() {
        angle += 5; // 회전 각도를 조정하세요
        position += speed;
        logo.style.transform = `translate(-50%, -50%) rotate(${angle}deg) translateX(${position}px)`;

        if (position > window.innerWidth / 2 + logo.width / 2) {
            position = -window.innerWidth / 2 - logo.width / 2;
        }

        requestAnimationFrame(rollLogo);
    }

    rollLogo();
});