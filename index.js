import {Howl} from "./web_modules/howler.js";
console.log(Howl);
const sound = new Howl({
  src: ["/assets/sonar.wav"]
});
const sonar = () => {
  console.log("sonar!");
  sound.play();
};
document.getElementById("sound")?.addEventListener("click", sonar);
//# sourceMappingURL=index.js.map
