/** uipathApi */
var uiPathApi = {
  getValue: function (elementId) {
    const element = document.getElementById(elementId);
    if (element) {
      switch (element.tagName) {
        case "INPUT":
        case "SELECT":
          return element.value;
        default:
          return element.innerHTML;
      }
    } else {
      return "ELEMENT NOT FOUND : " + elementId;
    }
  },

  setValue: function (elementId, value) {
    const element = document.getElementById(elementId);
    if (element) {
      switch (element.tagName) {
        case "INPUT":
        case "SELECT":
          element.value = value;
          return;
        default:
          element.innerHTML = value;
          return;
      }
    }
  },

  // Call this to trigger a "Form Message" event
  // This function is set by the forms engine after the page loads,
  // but declaring it here as empty helps with code autocompletion
  sendMessage: function (id, value) {},
};

/** form Render */
const resultPersonListEl = document.getElementById("result-person-list");
const selectPersonLiseEl = document.getElementById("select-person-list");
const persons = [
  {
    name: "김OO",
    team: "(RPA 추진팀)",
  },
  {
    name: "윤OO",
    team: "(RPA 추진팀)",
  },
  {
    name: "홍OO",
    team: "(RPA 추진팀)",
  },
  {
    name: "차OO",
    team: "(RPA 추진팀)",
  },
  {
    name: "최OO",
    team: "(RPA 추진팀)",
  },
];

persons.forEach((person) => {
  let personEl = document.createElement("li");
  personEl.classList.add("before-select-person", "before");
  personEl.innerText = `${person.name} ${person.team}`;
  selectPersonLiseEl.appendChild(personEl);
});

/** form Event */
document.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON" && e.target.className === "confirm") {
    console.log("Test");
    uiPathApi.sendMessage("ok clicked");
  } else if (
    e.target.classList.contains("before") &&
    e.target.classList.contains("before-select-person") &&
    e.target.tagName === "LI"
  ) {
    e.target.classList.remove("before");
    e.target.classList.add("clicked");
  }
});
