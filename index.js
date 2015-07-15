var audio = require('browser-audio')
var files = [
  audio.create('/sounds/duet1.mp3'),
  audio.create('/sounds/duet2.mp3'),
  audio.create('/sounds/duet3.mp3'),
  audio.create('/sounds/duet4.mp3'),
  audio.create('/sounds/duet5.mp3'),
  audio.create('/sounds/duet6.mp3'),
  audio.create('/sounds/duet7.mp3'),
  audio.create('/sounds/duet8.mp3'),
  audio.create('/sounds/duet9.mp3'),
  audio.create('/sounds/duet10.mp3'),
  audio.create('/sounds/duet11.mp3')
]

function playRandomSound () {
  var sound = files[Math.floor(Math.random() * files.length)]
  if (Math.random() > .4) {
    sound.play()
    console.log(sound.duration + ' seconds to free')
  }
}

var as = document.querySelectorAll('a')
for (i in as) {
  as[i].onclick = function (event) {
    event.preventDefault()
    playRandomSound()
  }
}


function loop () {
  audio.whenLoaded(files, function () {
    var timeout = 4000 + (Math.random() * 10 * 1000)
    setTimeout(playRandomSound, timeout)
  })
}
loop()