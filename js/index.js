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
    const image = $("#bg-image");
    const container = $("#bg-frame");

    let frame;
    console.log("i", image.height())
    console.log("f", image.height())
    if (container.height() < image.height()) {
        frame = container;
    } else {
        frame = image;
    }

    const style = {
        top: frame.height()
    }

    $(".about-us").css(style);
}

moveNav($(window));
resizeAboutUs();

$(window).on("resize", () => {
    moveNav($(this));
    resizeAboutUs();
});

function scrollToAboutUs() {
    console.log("here");
    document.getElementById("about-us").scrollIntoView({ behavior: 'smooth', block: 'start' });
}

$("#aboutUsLink").click(scrollToAboutUs);

$(document).ready(function() {
    
});