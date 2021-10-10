// Add Front
// Write a method that accepts a value and create a new node, assign it to the list head, and return a pointer to the new head node.

class SLL {
    constructor() {
        this.head = null;
    }
    addFront(value) {
    var new_node= new Node(val);
    if(!self.head){
        self.head=new_node ;
        return self;
    }
    new_node.next=this.head;
    this.head=new_node;
    return this.head;
   }
//    Remove Front
//    Write a method to remove the head node and return the new list head node. If the list is empty, return null.
   removeFront() {
   var new_node = this.head; 
    if (this.head == null) { 
        return this.head;
    }else{
    this.head = new_node.next; 
    return this.head;
    }
}
// Front
// Write a method to return the value (not the node) at the head of the list. If the list is empty, return null.
   front() {
    if (this.head == null) {
        return null;
    } else { 
        return this.head.value;
    }
   }

}