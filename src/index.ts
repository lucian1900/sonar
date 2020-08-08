import howler from "howler"

const sound = new howler.Howl({
    src: ["./assets/sonar.wav"],
    loop: true,
})

let DIST = 5
let x = DIST
let y = 0

sound.play()
    
sound.on('end', () => {
    
    if ( x > 0) {
        x = -DIST
    } else {
        x = DIST
    }

    sound.pos(x, y, 0)
})
