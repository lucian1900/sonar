import { Howl } from "howler"

const wavs = require("../static/*.wav");

//import wavs from "../static/*.wav";

console.log(wavs)
const sound = new Howl({
    src: [wavs.sonar],
})

const sonar = () => {
    console.log('sonar!')
    sound.play()
}

document.getElementById("sound")?.addEventListener("click", sonar)
