const resultPersonListEl = document.getElementById("result-person-list");
const resultPersonWrapperEl = document.querySelector(".result-person-wrapper");
let resultPersons = {};

/** 참석자 선택 toggle */
function toggleSelectPerson(event) {
  if (event.target.classList.contains("clicked")) {
    event.target.classList.remove("clicked");
  } else {
    event.target.classList.add("clicked");
  }
}

/** 선택 참석자 중복 확인 */
function checkDuplicatePerson(event) {
  const fullInfo = event.target.innerHTML.replace(")", "");
  const name = fullInfo.split("(")[0].trim();
  const team = fullInfo.split("(")[1].trim();

  if (
    Object.keys(resultPersons).filter((personName) => personName === name)
      .length
  ) {
    console.log("중복!");
    return true;
  } else {
    console.log("중복 아님!");
    return false;
  }
}

/** 참석자 렌더링 */
function renderResultPersons(personObj, personName) {
  const name = personObj[personName].name;
  const team = personObj[personName].team;
  const resultPersonEl = document.createElement("li");
  resultPersonEl.innerHTML = `${name} (${team})`;
  resultPersonListEl.appendChild(resultPersonEl);

  if (resultPersonWrapperEl.classList.contains("hidden")) {
    resultPersonWrapperEl.classList.remove("hidden");
  }
}

/** 선택 참석자 추가 */
function addSelectPerson(event) {
  if (checkDuplicatePerson(event)) {
    return;
  }
  const fullInfo = event.target.innerHTML.replace(")", "");
  const name = fullInfo.split("(")[0].trim();
  const team = fullInfo.split("(")[1].trim();
  resultPersonObj = {
    [name]: {
      name,
      team,
    },
  };

  // 참석자 변수 추가
  resultPersons = {
    ...resultPersons,
    ...resultPersonObj,
  };

  renderResultPersons(resultPersonObj, name);
}

/** 선택 참석자 제거 */
function removeSelectPerson(event) {
  const fullInfo = event.target.innerHTML.replace(")", "");
  const name = fullInfo.split("(")[0].trim();
  const team = fullInfo.split("(")[1].trim();
  delete resultPersons[name];
}

/** 선택 참석자 렌더링 핸들러 */
function renderPersonHandler(event) {
  console.log(`참석자 선택 : ${event.target.innerHTML}`);
  addSelectPerson(event);
}

/** form Event */
document.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("before-select-person") &&
    e.target.tagName === "LI"
  ) {
    toggleSelectPerson(e);
    renderPersonHandler(e);
  }
});
