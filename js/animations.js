
// Anime JS Stuff
let tl = anime.timeline({
  easing: 'easeOutExpo',
  duration: 950
});
		tl.add({
  targets: '.grow_text',
  scale: [0,1],
  delay: 950,
  direction: 'normal',
  loop: false,
  easing: 'spring(1, 80, 10, 0)'
})	
		tl.add({
  targets: '.hero_text p, .hero_text button',
  translateY: ["-20px","0px"],
  opacity: [0, 1],
  direction: 'normal',
  loop: false,
  easing: 'spring(1, 80, 10, 0)'
}, "-=900")


// Hero Text Click Animation
let heroText = document.querySelector(".hero_text .highlight_text")
heroText.addEventListener("mouseover", ()=> {
  heroText.classList.add("textClick")
  setTimeout( ()=> {
    heroText.classList.remove("textClick")
  }, 300)
})