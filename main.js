const _$ = {};
// Duration in seconds -> Milliseconds
const duration = {
  horizontal: 180,
  break: 15,
  vertical: 120,
};

function _onClick() {
  let innerCounter = 0;
  let counter = 0;
  let interval;

  function _action() {
    let text = "Horizontal";
    let number = duration.horizontal;
    let icon = "horizontal";

    if (innerCounter > duration.horizontal) {
      text = "Break";
      number = duration.break;
      icon = "break";
    }

    if (innerCounter > duration.horizontal + duration.break) {
      text = "Vertical";
      number = duration.vertical;
      icon = "vertical";
    }

    _$.icon.style.display = "block";
    _$.icon.src = `./assets/${icon}.svg`;

    if (
      innerCounter >
      duration.horizontal + duration.break + duration.vertical
    ) {
      // Play asset "success.mp3"
      const audio = new Audio("./assets/success.mp3");
      audio.play();

      text = "Done!";
      clearInterval(interval);
      _$.counter.style.display = "none";
      _$.icon.style.display = "none";
      _$.fireworks.style.display = "block";
    }

    _$.text.innerHTML = text;
    _$.counter.innerHTML = number - counter;

    if (
      innerCounter === duration.horizontal ||
      innerCounter === duration.horizontal + duration.break
    ) {
      counter = 0;
    } else {
      counter++;
    }

    innerCounter++;
  }

  _$.button.style.display = "none";
  _action();
  interval = setInterval(_action, 1000);
}

function _addEventListeners() {
  _$.button.addEventListener("click", _onClick);
}

function _setElements() {
  _$.button = document.getElementById("start");
  _$.text = document.getElementById("text");
  _$.counter = document.getElementById("counter");
  _$.icon = document.getElementById("icon");
  _$.fireworks = document.querySelector(".pyro");
}

function _init() {
  _setElements();
  _addEventListeners();
}

_init();
