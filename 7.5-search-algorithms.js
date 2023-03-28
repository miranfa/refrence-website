// Returns a random sized array of random numbers between 1 and 100
function getRandomList() {
  // Randomly set the size of the array to be between 10 and 100
  var size = Math.floor(Math.random() * 90) + 10;

  // Create an empty array
  var list = [];

  // Fill the array
  for (var i = 0; i < size; i++) {
    // Add a random number between 1 and 100
    list.push(Math.floor(Math.random() * 99)) + 1;
  }

  // Return filled list
  return list;
}

// Linear Search Algorithm
function linearSearch(target, array) {

}






// Binary Search Algorithm
function binarySearch(target, array) {
  // 1. Sort array

  // 2. Set the low index to 0 and high index to length - 1

  // 3. Set middle index to average of low and high

  // 4. If the middle index is the target, return the middle index

  // 5. If the target element is less than the element at the middle index, set the high index to the middle index – 1

  // 6. If the target element is greater than the element at the middle index, set the low index to the middle index + 1

  // 7. Repeat steps 3-6 until low and high index are equal

  // 8. Return -1 if element is not found
}