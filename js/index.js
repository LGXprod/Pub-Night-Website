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

moveNav($(window));

$(window).on("resize", () => {
    moveNav($(this));
});