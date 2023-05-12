var tl_homeHero = gsap.timeline({ defaults: { opacity: 0, duration: 0.5 } });

function init() {
	tl_homeHero
		.to(".home-hero", { autoAlpha: 1 })
		.from(".home .site-header", { y: -48 })
		.from(".home-hero__text h1", {})
		.from(".home-hero__img", { autoAlpha: 0 })
		.from(".home-hero__banner", { y: 80 });
}

window.addEventListener("load", function (event) {
	init(); //do stuff
});
