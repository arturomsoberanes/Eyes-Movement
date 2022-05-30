var character = document.getElementById('character');
var eyes = document.getElementById('eyes');

function changeCharacter(pokemon){
  switch (pokemon) {
    case 'pikachu':
      character.src = "./img/Pikachu.svg"
      break;
    case 'charmander':
      character.src = "./img/Charmander.svg"
      break;
    case 'squirtle':
      character.src = "./img/Squirtle.svg"
      break;
    case 'bulbasaur':
      character.src = "./img/Bulbasaur.svg"
      break;
    default:
      alert("Error");
  }
}
