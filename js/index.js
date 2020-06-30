$(".about-us").css

function moveNav(win) {
    const nav = $(".centre");

    const style = {
        position: "absolute",
        left: ((win.width()/2) - (nav.width()/2)),
        whiteSpace: "noWrap",
        overflow: "hidden"
    }

    nav.css(style);
}

function resizeAboutUs() {
    const style = {
        top: $("#bg-image").height()
    }

    $(".about-us").css(style);
}

moveNav($(window));
resizeAboutUs();

$(window).on("resize", () => {
    moveNav($(this));
    resizeAboutUs();
});