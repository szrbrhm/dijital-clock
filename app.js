let counter = 0;
const id = setInterval(function () {
  const timeLabel = document.querySelector("p");
  const time = new Date();
  timeLabel.innerHTML = time.toLocaleTimeString() + "  PM"
  counter++;
}, 1000);