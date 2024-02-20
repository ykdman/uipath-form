function addPersonConference() {
  let isDuplicate = false;
  const resultListEl = document.getElementById("result_person_list");
  const selectPersonName = document.getElementById("select_person").value;

  if (!selectPersonName) {
    return;
  }

  // 중복 검사
  for (const el of resultListEl.children) {
    if (el.id === selectPersonName) {
      isDuplicate = true;
      console.log("중복");
      break;
    }
  }

  if (!isDuplicate) {
    const personEl = document.createElement("li");
    personEl.id = selectPersonName;

    personEl.innerHTML = `
		${selectPersonName}
		<button class="delete_person">X</button>
		`;

    // 삭제 리스너 추가
    personEl.querySelector(".delete_person").onclick = () => {
      let removeEl;
      for (const person of resultListEl.children) {
        if (person.id === selectPersonName) {
          resultListEl.removeChild(person);
        }
      }
    };
    resultListEl.appendChild(personEl);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM Loaded");

  document
    .getElementById("add_person_btn")
    .addEventListener("click", addPersonConference);
});
