window.addEventListener('load', () => {
  const boxWidth = 100;
  const boxHeight = 100;

  const maxX = window.innerWidth - boxWidth;
  const maxY = window.innerHeight - boxHeight;

  gsap.to("#box1", {
    x: maxX - 10,
    duration: 3,
    rotate: 270,
    borderRadius: "30%",
    ease: "power2.inOut",
    repeat: -1,
    yoyo: true
  });

  gsap.to("#box2", {
    y: maxY - 10,
    duration: 3,
    rotate: 270,
    borderRadius: "30%",
    ease: "power2.inOut",
    repeat: -1,
    yoyo: true
  });
});

// Cards click handlers remain same (optional)
document.getElementById('calculator').addEventListener('click', () => {
  alert('Go to Calculator page');
});

document.getElementById('ticTacToe').addEventListener('click', () => {
  alert('Go to Tic Tac Toe page');
});

document.getElementById('weather').addEventListener('click', () => {
  alert('Go to Weather page');
});
