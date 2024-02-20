function addConferenceRoom() {
  const conferenceRoomSelectEl = document.getElementById(
    "conference_room_select"
  );
  const liEl = document.createElement("li");
  liEl.innerHTML = `Test`;
  conferenceRoomSelectEl.append(liEl);
}

let conferenceRoomtitleEl = document.getElementById("conference_select_title");
let titleObserver = new MutationObserver((mutation) => {
  if (mutation[0].target.innerHTML === "회의실을 선택") {
    addConferenceRoom();
  }
});

let option = {
  attributes: true,
  childList: true,
  characterData: true,
};

titleObserver.observe(conferenceRoomtitleEl, option);
