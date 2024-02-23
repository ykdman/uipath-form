function sendSceduleInfo() {
  const mailTitle = document.getElementById("userinput_mailtitle").value;
  const mailBody = document.getElementById("userinput_mailbody").value;
  const mailDate = document.getElementById("userinput_date").value;
  if (!mailTitle || !mailBody || !mailDate) {
    return;
  }

  const schedulInfo = {
    mailTitle,
    mailBody,
    mailDate,
  };
  console.log(JSON.stringify(schedulInfo));
  uiPathApi.sendMessage("Schedule Registration", JSON.stringify(schedulInfo));
}

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM Loaded");

  document
    .getElementById("schedul_confirm_btn")
    .addEventListener("click", sendSceduleInfo);
});
