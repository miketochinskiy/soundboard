
const body = document.querySelector('body');
const birdsButton = document.querySelector('#birds');
const rainButton = document.querySelector('#rain');
const fireButton = document.querySelector('#fire');

birdsButton.addEventListener('click', () => {
  body.classList.remove('rain', 'fire');
  body.classList.add('birds');
});

rainButton.addEventListener('click', () => {
  body.classList.remove('birds', 'fire');
  body.classList.add('rain');
});

fireButton.addEventListener('click', () => {
  body.classList.remove('birds', 'rain');
  body.classList.add('fire');
});



const playSound = e => {
      let keyCode;
      if (e.type === 'keydown') {
        
        keyCode = e.keyCode;
        body.classList.add('birds');

      } else {
        keyCode = e.target.getAttribute('data-key') || e.target.parentNode.getAttribute('data-key');
      }
      const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
      const key = document.querySelector(`div[data-key="${keyCode}"]`);

      if (!audio) return;

      key.classList.add('playing');
      audio.currentTime = 0;
      audio.play();
    }

    const removeTransition = e => {
      if (e.propertyName !== 'transform') return;
      e.target.classList.remove('playing');
    }

    const keys = Array.from(document.querySelectorAll('.key'));
    keys.forEach(key => {
      key.addEventListener('transitionend', removeTransition)
    });

    window.addEventListener('keydown', playSound);
    window.addEventListener('touchstart', playSound);
    window.addEventListener('click', playSound);






