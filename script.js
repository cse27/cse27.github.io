

//mouse moving effect
var onMain = document.querySelector(".navMain");

var mouseMove = document.querySelector(".movingCursor");
onMain.addEventListener("mousemove", function (det) {
    mouseMove.style.left = det.x + "px";
    mouseMove.style.top = det.y + "px";

});

// gallery effect
const gallery = document.querySelector(".gallery");
gallery.addEventListener("mousemove", function (dets) {
    document.querySelectorAll(".img").forEach(element => {
        var position = element.getAttribute("value");
        var X = (window.innerWidth - dets.clientX * position) / 80;
        var Y = (window.innerHeight - dets.clientY * position) / 90;
        element.style.transform = `translate(${X}px) translateY(${Y}px)`;
    });
});

//gsap
let tl = gsap.timeline();
tl
    .from(".leftSide", {
        opacity: 0,
        duration: 1,
        left: -434

    })
    .from(".heroSec h3", {
        onStart: function () {
            $('.heroSec h3').textillate({
                in: { effect: 'fadeInUp' }

            });
        }
    })

