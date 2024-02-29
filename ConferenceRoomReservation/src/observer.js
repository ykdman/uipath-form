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
  if (dummy.length === 1 && !dummy[0]) {
    console.log("선택 가능한 회의실이 없습니다.");
    conferenceRoomtitleEl.innerHTML = "선택가능한 회의실이 없습니다.";
    return;
  }
  dummy.forEach((dum) => {
    const radioEl = `
		<div class="conference_list">
		<input type="radio" name="room" value="${dum}" id="${dum.trim()}"/>
		<label for="${dum}">${dum}</label>
		</div>
		`;

    conferenceRoomSelectEl.innerHTML += radioEl;
  });

  const roomConfirmBtmWrapEl = document.getElementById("room_select_btn_wrap");
  roomConfirmBtmWrapEl.classList.remove("hidden");
  window.scrollTo({ top: roomConfirmBtmWrapEl.offsetTop, behavior: "smooth" });

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
