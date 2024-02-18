/** uipathApi */
var uiPathApi = {
  getValue: function (elementId) {
    const element = document.getElementById(elementId);
    if (element) {
      switch (element.tagName) {
        case "INPUT":
        case "SELECT":
          return element.value;
        default:
          return element.innerHTML;
      }
    } else {
      return "ELEMENT NOT FOUND : " + elementId;
    }
  },

  setValue: function (elementId, value) {
    const element = document.getElementById(elementId);
    if (element) {
      switch (element.tagName) {
        case "INPUT":
        case "SELECT":
          element.value = value;
          return;
        default:
          element.innerHTML = value;
          return;
      }
    }
  },

  // Call this to trigger a "Form Message" event
  // This function is set by the forms engine after the page loads,
  // but declaring it here as empty helps with code autocompletion
  sendMessage: function (id, value) {},
};
