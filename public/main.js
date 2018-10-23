let i = 0
const txt = 'Flee in terror at cucumber discovered on floor scratch the box mesmerizing birds stare at imaginary bug you call this cat food, pretend not to be evil yet scratch. Purr. Cat slap dog in face poop on floor and watch human clean up try to hold own back foot to clean it but foot reflexively kicks you in face, go into a rage and bite own foot, hard.'
const speed = 50

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("description").textContent += txt.charAt(i)
    i++
    setTimeout(typeWriter, speed)
  }
  
}

document.getElementById("title").addEventListener('animationend', typeWriter)