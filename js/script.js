var swiper = new Swiper(".swiper_top", {
    direction: "vertical",
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    loop: true
});

var swiper = new Swiper(".mb", {
    pagination: {
        el: ".swiper-pagination",
    },
    loop: true
});

/* ethics */
$(document).ready(function () {

    //처음들어갔을때 모습 만들기...
    $(".tab_content").hide(); //tab_content 부분을 모두 숨김.
    $("ul.tabs li:first").addClass("active").show(); //첫번째 탭이 active클래스를 붙이고, 보여줌.
    $(".tab_content:first").show(); //tab_contents중 첫번째꺼를 보여줌

    //On Click Event
    $("ul.tabs li").click(function () {

        $("ul.tabs li").removeClass("active"); //Remove any "active" class
        $(this).addClass("active"); //선택한 탭에만 active클래스(클릭한 li만 붙음. 내가 클릭한 부분에 들어갈 스타일을 따로 붙여준다.) 붙임
        $(".tab_content").hide(); //모든 contents들 숨김

        var activeTab = $(this).find("span").attr("data");
        /*내가 방금 클릭한 li 안에있는 span태그의 data부분 안에 들어있는 id이름을 가져오는것.*/
        $(activeTab).fadeIn();
        /*위에서 가져온 아이디 이름에 해당하는 대상만 보이게 한다. 여기서 fadeIn대신에 show를 쓰면 번쩍번쩍한 느낌을 없앨 수 있다.*/
        return false;
    });
});


/* category */
var swiper = new Swiper(".card", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },//화살표를 작동하게 하는 옵션.
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },//도트부분을 작동하게 하는 옵션.
    /*가장 작게 설정한 breakpoint크기 이하일때 적용됨*/
    slidesPerView: 4,
    spaceBetween: 10,
    breakpoints: {
        500: {
            slidesPerView: 4,
            spaceBetween: 20,
        },//500 ~ 1099 사이일때 보여지는 모습

        849: {
            slidesPerView: 5,
            spaceBetween: 20,
        },//640 ~ 1099 사이일때 보여지는 모습
        1000: {
            slidesPerView: 6,
            spaceBetween: 20,
        },//1100~1299 사이일때 보여지는 모습
        1320: {
            slidesPerView: 6,
            spaceBetween: 30,
        },//1300이상일때 보여지는 모습
    },
});//지우면 안되요!


