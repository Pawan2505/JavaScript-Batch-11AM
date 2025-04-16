let x = 8,
  y = 4,
  z = 12;

if (x < y) {
  if (x < z) {
    console.log("X is min");
  } else {
    console.log("Z is min");
  }
} else {
  if (y < z) {
    console.log("Y is min");
  } else {
    console.log("Z is min");
  }
}
