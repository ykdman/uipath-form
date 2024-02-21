function addConferenceRoom() {
  const conferenceRoomSelectEl = document.getElementById(
    "conference_room_select"
  );
  const selectRoomAside = document.getElementById("select_room");
  const dummy = ["14-1", "14-2", "14-3"];
  dummy.forEach((dum) => {
    const radioEl = `
		<input type="radio" name="room" value="${dum} id="${dum}"/>
		<label for="${dum}">${dum}</label>
		`;

    conferenceRoomSelectEl.innerHTML += radioEl;
  });

  const confirmBtnEl = document.createElement("button");
  confirmBtnEl.id = "room_select_btn";
  confirmBtnEl.innerText = "확인";

  selectRoomAside.appendChild(confirmBtnEl);
}

let conferenceRoomtitleEl = document.getElementById("conference_select_title");
let titleObserver = new MutationObserver((mutation) => {
  if (mutation[0].target.innerHTML.includes("회의실을 선택")) {
    addConferenceRoom();
  }
});

let option = {
  attributes: true,
  childList: true,
  characterData: true,
};

titleObserver.observe(conferenceRoomtitleEl, option);
