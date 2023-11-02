$(document).ready(function () {
    const icon5 = $(".icon5");

    icon5.click(function () {
        $(this).toggleClass("icon5on");
    });

    // 페이지 로드 시 초기 상태 설정 (아이콘 비활성화)
    icon5.removeClass("icon5on");
});


$(document).ready(function () {
    $(".icon4").click(function () {
        $(".header_content").toggleClass('on');
        $(this).toggleClass('on');
    });
});


$(document).ready(function () {
    $(".hov").hover(function () {
        $(this).toggleClass('hover');
    });
});

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    slidesPerView: 8,
    spaceBetween: 200,
    breakpoints: { // 반응형 설정이 가능 width값으로 조정
        1920: {
            slidesPerView: 9,
        },

    },
});