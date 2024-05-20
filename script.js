/* eslint-disable */
class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
        this.length = 0;
    }
    //now we need to create a method which will take a value and add it into the linked list.
    append(data){
        const node = new Node(data);
        if(this.head === null) this.head = node;
        else{
            let current = this.head;
            while(current.next != null){
                current = current.next;
            }
            current.next = node;
        }
        this.length ++;
    }
} 




const list = new LinkedList();
list.append(5);
list.append(10);
console.log(list);
/* eslint-enable */
