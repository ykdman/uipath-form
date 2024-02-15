const resultPersonListEl = document.getElementById("result-person-list");
const resultPersonWrapperEl = document.querySelector(".result-person-wrapper");

/** 참석자 선택 toggle */
function toggleSelectPerson(event) {
  if (event.target.classList.contains("clicked")) {
    event.target.classList.remove("clicked");
  } else {
    event.target.classList.add("clicked");
  }
}

/** 선택 참석자 중복 확인 */
function checkDuplicatePerson(text) {
  for (const child of resultPersonListEl.childNodes) {
    child.innerHTML === text;
    return true;
  }
  return false;
}

/** 선택 참석자 렌더링 */
function renderSelectPerson(event) {
  console.log(event.target.innerHTML);
  if (checkDuplicatePerson(event.target.innerHTML)) {
    return; //중복일 경우 Pass
  }
  console.log("중복 없음");
  const fullInfo = event.target.innerHTML.replace(")", "");
  const name = fullInfo.split("(")[0];
  const team = fullInfo.split("(")[1];
  const resultPersonEl = document.createElement("li");
  resultPersonEl.innerHTML = `${name} (${team})`;
  resultPersonListEl.appendChild(resultPersonEl);
  if (resultPersonWrapperEl.classList.contains("hidden")) {
    resultPersonWrapperEl.classList.remove("hidden");
  }
}

/** form Event */
document.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("before-select-person") &&
    e.target.tagName === "LI"
  ) {
    console.log("참석자 선택");
    toggleSelectPerson(e);
    renderSelectPerson(e);
  }
});
