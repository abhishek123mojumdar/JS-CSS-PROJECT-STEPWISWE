// Import stylesheets
import './style.css';

let counter = 1;
let nextBtn = document.getElementById('next');
let prevBtn = document.getElementById('prev');
let progressBar = document.querySelector('.progressbar');
let circles = document.querySelectorAll('.circle');

nextBtn.addEventListener('click', next);
prevBtn.addEventListener('click', prev);

function next() {
  counter++;
  update();
}
function prev() {
  counter--;
  update();
}
function update() {
  circles.forEach((circle, index) => {
    if (counter > index) {
      circle.classList.add('active');
    } else if (counter <= index) {
      circle.classList.remove('active');
    }
  });

  let activeElements = document.querySelectorAll('.active');
  progressBar.style.width =
    ((activeElements.length - 1) / (circles.length - 1)) * 100 + '%';
  if (counter === 1) {
    prevBtn.setAttribute('disabled', true);
    prevBtn.classList.add('disabled');
  } else if (counter > 1) {
    prevBtn.classList.remove('disabled');
    prevBtn.hasAttribute('disabled')
      ? prevBtn.removeAttribute('disabled', '')
      : '';
  }

  updateNextPrev();
}

function updateNextPrev() {
  if (counter === circles.length) {
    nextBtn.setAttribute('disabled', true);
    nextBtn.classList.add('disabled');
  } else {
    nextBtn.classList.remove('disabled');
    nextBtn.hasAttribute('disabled')
      ? nextBtn.removeAttribute('disabled', '')
      : '';
  }
}
