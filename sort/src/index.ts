import {Sorter} from './Sorter'
import {NumberCollection} from './NumbersCollection'
import {CharactersCollection} from './CharactersCollection'
import {LinkedList} from './LinkedList'

// const numbersCollection = new NumberCollection([1,3,5,9,12,-4,0,-12,8,6,20]);
// numbersCollection.sort();
// console.log(numbersCollection.data)

// const characterCollection = new CharactersCollection("Damilola jumia");
// characterCollection.sort()
// console.log(characterCollection.data)

const linkedList = new LinkedList();

linkedList.add(500)
linkedList.add(10)
linkedList.add(-4)
linkedList.add(-9)
linkedList.add(12)
linkedList.add(140)
linkedList.add(7)

linkedList.sort();

linkedList.print();