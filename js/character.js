var character = document.getElementById('character');
var eyes = document.getElementById('eyes');

function changeCharacter(pokemon){
  switch (pokemon) {
    case 'pikachu':
      character.src = "./img/Pikachu.svg"
      character.style.width = 90 + "%"
      eyes.style.top = 58 + "%"
      eyes.style.left = 2 + "%"
      break;
    case 'charmander':
      character.src = "./img/Charmander.svg"
      character.style.width = 60 + "%"
      eyes.style.top = 34 + "%"
      eyes.style.left = 0 + "px"
      break;
    case 'squirtle':
      character.src = "./img/Squirtle.svg"
      character.style.width = 60 + "%"
      eyes.style.top = 34 + "%"
      eyes.style.left = 0 + "px"
      break;
    case 'bulbasaur':
      character.src = "./img/Bulbasaur.svg"
      character.style.width = 70 + "%"
      eyes.style.top = 37 + "%"
      eyes.style.left = 0 + "px"
      break;
    default:
      alert("Error");
  }
}
