  const colorBtn = document.querySelector('.colorBtn');
  const bodyBcg = document.querySelector('body');
  const colors = ['lightBlue','beige','pink','lightGreen','lightGrey'];
  const maxColors = colors.length;
  var displayColorIndx = -1;

function changesClr (){
    displayColorIndx += 1;

  if (displayColorIndx >= maxColors) {
    displayColorIndx = 0;
  }

  bodyBcg.style.backgroundColor = colors[displayColorIndx];

};
