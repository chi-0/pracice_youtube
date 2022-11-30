const upBtn = document.querySelector('.upBtn');
const downBtn = document.querySelector('.downBtn');
const thumbUp = document.querySelector('.fa-thumbs-up');
const thumbDown = document.querySelector('.fa-thumbs-down')

/** 좋아요 싫어요 버튼 */
function up() {
  if(thumbDown.classList.toggle('active')) {
    thumbDown.classList.remove('active');
    thumbUp.classList.toggle('active');
  }

  else {
    thumbUp.classList.toggle('active');
  }
};

function down() {
  if(thumbUp.classList.toggle('active')) {
    thumbUp.classList.remove('active');
    thumbDown.classList.toggle('active');
  }

  else {
    thumbDown.classList.toggle('active');
  }
};

upBtn.addEventListener('click', up);

downBtn.addEventListener('click', down);