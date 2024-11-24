var hour = document.querySelector(".hour");
var min = document.querySelector(".min");
var second = document.querySelector(".second");
let i = 0,
  j = 0,
  k = 0;

function interval(funcSet, timeInterval) {
  setInterval(funcSet, timeInterval);
}

function secondChange() {
  i += 6;
  second.style.rotate = i + "deg";
  console.log(second.style.rotate);
  if (i % 60 == 0) {
    j += 1;
    min.style.rotate = j + "deg";
    if (j % 60 == 0) {
      k += 1;
      hour.style.rotate = k + "deg";
    }
  }
}

// interval(secondChange,1000);
