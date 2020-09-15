const textReveal = gsap.timeline();

textReveal.from('.line span', 1.6, {
  y: 200,
  ease: 'power4.out',
  delay: 1,
  skewY: 15,
  stagger: {
    amount: 0.6
  }
});