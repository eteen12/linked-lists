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
    prepend(data){
        const node = new Node(data);
        node.next = this.head;
        this.head = node;
        this.length ++;
    }
    contains(value){
        let current = this.head;
        while(current != null ){
            if(current.data === value) return true;
            current = current.next; //this is needed in order to traverse throught the list.
        }
        return false; // if the number is not there.
    }
    getHead(){
        if(this.head){
            console.log(`head: ${this.head.data}`)
        }else{
            console.log("this is a empty list bud.")
        }
        
    }
    getTail(){
        if(!this.head){
            return null;
        }
        let current = this.head;
        while (current.next !== null){
            current = current.next;
        }
        return current;
    }
    at(index){
        if(index <0 || index > this.length){
            return null;
        }

        let current = this.head;
        let count = 0;

        while (count < index){
            current = current.next;
            count ++;
        }
        return current;
    }
    pop(){
        if(!this.head){
            return null;
        }
        let current = this.head;
        let previous = null;
        //this is how im going to traverse to the last node in this linked list
        while(current.next !== null){
            previous = current;
           current = current.next;
        }
        //this is if there is only one node in the list
        if(previous === null){
            this.head = null;
        }else{
            previous.next = null;
        }
        this.length--;
        return current;
    }
    find(value){
        let current = this.head;
        let index=0;

        while (current !== null){
            if(current.data === value){
                return index;
            }
            current = current.next;
            index++;
        }
        return null;
    }
    toString(){
        let result = '';
        let current = this.head;

        while (current !== null){
            result += `(${current.data}) -> `;
            current = current.next;
        }

        result += 'null';

        return result;
    }
    insertAt(value, index){
        if(index < 0 || index > this.length){
            return false;
        }
        const newNode = new Node(value);

        if (index === 0){
            newNode.next = this.head;
            this.head = newNode;
        }else{
            let current = this.head;
            let previous = null;
            let count = 0;

            while(count< index){
                previous = current;
                current = current.next;
                count++;
            }
            newNode.next = current;
            previous.next = newNode;
        }
        this.length++;
        return true;
    }
   
} 




const list = new LinkedList();
list.append(5);
list.append(10);
list.prepend(14);

list.insertAt(2,0);

let string = list.toString();
console.log(string);

/* eslint-enable */
