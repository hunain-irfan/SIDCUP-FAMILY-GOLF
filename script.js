const cursor = document.querySelector("#cursor");
const cursorBlur = document.querySelector("#cursor-blur");
let h4All = document.querySelectorAll("#nav h4")

h4All.forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
        cursor.style.scale = 3;
        cursor.style.backgroundColor = "transparent";
        cursor.style.border = "1px solid #fff";
        cursor.style.transition = "all 0.2s ease";

    })
    elem.addEventListener("mouseleave", function () {
        cursor.style.scale = 1;
        cursor.style.border = "0px solid #95c11e ";
        cursor.style.backgroundColor = "#95c11e";
    })

})

document.addEventListener("mousemove", function (dets) {
    cursor.style.left = dets.x - 10 + "px";
    cursor.style.top = dets.y - 22 + "px";
    cursorBlur.style.left = dets.x - 170 + "px";
    cursorBlur.style.top = dets.y - 170 + "px";
})
gsap.to("#nav", {
    backgroundColor: "#000",
    duration: 0.5,
    height: "85px",
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        // markers : true,
        start: "top -10%",
        end: "top -10%",
        scrub: 1

    }
})

gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger: {
        tri7gger: "#main",
        scroller: "body",
        // markers : true,
        start: "top -20%",
        end: "top -80%",
        scrub: 2
    }
})

gsap.from(".about-us img,#about-us-in", {
    y: 90,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: ".about-us",
        scroller: "body",
        //   markers:true,
        start: "top 70%",
        end: "top 65%",
        scrub: 1,
    },
});

gsap.from(".cards", {
    scale: 0.95,
    opacity: 0,
    duration: 0.7,
    scrollTrigger: {
        trigger: ".cards",
        scroller: "body",
        //   markers:true,
        start: "top 70%",
        end: "top 65%",
        scrub: 1,
    },
});

gsap.from("#colon1",{
    x : -50,
    y : -50,
    scrollTrigger : {
        trigger : "#colon1",
        scroller : "body",
        // markers : true,
        start : "top 55%",
        end : "top 47%",
        scrub : 4
    }
})
gsap.from("#colon2",{
    x : 50,
    y : 50,
    scrollTrigger : {
        trigger : "#colon1",
        scroller : "body",
        // markers : true,
        start : "top 55%",
        end : "top 47%",
        scrub : 4
    }
})

gsap.from("#page4 h1", {
    y: 60,
    scrollTrigger: {
      trigger: "#page4 h1",
      scroller: "body",
      // markers:true,
      start: "top 75%",
      end: "top 70%",
      scrub: 4,
    },
  });

