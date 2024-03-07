const continueEl = document.getElementById("continue_value");
const continueObserver = new MutationObserver((mutation) => {
  console.log(mutation[0].target.innerText);
});

let continueElObserveOption = {
  target: true,
  attributes: true,
  childList: true,
  characterData: true,
};

continueObserver.observe(continueEl, continueElObserveOption);
