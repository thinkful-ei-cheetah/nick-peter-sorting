function swap(array, i, j) {
  const tmp = array[i]
  array[i] = array[j]
  array[j] = tmp
}

function sortBooks(arr) {
  let swaps = 0 // 0

  arr.forEach((item, index) => {
    // item = 5, index = 4, arr.length = 5
    if (index === arr.length - 1) {
      return
    }

    if (item.toLowerCase() > arr[index + 1].toLowerCase()) {
      swap(arr, index, index + 1)
      swaps++ // swap = 2
    }
  })

  if (swaps > 0) {
    return sortBooks(arr) // [3, 2, 1, 4, 5] sorted
  }

  return arr
}

smallData = [3, 4, 2, 1, 5]

sortBooks(smallData) // [3, 2, 1, 4, 5]

let data = [
  'Abc',
  'asdf',
  'fgh',
  'Awer',
  'vbnv',
  'werwer',
  'qwdz',
  'hjkhc',
  'vcbc',
  'swe',
  'wer',
  'piop'
]

console.log(sortBooks(data))
