$(document).ready(function () {
    // 인트로페이지 로그인 애니메이션입니다. 로딩바가 100% 가 되면 버튼 이 노출됩니다.
    function introLoading() {
        $(".wrap.intro .bottom .progress-bar .ball").animate({ width: '100%' }, 1500);
        setTimeout(function () {
            $(".wrap.intro .bottom > div:nth-child(1)").hide();
            $(".wrap.intro .bottom > .btn-wrap").addClass("act");
        }, 1600);
    }
    introLoading();

    // (공통) 재생/일시정지 - 비디오영역 클릭시
    $("video").click(function () {
        const videoNow = $('video').get(0);
        if (videoNow.paused == true) {
            videoNow.play();
            $(".btn.play").removeClass("act");
            $(".btn.pause").addClass("act");
        } else {
            videoNow.pause();
            $(".btn.pause").removeClass("act");
            $(".btn.play").addClass("act");
        }
    });

    // (공통) 재생/일시정지 - 버튼 클릭시
    $(".btn.play").click(function () {
        const videoNow = $('video').get(0);
        videoNow.play();
        $(this).toggleClass("act");
    });

    // (스피킹) 스와이퍼 슬라이드 script 하이라이팅 관련
    // var swiper = new Swiper(".mySwiper", {
    //   slidesPerView: "auto",
    //   direction: "vertical",
    //   centeredSlides: true,
    //   grabCursor: true,
    //   pagination: {
    //     el: ".swiper-pagination",
    //     clickable: true,
    //   },
    // });


    $('.script li').each(function () {
        const $li = $(this);

        new MutationObserver(function (mutations) {
            mutations.forEach(function (mutation) {
                if (mutation.attributeName === 'class' && $li.hasClass('highlights')) {
                    handleHighlight($li);
                }
            });
        }).observe(this, {
            attributes: true,
            attributeFilter: ['class']
        });
    });

    function handleHighlight($target) {
        const $ul = $('.script');
        const $li = $('.script li');
        const index = $li.index($target);

        const containerHeight = $('.scroll-script').outerHeight();
        const ulScrollMax = $ul[0].scrollHeight - containerHeight;

        const targetTop = $target.position().top;
        const targetHeight = $target.outerHeight();
        const scrollTo = targetTop + $ul.scrollTop() - (containerHeight / 2) + (targetHeight / 2);

        if (index > 2 && scrollTo < ulScrollMax) {
            $ul.stop().animate({ scrollTop: scrollTo }, 250);
        }
    }

    // (스피킹) 결과창 녹음듣기 버튼
    $(".speaking.result .box .audio-wrap .btn").click(function () {
        $(this).find("span").toggleClass("act");
    });

    // (스피킹) 녹음버튼

    //// 타이머
    var i = 0;
    $(".btn-wrap .rec-wrap .btn-wrap-rec .btn").click(function () {
        // 녹음 버튼에 act 토글
        $(this).toggleClass("act");
        $(this).siblings("button").toggleClass("act");
        i++;
        if (i == 1) {
            console.log(i);
        }
        else if (i == 2) {
            console.log(i);
            // 녹음파일 재생버튼 노출
            $(".btn-wrap-play").addClass("show");

            // 저장버튼 삭제
            $(".btn.save").toggleClass("act");
        }
        else if (i == 3) {
            console.log(i);

            // 녹음파일 재생버튼 가림
            $(".btn-wrap-play").removeClass("show");

            // 녹음 버튼에있는 완료된 타이머숫자 가림
            $(this).siblings(".text-area").removeClass("act");

            // 저장버튼 삭제
            $(".btn.save").toggleClass("act");
            i = 1;
        }
    });

    $(".btn-wrap .rec-wrap .btn-wrap-play .btn").click(function () {
        $(this).toggleClass("act");
        $(this).siblings("button").toggleClass("act");
        if ($(".btn-play").hasClass("act")) {
            $(this).siblings(".text-area").addClass("act");
        }
        else {
            $(this).siblings(".text-area").removeClass("act");
        }
    });

    // (스피킹) 녹화버튼
    $(".speaking.step04 .video.rec .btn.rec").click(function () {
        $(this).toggleClass("act");
    });

    // (보카) step1 카드 뒤집기
    $(".voca.step01 .card-wrap li").click(function () {
        $(this).addClass("act");
        $(".voca.step01 .alert").text($(this).find("span").text());
    });

    // (보카) step1 카드 두줄일때 폰트사이즈 작아지게
    $(function () {
        $('.card-wrap li .btn span').each(function () {
            var $el = $(this);
            var lineHeight = parseFloat($el.css('line-height'));
            var width = $el.width();
            var height = $el.height();
            var lines = Math.round(height / lineHeight);

            if (width >= $(this).parents('.btn').width()) {
                $el.css('font-size', 'var(--font-size4)');
            }
        });
    });

    // (보카) step2 두줄일때 폰트사이즈 줄임
    var text = $('.voca.step00 .question-wrap .question-scroll span');
    var lineHeight = text.css("line-height");
    var height = $('.voca.step00 .question-wrap .question-scroll span').css("height");

    if(height > lineHeight){
        text.css({'font-size':'var(--font-size8'});
    }
    // (보카) step3 오지선다 선택시
    $(".rel-scroll ul li button").click(function () {
        $(".rel-scroll ul li button").removeClass("act");
        $(this).addClass("act");
    });

    // 다크모드 테스트
    $("body").dblclick(function () {
        $(".wrap").toggleClass("dark");
    });
});
