var _a;
import { Howl } from "howler";
const sound = new Howl({
    src: ["sonar.wav"],
});
const sonar = () => {
    console.log('sonar!');
    sound.play();
};
(_a = document.getElementById("sound")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", sonar);
//# sourceMappingURL=index.js.map