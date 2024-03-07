const continueEl = document.getElementById("continue_value");
const continueObserver = new MutationObserver((mutation) => {
  alert("test");
});

let option = {
  target: true,
  attributes: true,
  childList: true,
  characterData: true,
};

continueObserver.observe(continueEl, option);
