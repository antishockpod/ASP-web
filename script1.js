document.addEventListener('DOMContentLoaded', function() {
    function animateMarquee() {
        const marquee = document.querySelector('.logo-marquee');
        const container = document.querySelector('.logo-container');
        const containerWidth = container.offsetWidth;

        let start = null;
        function step(timestamp) {
            if (!start) start = timestamp;
            const progress = timestamp - start;
            const distance = (progress / 10000) * 1000; // 100px/초 속도
            container.style.transform = `translateX(-${distance}px)`;

            if (distance < containerWidth) {
                requestAnimationFrame(step);
            } else {
                start = null;
                // 마지막 로고가 화면을 벗어나면 애니메이션을 재시작합니다.
                container.style.transform = `translateX(0)`;
                animateMarquee();
            }
        }

        requestAnimationFrame(step);
    }

    animateMarquee(); // 애니메이션 시작
});

// 기존 로고 애니메이션
document.addEventListener('DOMContentLoaded', function() {
    function animateMarquee() {
        const marquee = document.querySelector('.logo-marquee');
        const container = document.querySelector('.logo-container');
        const containerWidth = container.offsetWidth;

        let start = null;
        function step(timestamp) {
            if (!start) start = timestamp;
            const progress = timestamp - start;
            const distance = (progress / 10000) * 1000;

            container.style.transform = `translateX(-${distance}px)`;

            if (distance < containerWidth) {
                requestAnimationFrame(step);
            } else {
                start = null;
                container.style.transform = `translateX(0)`;
                animateMarquee();
            }
        }

        requestAnimationFrame(step);
    }

    animateMarquee();
});


// 배경 영상 자동 재생 및 페이지 복귀 처리
const video = document.getElementById("backgroundVideo");

function playBackgroundVideo() {
    if (!video) return;

    video.muted = true;

    const playPromise = video.play();

    if (playPromise !== undefined) {
        playPromise.catch(error => {
            console.log("Video autoplay prevented:", error);
        });
    }
}

document.addEventListener("DOMContentLoaded", playBackgroundVideo);

window.addEventListener("pageshow", playBackgroundVideo);

document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "visible") {
        playBackgroundVideo();
    }
});
