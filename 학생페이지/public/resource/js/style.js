$(document).ready(function () {
    
    // 메뉴 클릭시
    $("header nav li .depth").click(function(){
        $("header nav ul li").removeClass("act");
        $(this).closest("li").addClass("act");
        $(this).closest(".nav2depth").closest("li").addClass("act");
    });

    // 캘린더에서 일자 선택시
    $(".calendar>ul.cell>li button").click(function(){
        $(this).parents("li").addClass("act");
        $(this).parents("li").siblings("li").removeClass("act");
    });

    // 캘린더 팝업 오픈
    $(".slide-controller .num").click(function(){
        popUpOpen();
        $(".popup.calendar").addClass("act");
    });

    // 캘린더 팝업에서 월 선택시
    $(".popup.calendar ul li button").click(function(){
        $(this).parents("li").addClass("today");
        $(this).parents("li").siblings("li").removeClass("today");
    });

    // 쪽지 팝업
    $(".util .letter").click(function(){
        popUpOpen();
        $(".popup.letter").addClass("act");
    });

    // 팝업창 닫기
    $(".popup .close").click(function(){
        popUpOpen();
        $(".dimmed .popup").removeClass("act");
    });

    // 쪽지 팝업 쪽지보내기
    $(".popup.letter .list .write").click(function(){
        $(".popup.letter .list").removeClass("act");
        $(".popup.letter .write").addClass("act");
    });

    // 쪽지 팝업 write에서 취소
    $(".popup.letter .write .btn-wrap .btn:last-child").click(function(){
        $(".popup.letter .write").removeClass("act");
        $(".popup.letter .list").addClass("act");
    });

    // 쪽지 팝업 쪽지읽기
    $(".popup.letter table tr").click(function(){
        $(".popup.letter .list").removeClass("act");
        $(".popup.letter .read").addClass("act");
    });

    // 쪽지 팝업 read에서 목록창으로
    $(".popup.letter .read .btn-wrap .btn:first-child").click(function(){
        $(".popup.letter .read").removeClass("act");
        $(".popup.letter .list").addClass("act");
    });

    // 쪽지 팝업 read에서 탑장
    $(".popup.letter .read .btn-wrap .btn:last-child").click(function(){
        $(".popup.letter .read").removeClass("act");
        $(".popup.letter .write").addClass("act");
    });

    // 모바일 메뉴 오픈
    $(".m-icn-menu").click(function(){
        $(this).toggleClass("act");
        $(".m-header").toggleClass("act");
    });

    // 탭기능
    $(".tab-in-tab ul li button, .tab ul li button").click(function(){
        $(this).parents("li").addClass("act");
        $(this).parents("li").siblings("li").removeClass("act");
    });

    // 동영상 플레이 버튼 클릭시
    $(".video-wrap video").click(function(){
        const videoNow = $('video').get(0);
        if(videoNow.paused == true){
            videoNow.play();
            $(this).siblings(".btn").addClass("hide");
            $(this).siblings(".btn").removeClass("show");
        }else{
            videoNow.pause();
            $(this).siblings(".btn").addClass("show");
            $(this).siblings(".btn").removeClass("hide");
        }
    });

    // 음성파일 플레이버튼
    $(".audio-wrap .c-audio .btn-toggle").click(function(){
        $(this).find("button").toggleClass("act");
    });

    // 자주묻는질문 li 질문 클릭시
    $(".inner.qna>ul li .btn").click(function(){
        $(this).parents("li").addClass("act");
        $(this).parents("li").siblings("li").removeClass("act");
        $(this).parents("li").siblings("li").find(".answer").slideUp();
        $(this).siblings(".answer").slideDown();
    });

    // 1:1 문의하기 문의할 학습 선택하기 클릭시
    $(".inquiry .contents-wrap .inner .write .submit-wrap>.btn.white").click(function(){
        popUpOpen();
        $(".popup.choice-learning").addClass("act");
    });
});

// 딤창 온/오프프
function popUpOpen(){
    $(".dimmed").toggleClass("act");
};