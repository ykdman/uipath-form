const resultListElement = document.getElementById("result-person-list");

function checkDuplicatePerson(text) {
  let duplicate = false;
  for (const child of resultListElement.childNodes) {
    child.innerText === text;
    duplicate = true;
  }
  return duplicate;
}
document.addEventListener("click", (e) => {
  if (
    e.target.tagName === "LI" &&
    e.target.className === "before-select-person"
  ) {
    if (!checkDuplicatePerson(e.target.innerText)) {
      let newListElement = document.createElement("li");
      newListElement.className = "after-select-person";
      newListElement.innerText = e.target.innerText;
      newListElement.onclick = () => {
        resultListElement.removeChild(newListElement);
      };
      resultListElement.appendChild(newListElement);
    }
  }
});
