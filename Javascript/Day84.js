//  Function to remove a specific element from an array.

function remove_num(gyomei, target) {
  for (let i = 0; i < gyomei.length; i++) {
    if (gyomei[i] === target) {
      gyomei.splice(i, 1);
      i--;
    }
  }
  return gyomei;
}
let gyomei = [2, 6, 3, 5, 3];
let target = 3;
console.log(remove_num(gyomei, target));
