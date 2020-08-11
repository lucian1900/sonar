import howler2 from "./web_modules/howler.js";
import nipple from "./web_modules/nipplejs.js";
const sound = new howler2.Howl({
  src: ["./assets/sonar.webm", "./assets/sonar.mp3"],
  loop: true
});
sound.play();
const joystick = nipple.create({
  zone: document.querySelector("#joystick"),
  color: "purple",
  mode: "static",
  position: {
    left: "50%",
    top: "50%"
  },
  restJoystick: false,
  lockX: true
});
joystick.on("move", (_, data) => {
  sound.pos(data.vector.x, 0, 0);
});
//# sourceMappingURL=index.js.map
