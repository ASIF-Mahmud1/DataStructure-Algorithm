class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }

}

class LinkedList {
    constructor() {
        this.root = null
    }

    addNode(node) {
        if (this.root === null) 
        {
            this.root = node
        }
        else 
        {
            let temp = this.root
            while (temp.next != null) {
                temp = temp.next
            }
            temp.next = node
        }
    }

    printList() {
        let temp = this.root
        while (temp != null) {
            console.log(temp.value);
            temp = temp.next
        }

    }

}

let nodes = [new Node(1), new Node(8), new Node(3), new Node(5),]
let myList = new LinkedList()

myList.addNode(nodes[0])
myList.addNode(nodes[1])
myList.addNode(nodes[2])
myList.addNode(nodes[3])

myList.printList()

