/** 날짜 Current 업데이트 */
function updateCurrentDate() {
  // Date 설정
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month =
    String(currentDate.getMonth() + 1).length === 1
      ? "0" + String(currentDate.getMonth() + 1)
      : currentDate.getMonth() + 1;
  const day =
    String(currentDate.getDate()).length === 1
      ? "0" + String(currentDate.getDate())
      : currentDate.getDate();

  document.getElementById("userinput_date").min = `${year}-${month}-${day}`;
}
updateCurrentDate();

// -------------------------------------------------

const timeObj = [
  {
    hour: "08",
    minute: "00",
  },
  {
    hour: "08",
    minute: "30",
  },
  {
    hour: "09",
    minute: "00",
  },
  {
    hour: "09",
    minute: "30",
  },
  {
    hour: "10",
    minute: "00",
  },
  {
    hour: "10",
    minute: "30",
  },
  {
    hour: "11",
    minute: "00",
  },
  {
    hour: "11",
    minute: "30",
  },
  {
    hour: "12",
    minute: "00",
  },
  {
    hour: "12",
    minute: "30",
  },
  {
    hour: "13",
    minute: "00",
  },
  {
    hour: "13",
    minute: "30",
  },
  {
    hour: "14",
    minute: "00",
  },
  {
    hour: "14",
    minute: "30",
  },
  {
    hour: "15",
    minute: "00",
  },
  {
    hour: "15",
    minute: "30",
  },
  {
    hour: "16",
    minute: "00",
  },
  {
    hour: "16",
    minute: "30",
  },
  {
    hour: "17",
    minute: "00",
  },
  {
    hour: "17",
    minute: "30",
  },
  {
    hour: "18",
    minute: "00",
  },
  {
    hour: "18",
    minute: "30",
  },
  {
    hour: "19",
    minute: "00",
  },
  {
    hour: "19",
    minute: "30",
  },
  {
    hour: "20",
    minute: "00",
  },
];

function renderTime() {
  const userInputStartTimeEl = document.getElementById("userinput_starttime");
  const userInputEndTimeEl = document.getElementById("userinput_endtime");
  const currentDate = new Date();
  const currentHour = String(currentDate.getHours());
  const currentMinutes =
    String(currentDate.getMinutes()).length === 1
      ? "0" + String(currentDate.getMinutes())
      : String(currentDate.getMinutes());

  const currentTime = currentHour + currentMinutes; // string

  const timeRange = timeObj.filter((time) => {
    const conTime = +(time.hour + time.minute);
    return conTime >= currentTime;
  });
  console.table(timeRange);

  // render
  // start Time Select Append
  timeRange.forEach((time) => {
    const optionEl = document.createElement("option");
    optionEl.value = `${time.hour}:${time.minute}`;
    optionEl.text = optionEl.value;
    userInputStartTimeEl.append(optionEl);
  });
  // end Time Selec Append
  timeRange.forEach((time) => {
    const optionEl = document.createElement("option");
    optionEl.value = `${time.hour}:${time.minute}`;
    optionEl.text = optionEl.value;
    userInputEndTimeEl.append(optionEl);
  });
}
