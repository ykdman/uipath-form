function renderTask(taskObj) {
  const taskListEl = document.getElementById("task_list");
  const taskHeaderTitleEl = document.querySelector("#alert_header h2");
  const taskHeaderDescEl = document.querySelector("#alert_description h4");
  const tasks = { ...taskObj };
  const taskIds = [...taskObj.id];

  const descMonth = `${new Date().getMonth() + 1}`;
  const descDay = `${new Date().getDate()}`;

  // 헤더 타이틀 설정
  taskHeaderTitleEl.innerHTML = tasks.alertTitle;
  // 헤더 날짜 설정
  taskHeaderDescEl.innerHTML = `${descMonth}월 ${descDay}일 예약된 업무 내용 입니다.`;

  // 업무 렌더링
  taskIds.forEach((id) => {
    const taskTitle = tasks[id].title;
    const taskTime = tasks[id].time;
    const taskEl = document.createElement("li");
    taskEl.classList.add("task_el");
    taskEl.innerHTML = `${taskTime} ${taskTitle}`;
    taskListEl.append(taskEl);
  });
}

function taskRenderHandler() {
  // get render
  const renderInfo = JSON.parse(
    document.getElementById("json_value").innerHTML
  );
  renderTask(renderInfo);
}

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM Loaded");
  setTimeout(() => {
    taskRenderHandler();
  }, 500);
});
