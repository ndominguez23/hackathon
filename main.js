const bodyEl = document.querySelector('body');


const hiddenDiv = document.createElement('div');
hiddenDiv.id = "waldo";
hiddenDiv.style.position = 'absolute';
// hiddenDiv.style.top = '100px';
// // hiddenDiv.style.left = '400px';
// hiddenDiv.style.width = '15px';
// hiddenDiv.style.height = '15px';
hiddenDiv.className = 'small';
hiddenDiv.style.background = 'transparent';
hiddenDiv.style.zIndex = 5000;

// get viewport height and width using document.documentElement.clientWidth
// figure out how many multiples by doing width/15 and taking floor
// get random numbers for offset using math.random * multiples * 15
const height = document.documentElement.clientHeight;
const width = document.documentElement.clientWidth;
const multiplesH = Math.floor(height / 15);
const multiplesW = Math.floor(width / 15);
const randLeft = Math.floor(Math.random()*multiplesW)*15;
const randTop = Math.floor(Math.random()*multiplesH)*15;
hiddenDiv.style.top = `${randTop}px`;
hiddenDiv.style.left = `${randLeft}px`;

bodyEl.prepend(hiddenDiv);

function changePos(multiples) {
  return Math.floor(Math.random()*multiples)*15;
}

const str = `<div class="penguin">
<div class="penguin-bottom">
  <div class="right-hand"></div>
  <div class="left-hand"></div>
  <div class="right-feet"></div>
  <div class="left-feet"></div>
</div>
<div class="penguin-top">
  <div class="right-cheek"></div>
  <div class="left-cheek"></div>
  <div class="belly"></div>
  <div class="right-eye">
    <div class="sparkle"></div>
  </div>
  <div class="left-eye">
    <div class="sparkle"></div>
  </div>
  <div class="blush-right"></div>
  <div class="blush-left"></div>
  <div class="beak-top"></div>
  <div class="beak-bottom"></div>
</div>
</div>`;

hiddenDiv.insertAdjacentHTML('afterbegin', str);

$('#waldo').click(() => {
  if ($('#waldo').hasClass('big')) {
    const newTop = changePos(multiplesH);
    const newLeft = changePos(multiplesW);
    console.log(`top is ${newTop}`);
    $('#waldo').css({top: `${newTop}px`, left: `${newLeft}px` });
  }
  $('#waldo').toggleClass('big');
  $('.penguin').toggleClass('big');
});
