import { Howl } from "howler"

console.log(Howl)

const sound = new Howl({
    src: ["./assets/sonar.wav"],
})

const sonar = () => {
    console.log('sonar!')
    sound.play()
}

document.getElementById("sound")?.addEventListener("click", sonar)
