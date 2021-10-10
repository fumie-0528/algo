class SLL {
    constructor() {
        this.head = null;
    }    

    printAll() {
        var curr = this.head;
        while(curr!= null) {
            console.log(curr.val);
            curr = curr.next;
        }
        return this;
    }
    