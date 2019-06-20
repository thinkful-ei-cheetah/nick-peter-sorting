// loop over find random index to swap with

function swap(array, i, j) {
  const tmp = array[i]
  array[i] = array[j]
  array[j] = tmp
}

function randomize(arr) {
  for (let i = 0; i < arr.length; i++) {
    swap(arr, i, Math.floor(Math.random() * arr.length))
  }

  return arr
}

const test = [1, 2, 3, 4, 5, 6, 7, 8, 9]

console.log(randomize(test))
