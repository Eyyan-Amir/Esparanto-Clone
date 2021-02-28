
gsap.set("#motionSVG", { scale: 0.5, autoAlpha: 1 });
gsap.set("#tractor", {transformOrigin: "50% 50%"});

let animation = gsap.to("#motionSVG", {
  scrollTrigger: {
    trigger: "#motionPath",
    start: "1% 20%",
    end: "bottom 20%",
    scrub: 1,
    // markers: true,
    onUpdate: self => {
      gsap.to("#tractor", {rotation: () => self.direction === 1 ? 0 : -180, overwrite: 'auto'});
    }
  },
  duration: 10,
  ease: "none",
  immediateRender: true,
  motionPath: {
    path: "#motionPath",
    align: "#motionPath",
    alignOrigin: [0.5, 0.5],
    autoRotate: 90,
  }
});
let tl = gsap.timeline(
    {
    scrollTrigger:{
        trigger:".nameHolder",
        start:"50% 55%",
        end:"+400",
        scrub:2,
        // markers:true
    }
}
);
tl.to(".nameHolder",{
    xPercent: 1,
    skewX:"-10",
    scale:.6,
    y: -220,
    ease: 'Power2.easeIn',
})
let tl2 = gsap.timeline(
    {
    scrollTrigger:{
        trigger:".sTour",
        start:"-30% 80%",
        end:"-=250",
        scrub:-22,
        markers:true
    }
}
);
tl.to(".sTour",{
    y:-2400,
    ease: 'Power2.easeIn',
})