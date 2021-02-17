"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LinkedList_1 = require("./LinkedList");
// const numbersCollection = new NumberCollection([1,3,5,9,12,-4,0,-12,8,6,20]);
// numbersCollection.sort();
// console.log(numbersCollection.data)
// const characterCollection = new CharactersCollection("Damilola jumia");
// characterCollection.sort()
// console.log(characterCollection.data)
var linkedList = new LinkedList_1.LinkedList();
linkedList.add(500);
linkedList.add(10);
linkedList.add(-4);
linkedList.add(-9);
linkedList.add(12);
linkedList.add(140);
linkedList.add(7);
linkedList.sort();
linkedList.print();
