function renderAtandee() {
  const attandee = document.getElementById("person_list");
  const selectPersonWrapEl = document.getElementById("select_person");
  const renderPerson = JSON.parse(attandee.innerHTML);

  for (const [name, number] of Object.entries(renderPerson)) {
    const opEl = document.createElement("option");
    opEl.value = number;
    opEl.className = name;
    opEl.innerText = name;
    selectPersonWrapEl.appendChild(opEl);
  }
}

function addPersonConference() {
  const attandee = document.getElementById("person_list");
  const persons = JSON.parse(attandee.innerHTML);

  let isDuplicate = false;
  const resultListEl = document.getElementById("result_person_list");
  const selectPersonId = document.getElementById("select_person").value;
  let personName;
  for (const [name, number] of Object.entries(persons)) {
    if (number === selectPersonId) {
      personName = name;
    }
  }

  if (!selectPersonId) {
    return;
  }

  // 중복 검사
  for (const el of resultListEl.children) {
    if (el.id === selectPersonId) {
      isDuplicate = true;
      console.log("중복");
      break;
    }
  }

  if (!isDuplicate) {
    const personEl = document.createElement("li");
    personEl.id = selectPersonId;

    personEl.innerHTML = `
    <span style="color:#B4B4B8; text-align:center;">●</span>
		${personName}
		<button class="delete_person">-</button>
		`;

    // 삭제 리스너 추가
    personEl.querySelector(".delete_person").onclick = () => {
      let removeEl;
      for (const person of resultListEl.children) {
        if (person.id === selectPersonId) {
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

  const roomSelectWrapEl = document.getElementById("conference_room_select");
  for (const child of roomSelectWrapEl.children) {
    roomSelectWrapEl.remove(child);
  }

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
  uiPathApi.setValue(
    "conference_select_title",
    "회의실 정보를 탐색 중 입니다."
  );
}

function sendConferenceRoom() {
  const room = document.querySelector(
    "#conference_room_select .conference_list input:checked"
  );
  if (!room) {
    return;
  } else {
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
      persons.push(String(person.id));
    }
    const message = {
      persons: [...persons],
      reserveDate: reserveDate,
      startTime: startTime,
      endTime: endTime,
      title: title,
      agenda: agenda,
      EquipmentName: room.id,
    };

    uiPathApi.sendMessage("Room Select", JSON.stringify(message));
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

/** */
function renderInputDate(e) {
  console.log(e.target.value);
  // user 지정 날짜
  const userDate = e.target.value;
  // 수행 기준 날짜 할당
  const todayDate = new Date();
  const todayStr = `${todayDate.getFullYear()}-${
    todayDate.getMonth() + 1 < 10
      ? "0" + (todayDate.getMonth() + 1)
      : todayDate.getMonth()
  }-${
    todayDate.getDate() < 10 ? "0" + todayDate.getDate() : todayDate.getDate()
  }`;

  console.log(todayStr + "오늘 날짜");
  if (todayStr !== userDate) {
    timeOptionRender(timeObj);
  } else {
    todayTimeOptionHandler();
  }
}

/** 전체 Document Load */
document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM Loaded");
  setTimeout(() => renderAtandee(), 500);
  todayTimeOptionHandler();
  document
    .getElementById("reservation_confirm")
    .addEventListener("click", sendReservationInfo);

  document
    .getElementById("room_select_btn")
    .addEventListener("click", sendConferenceRoom);

  document
    .getElementById("select_person")
    .addEventListener("change", addPersonConference);

  document
    .getElementById("reservation_cancel")
    .addEventListener("click", () => {
      uiPathApi.sendMessage("Form Close");
    });

  document
    .getElementById("userinput_date")
    .addEventListener("change", function (e) {
      renderInputDate(e);
    });
});

// document
//   .getElementById("add_person_btn")
//   .addEventListener("click", addPersonConference);
