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

    insertLast(node) {
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

    insertFirst(node){
        node.next= this.root

        this.root=node
    }
   
    getFirst(){
    
        return this.root
    }

    getLast(){
        let temp = this.root
        while (temp.next != null) {
            temp = temp.next
        }
      
        return temp
    }

    reverseList(prev,current){
      if( current)
      {
       
        if(current.next===null)
        {
            console.log("Last");
            current.next= prev
            prev.next=null
            console.log("Last", current ,prev);
            return 
        }
        else 
        {
            console.log("goo deep",);
            this.reverseList(current,current.next)
        }
      }
      else 
      {
        console.log("YES");
        this.reverseList(null,this.root)
      }
  
    }

}

let nodes = [new Node(1), new Node(8), new Node(3), new Node(5),]
let myList = new LinkedList()

myList.insertLast(nodes[0])
myList.insertLast(nodes[1])
myList.insertLast(nodes[2])
myList.insertLast(nodes[3])
myList.insertFirst(new Node(89))
myList.insertFirst(new Node(77))
//myList.printList()
myList.getLast()
myList.getFirst()
myList.reverseList()
myList.printList()
