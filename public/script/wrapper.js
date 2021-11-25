const btn = document.getElementById("drop");
const warp = document.querySelector(".dropWarp");


document.addEventListener('click', function(event) {
  var isClickInsideElement = btn.contains(event.target);
  if (isClickInsideElement) {
      //Do something click is outside specified element
      warp.classList.toggle('hide')
  }else{
    warp.classList.add('hide')
  }
});




