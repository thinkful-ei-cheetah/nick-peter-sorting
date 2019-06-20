let testStr =
  '89 30 25 32 72 70 51 42 25 24 53 55 78 50 13 40 48 32 26 2 14 33 45 72 56 44 21 88 27 68 15 62 93 98 73 28 16 46 87 28 65 38 67 16 85 63 23 69 64 91 9 70 81 27 97 82 6 88 3 7 46 13 11 64 76 31 26 38 28 13 17 69 90 1 6 7 64 43 9 73 80 98 46 27 22 87 49 83 6 39 42 51 54 84 34 53 78 40 14 5'
let stringArr = testStr.split(' ')
let testArr = []
stringArr.map(str => testArr.push(Number(str)))

// testArr = array of numbers
// lowest = 1
// highest = 99

// O(n) sort algo

function bucketSort(arr, min, max) {
  let operations = 0
  const buckets = []

  for (let i = min; i <= max; i++) {
    buckets.push([])
  }
  // console.log(buckets)
  for (let i = 0; i < arr.length; i++) {
    let item = arr[i]
    // console.log(Math.floor((item / max) * arr.length))
    buckets[Math.floor((item / max) * arr.length)].push(item)
  }

  const results = []

  buckets.forEach(bucket => {
    if (bucket.length !== 0) {
      results.push(bucket[0])
    }
  })

  return results
}

console.log(bucketSort(testArr, 1, 99))

// [9 20 5 11 1 99 ]
//  i            j

//  k = 99
//  bucket = [ , ]
//  M = 99
//  min = 1

//  loop through arr
//   insert item into buckets[floor(array[i] / M * k)] // bucket[[9, 5], [20], [], [], [], [99]] = 1

//  let i = arr[0], j=[arr.length -1]

// function bucketSort(array, k) is
//   buckets ← new array of k empty lists
//   M ← the maximum key value in the array
//   for i = 1 to length(array) do
//     insert array[i] into buckets[floor(array[i] / M * k)]
//   for i = 1 to k do
//     nextSort(buckets[i])
//   return the concatenation of buckets[1], ...., buckets[k]
