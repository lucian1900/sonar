import howler from "howler"

const sound = new howler.Howl({
    src: ["./assets/sonar.wav"],
})

const sonar = () => {
    console.log('sonar!')
    sound.play()
}

document.getElementById("sound")?.addEventListener("click", sonar)
