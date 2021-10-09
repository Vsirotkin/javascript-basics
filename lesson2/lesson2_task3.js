function playWithVar(a, b) {
  if (a >= 0 && b >= 0) {
    result = a - b;
  } else if (a < 0 && b < 0) {
    result = a * b;
  } else {
    result = a + b;
  }
  return result;
}

console.log(playWithVar(10, 3));
