import howler from 'howler'
import nipple from 'nipplejs'
import matter from 'matter-js'

const sound = new howler.Howl({
    src: ['./assets/sonar.webm', './assets/sonar.mp3'],
    loop: true,
})

sound.play()


const joystick = nipple.create({
    zone: <HTMLElement>document.querySelector('#joystick'),
    color: 'purple',
    mode: 'static',
    position: {
        left: '50%',
        top: '50%',
    },
    restJoystick: false,
    lockX: true
})

joystick.on('move', (_, data) => {
    sound.pos(data.vector.x, 0, 0)
})

