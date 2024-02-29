function taskRenderHandler() {
  const dummyRender = {
    id: ["a", "b", "c", "d"],
    a: {
      time: "09:00",
      title: "회의실 A",
    },
    b: {
      time: "09:00",
      title: "회의실 B",
    },
    c: {
      time: "09:00",
      title: "회의실 C",
    },
    d: {
      time: "09:00",
      title: "회의실 D",
    },
  };

  //   const renderInfo = JSON.parse(document.getElementById("json_value").innerHTML);

  //test setting
  uiPathApi.setValue("json_value", JSON.stringify(dummyRender));
}
