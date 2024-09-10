let counterValue = 0;

document.getElementById('increaseBtn').addEventListener('click', function() {
  counterValue++;
  document.getElementById('counter').innerText = counterValue;
});

document.getElementById('decreaseBtn').addEventListener('click', function() {
  if (counterValue > 0) {
    counterValue--;
    document.getElementById('counter').innerText = counterValue;
  }
});
