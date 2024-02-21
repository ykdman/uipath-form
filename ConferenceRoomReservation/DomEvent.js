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

function sendReservationInfo() {
  const resultListEl = document.getElementById("result_person_list");
  const startTime = document.getElementById("userinput_starttime").value;
  const numStartTime = +startTime.replace(":", "");
  const endTime = document.getElementById("userinput_endtime").value;
  const numEndTime = +endTime.replace(":", "");
  const title = document.getElementById("userinput_title").value;
  const agenda = document.getElementById("userinput_agenda").value;
  const reserveDate = document.getElementById("userinput_date").value;

  // 입력 정보 미부합 시, 미수행
  if (
    resultListEl.children.length === 0 ||
    (numStartTime > numEndTime && numStartTime === numEndTime) ||
    !title ||
    !agenda
  ) {
    return;
  }

  // 참석 인원 추가
  const persons = [];
  for (const person of resultListEl.children) {
    persons.push(person.id);
  }

  const message = {
    persons: [...persons],
    reserveDate: reserveDate,
    startTime: startTime,
    endTime: endTime,
    title: title,
    agenda: agenda,
  };

  uiPathApi.sendMessage("reservation", JSON.stringify(message));
}

function sendConferenceRoom() {
  const room = document.querySelector(
    "#conference_room_select .conference_list input:checked"
  );
  if (!room) {
    return;
  } else {
    console.log(room.id);
  }
  // for (let i = 0; i < rooms.length; i++) {
  //   selectRoom = rooms[i].querySelector("input:checked");
  //   if (!selectRoom) {
  //     console.log("FUck");
  //   } else {
  //     console.log(selectRoom.value);
  //     return;
  //   }
  // }
}

/** 전체 Document Load */
document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM Loaded");
  document
    .getElementById("reservation_confirm")
    .addEventListener("click", sendReservationInfo);

  document
    .getElementById("room_select_btn")
    .addEventListener("click", sendConferenceRoom);

  document
    .getElementById("select_person")
    .addEventListener("change", addPersonConference);

  // document
  //   .getElementById("add_person_btn")
  //   .addEventListener("click", addPersonConference);
});
