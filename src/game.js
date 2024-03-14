export default function game(character) {
  if (character.health > 50) {
    return 'health';
  }
  if (character.health < 15) {
    return 'critical';
  }
  return 'wounded';
}
