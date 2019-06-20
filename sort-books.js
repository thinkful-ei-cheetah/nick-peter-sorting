function swap(array, i, j) {
    const tmp = array[i];
    array[i] = array[j];
    array[j] = tmp;
};

function sortBooks(arr) {
  let swaps = 0;

  arr.forEach((item, index) => {
    if(index === arr.length -1) {
      return
    }

    if(item.toLowerCase() > arr[index + 1].toLowerCase()) {
      swap(arr, index, index + 1)
      swaps++
    }
  })

  if(swaps > 0) {
    return sortBooks(arr)
  }

  return arr
}

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
  'piop',
]

console.log(sortBooks(data))