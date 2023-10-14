
document.addEventListener("mousemove", function (dets) {
    document.querySelectorAll(".img").forEach(element => {
        var position = element.getAttribute("value");
        var X = (window.innerWidth - dets.clientX * position) / 80;
        var Y = (window.innerHeight - dets.clientY * position) / 90;
        element.style.transform = `translate(${X}px) translateY(${Y}px)`;
    });
});
