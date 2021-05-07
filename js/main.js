// animatio titlo H1
anime.timeline({loop: 1})
  .add({
    targets: '.ml15 .word',
    scale: [14,1],
    opacity: [0,0.8],
    easing: "easeOutCirc",
    duration: 3000,
    delay: (el, i) => 2000 * i
  }) 


//   cursor
