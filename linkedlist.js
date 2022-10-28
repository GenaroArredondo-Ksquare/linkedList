//First we declare our classes for the LinkedList data structure

//Class for a Node in the list
class listNode {
    constructor(data, next){
        this.data = data; //Where the value of the node will be stored
        this.next = next; //Where the next node object will be stored
    }
}

class LinkedList{
    constructor(){
        this.head = null; //Where the head Node of the list will be stored
        this.length = 0;  //Initialize the length of the list
    }

    //Method to add a Node to the head of the list
    appendAtHead(data) {
        const newNode = new listNode(data, this.head); //Create a node with the value of head(null) next to it
        this.head = newNode;                           //Assign the new node to the current Head node
        this.length++;                                 //Increase Length by one
    }

    //Method to get a node object with a specified index
    getByIndex(index) {
        if(index < 0 || index >= this.length) return null;  //return nothing if the index isn't in the list range

        let current = this.head;
        for(let i = 0; i < index; i++) { //We iterate every node and
            current = current.next;      //reassign the current node to the next one
        }                                //until we reach the one on the specified index
        return current;
    }

    //Method to insert a node in a specified index
    appendAtIndex(index, data) {
        if(index  == 0) return this.appendAtHead(data); //If the given index is 0(head), use appendAtHead method

        const previous = this.getByIndex(index - 1); //Get the previous node of the specified index
        if(previous == null) return null; //If there is nothing, return nothing
         
        //Create a new node that will have the next parameter
        //as the current one, and assign the current as the new node
        //(think of it like making a sandwich with the existing nodes and
        //the new one in the middle Ex.- INSERTING 30: 10, 20 => 10, 30, 20)
        previous.next = new listNode(data, previous.next);
        this.length++; //Increase the list length by one
    }

    //Remove the head node of the list
    removeAtHead() {
        this.head = this.head.next; //Just assign the node next to the head as the head
        this.length--;              //Decrease the list length by one
    }

    //Method to remove a node in the specified index
    removeAtIndex(index) {
        if(index  == 0) return this.removeAtHead();

        const previous = this.getByIndex(index - 1);
        if(previous == null) return null;

        //We use the same logic as appendAtIndex but instead, assign the node
        //next to the current node as the current node
        
        previous.next = previous.next.next;
        this.length--; //Decrease the list by one
    }

    //Method to insert node at the tail
    appendAtTail(data) {
        //Create a node with a null object as the next node
        //If the list is empty, add the node as a head
        const newNode = new listNode(data, null);
        if(this.head === null) this.head = newNode;

        //Iterate the list until the next node of the current node is null(Tail node)
        let current = this.head;
        while(current.next) {
            current = current.next;
        }
        //Assign the new node at the tail
        current.next = newNode;

        this.length++;  //Increase the list by 1

    }
    //Method to remove the tail node
    removeAtTail() {
        if(this.head === null) return;

        //Same logic as the previous method, but instead we assign the tail node to null
        let current = this.head;
        let previous = null;
        while(current.next) {
            previous = current;
            current = current.next;
        }

        previous.next = null;

        this.length--;  //Decrease the list by 1
    }
    //Method to sort the list
     sort() {
        let temp;
        for(let i = 0; i < this.length; i++) {
            let current = this.head;

            //Use a bubble sort to compare every two nodes and its values
            //If the current node value is greater than the next node value
            //Switch its values
            while(current.next) {
                if(current.data > current.next.data) {
                    temp = current.data;
                    current.data = current.next.data;
                    current.next.data = temp;
                }
                current = current.next;
            }
        }
    }
    //Method to reverse the list
    reverse() {
        let previous = null;
        let current = this.head;
        if(current == null) return;
        let nextNode;
        while(current) {
            nextNode = current.next;
            current.next = previous;
            previous = current;

            current = nextNode;
        }
        this.head = previous;
    }

    //Helper method to print the list as a string
    print() {
        let output = '';
        let current = this.head;
        while(current) {
            output = `${output}${current.data} -> `;
            current = current.next;
        }
        console.log(`${output}null`);
    }
}
//Helper function to create a list with multiple initial nodes
LinkedList.fromData = function(...data) {
    const list = new LinkedList();
    for(let i = data.length - 1; i >= 0; i--) {
        list.appendAtHead(data[i]);
    }
    return list;
}

const list = LinkedList.fromData(20, 10, 40, 30);
//Testing with Helper string function
list.appendAtTail(50);
list.print();
list.appendAtTail(60);
list.print();
list.sort();
list.print();

module.exports = LinkedList;