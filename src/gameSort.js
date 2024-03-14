export default function gameSort(arr) {
  return arr.sort((x, y) => y.health - x.health);
}
