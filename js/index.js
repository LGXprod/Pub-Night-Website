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
    document.getElementById("about-us").scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function scrollToRatings() {
    document.getElementById("ratings").scrollIntoView({ behavior: 'smooth', block: 'start' });
}

$("#aboutUsLink").click(scrollToAboutUs);

$("#ratingsLink").click(scrollToRatings);

$(document).ready(function() {

    const urlParams = new URLSearchParams(window.location.search);

    switch(urlParams.get("section")) {
        case "about-us":
            scrollToAboutUs();
            break;
        case "ratings":
            scrollToRatings();
            break;
        default:
            break;
    }
});