function addConferenceRoom() {
  const conferenceRoomSelectEl = document.getElementById(
    "conference_room_select"
  );
  const selectRoomAside = document.getElementById("select_room");
  // const dummy = ["14-1", "14-2", "14-3"];
  const dummy = document
    .getElementById("dummy_value")
    .innerHTML.split(",")
    .map((m) => m.trim());
  dummy.forEach((dum) => {
    const radioEl = `
		<div class="conference_list">
		<input type="radio" name="room" value="${dum}" id="${dum.trim()}"/>
		<label for="${dum}">${dum}</label>
		</div>
		`;

    conferenceRoomSelectEl.innerHTML += radioEl;
  });

  document.getElementById("room_select_btn").classList.remove("hidden");

  // const confirmBtnEl = document.createElement("button");
  // confirmBtnEl.id = "room_select_btn";
  // confirmBtnEl.innerText = "확인";

  // selectRoomAside.appendChild(confirmBtnEl);
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
