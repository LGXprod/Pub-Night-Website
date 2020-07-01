function initPositionHr() {
    $(".selected").css({
        display: "inline-block",
        width: $(".youtube").width(),
        position: "relative",
        left: (($(".youtube").position().left - 10) + "px"),
        transitionTimingFunction: "ease-in-out"
    });
}

initPositionHr();

function platformHover() {
    $(".youtube").hover(function() {
        initPositionHr();
    });

    $(".instagram").hover(function() {
        $(".selected").css({
            width: $(".instagram").width(),
            left: (($(".instagram").position().left - 10) + "px"),
            transitionTimingFunction: "ease-in-out"
        });
    });

    $(".facebook").hover(function() {
        $(".selected").css({
            width: $(".facebook").width(),
            left: (($(".facebook").position().left - 10) + "px"),
            transitionTimingFunction: "ease-in-out"
        });
    });
}

platformHover();

$(window).resize(function() {
    initPositionHr();
});

$(".facebook").click(function() {
    $(".fb-video").css({display: "block"});
    $(".yt").css({display: "none"});
});

$(".youtube").click(function() {
    $(".fb-video").css({display: "none"});
    $(".yt").css({display: "block"});
});