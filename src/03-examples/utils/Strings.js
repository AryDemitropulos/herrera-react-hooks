export function capitalize(string = '') {
  const word = string.toLocaleLowerCase();
  const capitalized = word.charAt(0).toUpperCase() + word.slice(1);

  return capitalized;
}
