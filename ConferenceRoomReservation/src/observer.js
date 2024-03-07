function addConferenceRoom() {
  const conferenceRoomSelectEl = document.getElementById(
    "conference_room_select"
  );
  conferenceRoomSelectEl.textContent = "";

  const selectRoomAside = document.getElementById("select_room");

  let dummy = document
    .getElementById("dummy_value")
    .innerHTML.split(",")
    .map((m) => m.trim());

  if (dummy.length === 1 && !dummy[0]) {
    console.log("선택 가능한 회의실이 없습니다.");
    conferenceRoomtitleEl.innerHTML = "선택가능한 회의실이 없습니다.";
    return;
  }
  // 출력 회의실 3개로 제한
  if (dummy.length > 3) {
    dummy = [...dummy].slice(0, 3);
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
  window.scrollTo({
    top: roomConfirmBtmWrapEl.offsetTop,
    behavior: "smooth",
  });
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
