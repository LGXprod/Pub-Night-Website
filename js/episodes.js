var platformSelected = "yt";

function initPositionHr() {
    $(".selected").css({
        display: "inline-block",
        width: $(".youtube").width(),
        position: "relative",
        left: (($(".youtube").position().left - 10) + "px"),
        transition: "0.75s left ease-in-out"
    });
}

initPositionHr();

function fbPositionHr() {
    $(".selected").css({
        width: $(".facebook").width(),
        left: (($(".facebook").position().left - 10) + "px")
    });
}

function platformHover() {
    $(".youtube").hover(initPositionHr, function() {
        if (platformSelected == "fb") fbPositionHr();
    });

    // $(".instagram").hover(function() {
    //     $(".selected").css({
    //         width: $(".instagram").width(),
    //         left: (($(".instagram").position().left - 10) + "px")
    //     });
    // });

    $(".facebook").hover(fbPositionHr, function() {
        if (platformSelected == "yt") initPositionHr();
    });
}

platformHover();

$(window).resize(function() {
    initPositionHr();
});

$(".facebook").click(function() {
    $(".fb").css({display: "block"});
    $(".yt").css({display: "none"});

    platformSelected = "fb";
});

$(".youtube").click(function() {
    $(".fb").css({display: "none"});
    $(".yt").css({display: "block"});

    platformSelected = "yt";
});