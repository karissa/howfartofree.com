var audio = require('browser-audio')
var files = [
  audio.create('/sounds/duet1.mp3'),
  audio.create('/sounds/duet2.mp3'),
  audio.create('/sounds/duet3.mp3'),
  audio.create('/sounds/duet4.mp3')
]

function playRandomSound () {
  var sound = files[Math.floor(Math.random() * 4)]
  sound.play()
  var next = (sound.duration + Math.floor(Math.random() * 8)) * 1000
  console.log(next + 'ms to free')
  setTimeout(playRandomSound, next)
}

audio.whenLoaded(files, function () {
  playRandomSound()
})
