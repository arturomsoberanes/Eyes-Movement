var character = document.getElementById('character');
var eyes = document.getElementById('eyes');
var poke = document.getElementById('APoke')
poke.volume = 0.3

function changeCharacter(pokemon){
  switch (pokemon) {
    case 'pikachu':
      let audioP = document.getElementById('APika')
      poke.play()
      audioP.play()
      character.src = "./img/Pikachu.svg"
      character.style.width = 90 + "%"
      eyes.style.top = 58 + "%"
      eyes.style.left = 2 + "%"
      break;
    case 'charmander':
      let audioC = document.getElementById('AChar')
      poke.play()
      audioC.play()
      character.src = "./img/Charmander.svg"
      character.style.width = 60 + "%"
      eyes.style.top = 34 + "%"
      eyes.style.left = 0 + "px"
      break;
    case 'squirtle':
      let audioS = document.getElementById('ASquir')
      poke.play()
      audioS.play()
      character.src = "./img/Squirtle.svg"
      character.style.width = 60 + "%"
      eyes.style.top = 34 + "%"
      eyes.style.left = 0 + "px"
      break;
    case 'bulbasaur':
      let audioB = document.getElementById('Abul')
      poke.play()
      audioB.play()
      character.src = "./img/Bulbasaur.svg"
      character.style.width = 70 + "%"
      eyes.style.top = 37 + "%"
      eyes.style.left = 0 + "px"
      break;
    default:
      alert("Error");
  }
}
