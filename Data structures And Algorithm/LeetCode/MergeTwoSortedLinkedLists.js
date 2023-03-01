
 // Definition for singly-linked list.
 function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val);
    this.next = (next===undefined ? null : next)
 }

const convertToList = (list) => {
    let newList = [];
    let current = list
    while(current) {
        newList.push(current.val);
        current = current.next;
    }
    return newList;
}

const convertListToSinglyLinkedList = (list) => {
    let node;
    for (let i = list.length-1; i >= 0; i--) {
        if (!node) {
            node = new ListNode(list[i],null);
        } else {
            let temp = new ListNode(list[i],null);
            temp.next = node;
            node = temp;
        }
    }
    return node;
}

const mergeSort = (list1,list2) => {
    if (list1.length === 0) return list2;
    if (list2.length === 0) return list1;
    let i = 0;
    let j = 0;
    let newArr = [];
    while (i < list1.length && j < list2.length) {
        if (list1[i] < list2[j]) {
            newArr.push(list1[i]);
            i++;
        } else {
            newArr.push(list2[j]);
            j++;
        }
    }
    while (i < list1.length) {
        newArr.push(list1[i]);
        i++;
    }
    while (j < list2.length) {
        newArr.push(list2[j]);
        j++
    }
    return newArr;
}
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    if (!list1) return list2;
    if (!list2) return list1;
    let convertedList1 = convertToList(list1);
    let convertedList2 = convertToList(list2);
    let sortedArr = mergeSort(convertedList1,convertedList2);
    return convertListToSinglyLinkedList(sortedArr);
};