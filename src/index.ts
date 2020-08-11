import howler from 'howler'
import nipple from 'nipplejs'

const sound = new howler.Howl({
    src: ['./assets/sonar.wav'],
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
})

joystick.on('move', (_, data) => {
    if (!data.direction) return;

    let signX = data.direction.x === 'left' ? -1 : 1;

    sound.pos(signX * data.distance * 0.1, 0, 0)
})