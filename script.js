const wheel = document.querySelectorAll(".wheel");


wheel.forEach((item) => {
  item.addEventListener("click", () => {
    spinWheel(item);
  });
});

const spinWheel = (wheel) => {
  const deg = Math.random() * (5760 - 2160) + 2160;

  const wheelRotation = [
    { transform: "rotate(0)" },
    { transform: "rotate(-70deg)", offset: 0.5 },
    { transform: `rotate(${deg}deg)` },
  ];
  const rotationTiming = {
    duration: 8000,
    iteration: 1,
    easing: "cubic-bezier(0, 0, 0.05, 1.02)",
    fill: "forwards",
  };

  // spin result
  // switch (true) {
  //   case (deg % 360 >=0 && deg % 360 <45):
  //     alert("HU");
  //     break;
  //   case (deg % 360 >=45 && deg % 360 <90):
  //     alert("Belly");
  //     break;
  //   case (deg % 360 >=90 && deg % 360 <135):
  //     alert("Mixte");
  //     break;
  //   case (deg % 360 >=135 && deg % 360 <180):
  //     alert("HD");
  //     break;

  // }

  wheel.animate(wheelRotation, rotationTiming);
};
