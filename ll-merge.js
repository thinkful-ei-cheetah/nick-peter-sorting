/* eslint-disable indent */
'use strict'
const util = require('util')
class _Node {
  constructor(value, next) {
    this.value = value
    this.next = next
  }
}

class LinkedList {
  constructor() {
    this.head = null
  }

  insertFirst(item) {
    this.head = new _Node(item, this.head)
  }

  insertLast(item) {
    if (!this.head) {
      this.insertFirst(item)
      return
    }
    let tempNode = this.head
    while (tempNode.next !== null) {
      tempNode = tempNode.next
    }
    tempNode.next = new _Node(item, null)
  }
  insertBefore(item, target) {
    let currNode = this.head
    if (!this.head) {
      return null
    }
    while (currNode.next.value !== target) {
      if (currNode.next.value === null) {
        return null
      } else {
        currNode = currNode.next
      }
    }
    currNode.next = new _Node(item, currNode.next)
  }
  insertAfter(item, target) {
    let currNode = this.head
    if (!this.head) {
      return null
    }
    while (currNode.value !== target) {
      if (currNode.next === null) {
        return null
      } else {
        currNode = currNode.next
      }
    }
    currNode.next = new _Node(item, currNode.next)
  }
  insertAt(item, pos) {
    let i = 0
    let currNode = this.head

    if (pos === 0) {
      this.insertFirst(item)
    }
    if (!this.head) {
      return null
    }
    while (i < pos) {
      currNode = currNode.next
      i++
    }
    this.insertBefore(item, currNode.value)
  }

  find(item) {
    let currNode = this.head

    if (!this.head) {
      return null
    }
    while (currNode.value !== item) {
      if (currNode.next === null) {
        return null
      } else {
        currNode = currNode.next
      }
    }
    return currNode
  }
  remove(item) {
    if (!this.head) {
      return null
    }

    if (this.head.value === item) {
      this.head = this.head.next
    }
    let currNode = this.head
    let previousNode = this.head
    while (currNode !== null && currNode.value !== item) {
      previousNode = currNode
      currNode = currNode.next
    }
    if (currNode === null) {
      console.log('item not found')
      return
    }
    previousNode.next = currNode.next
  }
  cut(item) {
    let tempList = new LinkedList()
    tempList.head = { ...this.head }
    // console.log(tempList.head)
    if (!tempList.head) {
      return
    }

    if (tempList.head.value === item) {
      tempList.head = tempList.head.next
    }
    let currNode = tempList.head
    let previousNode = tempList.head
    while (currNode !== null && currNode.value !== item) {
      previousNode = currNode
      currNode = currNode.next
    }
    if (currNode === null) {
      // console.log('item not found');

      return tempList
    }
    previousNode.next = null
    // console.log('templist' + tempList)
    return tempList
  }
}

function size(list) {
  let length = 1
  let currNode = list.head
  if (!list.head) {
    return null
  }
  while (currNode.next !== null) {
    currNode = currNode.next
    length++
  }
  // console.log(length);
  return length
}

function getMid(list) {
  // console.log(list)
  if (!list) {
    return ''
  } else {
    // console.log('list', list)
    let currNode = list.head
    let i = 0
    // console.log(size(list))
    let count = Math.floor(size(list) / 2)
    while (i < count) {
      currNode = currNode.next
      i++
    }
    // console.log(currNode.value);
    return currNode
  }
}

function mergeSort(list) {
  if (list.head.next === null) {
    return list
  }
  let resList = new LinkedList()
  let tempList = new LinkedList()
  const middle = getMid(list)
  // console.log(middle)
  tempList.head = { ...middle }
  // console.log(tempList)
  let left = list.cut(middle.value)
  let right = tempList
  // console.log('right' + right)

  // console.log('left: ' + util.inspect(left, {showHidden: false, depth: null}))
  left = mergeSort(left)
  right = mergeSort(right)

  return merge(left, right, resList)
}

function merge(left, right, list) {
  let lNode = left.head
  let rNode = right.head
  // list.head = null;

  while (lNode !== null && rNode !== null) {
    if (lNode.value < rNode.value) {
      list.insertLast(lNode.value)
      lNode = lNode.next
    } else {
      list.insertLast(rNode.value)
      rNode = rNode.next
    }
  }
  while (lNode !== null) {
    list.insertLast(lNode.value)
    lNode = lNode.next
  }
  while (rNode !== null) {
    list.insertLast(rNode.value)
    rNode = rNode.next
  }

  return list
}

function main() {
  let SLL = new LinkedList()
  SLL.insertFirst('Apollo')
  SLL.insertLast('Husker')
  SLL.insertLast('Starbuck')
  SLL.insertLast('Boomer')
  SLL.insertLast('Helo')
  SLL.insertLast('Tauhida')
  console.log(util.inspect(mergeSort(SLL), { showHidden: false, depth: null }))
  // let tempList = new LinkedList()

  // const middle = getMid(SLL);
  // SLL.cut(middle.value)
  // tempList.head = middle;

  // console.log(SLL)
  // console.log(tempList)
}

main()
