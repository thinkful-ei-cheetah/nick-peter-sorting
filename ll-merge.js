/* eslint-disable indent */
'use strict';

class _Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }

}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(item) {
        this.head = new _Node(item, this.head);
    }

    insertLast(item) {
        if(!this.head){
            this.insertFirst(item)
            return;
        }
        let tempNode = this.head;
        while (tempNode.next !== null) {
            tempNode = tempNode.next;
        }
        tempNode.next = new _Node(item, null);
    }
    insertBefore(item, target) {
        let currNode = this.head;
        if (!this.head) {
            return null;
        }
        while (currNode.next.value !== target) {
            if (currNode.next.value === null) {
                return null;
            }
            else {
                currNode = currNode.next;
            }
        }
        currNode.next = new _Node(item, currNode.next);

    }
    insertAfter(item, target) {
        let currNode = this.head;
        if (!this.head) {
            return null;
        }
        while (currNode.value !== target) {
            if (currNode.next === null) {
                return null;
            }
            else {
                currNode = currNode.next;
            }
        }
        currNode.next = new _Node(item, currNode.next);
    }
    insertAt(item, pos) {
        let i = 0;
        let currNode = this.head;

        if (pos === 0) {
            this.insertFirst(item);
        }
        if (!this.head) {
            return null;
        }
        while (i < pos) {

            currNode = currNode.next;
            i++;

        }
        this.insertBefore(item, currNode.value);

    }

    find(item) {
        let currNode = this.head;

        if (!this.head) {
            return null;
        }
        while (currNode.value !== item) {
            if (currNode.next === null) {
                return null;
            }
            else {
                currNode = currNode.next;
            }
        }
        return currNode;
    }
    remove(item) {
        if (!this.head) {
            return null;
        }

        if (this.head.value === item) {
            this.head = this.head.next;
        }
        let currNode = this.head;
        let previousNode = this.head;
        while ((currNode !== null) && (currNode.value !== item)) {
            previousNode = currNode;
            currNode = currNode.next;
        }
        if (currNode === null) {
            console.log('item not found');
            return;
        }
        previousNode.next = currNode.next;
    }
    cut(item) {
        if (!this.head) {
            return null;
        }

        if (this.head.value === item) {
            this.head = this.head.next;
        }
        let currNode = this.head;
        let previousNode = this.head;
        while ((currNode !== null) && (currNode.value !== item)) {
            previousNode = currNode;
            currNode = currNode.next;
        }
        if (currNode === null) {
            console.log('item not found');
            return;
        }
        previousNode.next = null;
    }
}

function size(list) {
    let length = 1;
    let currNode = list.head;
    if (!list.head) {
        return null;
    }
    while (currNode.next !== null) {

        currNode = currNode.next;
        length++;
    }
    console.log(length);
    return length;
}

function getMid(list){
    let currNode = list.head;
    let i = 0;
    let count = Math.floor(size(list) / 2)
    while (i < count) {
        currNode = currNode.next;
        i++;
    }
    console.log(currNode.value);
    return currNode;
}

function mergeSort(list){
    if(list.head.next === null){
        return list
    }
    let tempList = new LinkedList()
    const middle = getMid(list)
    tempList.head = middle;
    list.cut(middle);
    let left = list;
    let right = tempList;

    left = mergeSort(left);
    right = mergeSort(right);
    return merge(left, right, list);
}

function merge(left, right, list) {
    let lNode = left.head;
    let rNode = right.head;
    // list.head = null;

    while(lNode !== null && rNode !== null) {
        if(lNode.value < rNode.value) {
            list.insertLast(lNode.value)
            lNode = lNode.next;
        }
        else {
            list.insertLast(rNode.value)
            rNode = rNode.next;
        }
    }
    while(lNode !== null){
        list.insertLast(lNode.value);
        lNode = lNode.next; 
    }


}

function main() {
    let SLL = new LinkedList();
    SLL.insertFirst('Apollo');
    SLL.insertLast('Boomer');
    SLL.insertLast('Helo');
    SLL.insertLast('Husker');
    SLL.insertLast('Starbuck');
    SLL.insertLast('Tauhida');

    let tempList = new LinkedList()

    const middle = getMid(SLL);
    SLL.cut(middle.value)
    tempList.head = middle;
    
    console.log(SLL)
    console.log(tempList)
}   

main();