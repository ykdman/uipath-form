/** form Render */

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
