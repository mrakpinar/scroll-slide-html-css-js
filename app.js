const navbar = document.querySelector("nav");

function animation() {
  var controller = new ScrollMagic.Controller();

  const t1 = gsap.timeline({ default: { ease: Expo.InOut } });
  t1.fromTo(navbar, 1, { y: "-10rem" }, { y: 0 });
  t1.fromTo(
    ".banner-text",
    1,
    { x: "-50rem", opacity: 0 },
    { x: 0, opacity: 1 },
    "-=1"
  );
  t1.fromTo(
    ".banner-img",
    1,
    { x: "25rem", opacity: 1 },
    { x: 0, opacity: 1 },
    "-=1"
  );
  t1.fromTo(".banner-img img", 1, { scale: 1.9 }, { scale: 1.5 }, "-=1");

  //About Animation

  const t2 = gsap.timeline({ default: { ease: Expo.InOut } });

  t2.fromTo(
    ".about-text",
    1,
    { x: "-50rem", opacity: 0 },
    { x: 0, opacity: 1 }
  );
  t2.fromTo(
    ".about-img",
    1,
    { x: "50rem", opacity: 1 },
    { x: 0, opacity: 1 },
    "-=1"
  );
  t2.fromTo(".about-img img", 1, { scale: 1.5 }, { scale: 1 }, "-=1");

  //Scroll Animation

  new ScrollMagic.Scene({
    triggerElement: "#about",
    triggerHook: 0.5,
    reverse: false,
  })
    .setTween(t2)
    .addTo(controller);

  //Card Animation

  const t3 = gsap.timeline({ default: { ease: Expo.InOut } });

  t3.fromTo(
    ".card",
    1,
    { y: "100rem", opacity: 0 },
    { y: 0, opacity: 1, stagger: 0.5 }
  );
  t3.set(".card", { clearProps: "all" });

  new ScrollMagic.Scene({
    triggerElement: "#vid",
    triggerHook: 1,
    reverse: false,
  })
    .setTween(t3)
    .addTo(controller);

  const t4 = gsap.timeline({ default: { ease: Expo.InOut } });

  t4.fromTo(".video", 0.6, { x: "50rem", opacity: 0 }, { x: 0, opacity: 1 });
}

animation();
