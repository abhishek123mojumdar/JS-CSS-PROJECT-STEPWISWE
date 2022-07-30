// Import stylesheets
import './style.css';

let counter = 1;
let nextBtn = document.getElementById('next');
let prevBtn = document.getElementById('prev');
let progressBar = document.querySelector('.progressbar');
let circles = document.querySelectorAll('.circle');
let stars = document.querySelectorAll('a');
let showRating = document.getElementById('showRating');
let popUpModalBtn = document.getElementById('popUpModalBtn');
let modalBg = document.getElementsByClassName('modal-pop-up')[0];
let modal = document.getElementsByClassName('modal')[0];
let ratingCounter = 0;

nextBtn.addEventListener('click', next);
prevBtn.addEventListener('click', prev);
popUpModalBtn.addEventListener('click', callModal);

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

stars.forEach((star, index) => {
  star.addEventListener('click', function (e) {
    updateClass(index);
  });
});

function updateClass(count) {
  stars.forEach((star1, index) => {
    if (index <= count && !star1.classList.contains('active')) {
      star1.classList.add('active');
      ratingCounter = ratingCounter + 1;
    } else if (index >= count && star1.classList.contains('active')) {
      star1.classList.remove('active');
      ratingCounter = ratingCounter - 1;
    }
    showRating.innerHTML = 'The rating is : ' + ratingCounter;
  });
}

function callModal() {
  //console.log(modal);
  modalBg.classList.add('active');
  modal.classList.add('active');
}

document.getElementById('closeModal').addEventListener('click', () => {
  modal.classList.remove('active');
  modalBg.classList.remove('active');
});
