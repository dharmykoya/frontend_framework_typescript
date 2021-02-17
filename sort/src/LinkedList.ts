import {Sorter} from "./Sorter";

class NodeObj {
    next: NodeObj | null = null;
    constructor(public data: number) {}
}


export class LinkedList extends Sorter{
    head: NodeObj | null = null;


    add( data: number): void {
        const node: NodeObj | null  = new NodeObj(data);

        if (!this.head) {
            this.head = node;
            return;
        }
        let tail: NodeObj  = this.head;

        while (tail.next) {
            tail = tail.next
        }

        tail.next = node
    }

    get length(): number {
        if (!this.head) {
            return 0;
        }

        let length = 1
        let node = this.head

        while(node.next) {
            length ++;
            node = node.next
        }

        return length
    }

    at(index: number): NodeObj {
        if(!this.head) {
            throw new Error("Index out bounds");
        }

        let counter = 0
        let node: NodeObj | null = this.head;

        while(node) {
            if(counter === index) {
                return node;
            }
            counter++;
            node = node.next
        }
        throw new Error("Index out bounds");
    }

    compare(leftIndex: number, rightIndex: number): boolean {
        if(!this.head) {
            throw new Error("List is empty");
        }
        return this.at(leftIndex).data > this.at(rightIndex).data
    }

    swap(leftIndex: number, rightIndex: number): void {
        if(!this.head) {
            throw new Error("List is empty");
        }

        let leftNode = this.at(leftIndex);
        let rightNode = this.at(rightIndex);

        const leftHand = leftNode.data;
        leftNode.data = rightNode.data;
        rightNode.data = leftHand;
    }

    print(): void {
        if(!this.head) {
            throw new Error("List is empty");
        }

        let node: NodeObj | null = this.head;
        while (node) {
            console.log(node.data);
            node = node.next
        }
    }
}