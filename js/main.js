// animatio titlo H1
anime.timeline({loop: true})
  .add({
    targets: '.ml15 .word',
    scale: [14,1],
    opacity: [0,0.8],
    easing: "easeOutCirc",
    duration: 4000,
    delay: (el, i) => 2000 * i
  }).add({
    targets: '.ml15',
    opacity: 0,
    duration: 1,
    easing: "easeOutExpo",
    delay: 1000000
  });