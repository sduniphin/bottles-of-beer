

var bottles = 100;

function beer() {
  while (bottles > 2) {
    console.log(bottles + " bottles of beer on the wall, " + bottles + " bottles of beer. Take one down, pass it around, " + --bottles + " bottles of beer on the wall.");
  }

  console.log(bottles + " bottles of beer on the wall, " + bottles + " bottles of beer. Take one down, pass it around, " + --bottles + " bottle of beer on the wall.");

  console.log(bottles + " bottle of beer on the wall, " + bottles + " bottle of beer. Take one down, pass it around, no more bottles of beer on the wall.");

  console.log("No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.");
}