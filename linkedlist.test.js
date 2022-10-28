const LinkedList = require('./LinkedList');

describe('Testing LinkedList appendAtHead method', () => {
    it('it adds a new node at the list head', () => {
        const list = new LinkedList();
        list.appendAtHead(10);
        const oldHead = list.head;
        list.appendAtHead(20);

        expect(list.head.data).toBe(20);
        expect(list.head.next).toBe(oldHead);
        expect(list.length).toBe(2);
    })
})

describe('Testing LinkedList getByIndex method', () => {
    describe('With index less than 0', () => {
        it('Returns null', () => {
        const list = LinkedList.fromData(10, 20);

        expect(list.getByIndex(-1)).toBeNull();
        })
    })

    describe('With index greater than list length', () => {
        it('Returns null', () => {
            const list = LinkedList.fromData(10, 20);

            expect(list.getByIndex(5)).toBeNull();
        })
    })

    describe('With index 0', () => {
        it('Returns head of the list', () => {
            const list = LinkedList.fromData(10, 20);

            expect(list.getByIndex(0).data).toBe(10);
        })
    })

    describe('With index in the middle', () => {
        it('Returns head of the list', () => {
            const list = LinkedList.fromData(10, 20, 30, 40);

            expect(list.getByIndex(2).data).toBe(30);
        })
    })
})

describe('Testing LinkedList appendAtIndex method', () => {
    describe('With index less than 0', () => {
        it('Does not append anything', () => {
            const list = LinkedList.fromData(10, 20);
            list.appendAtIndex(-1, 30);

            expect(list.length).toBe(2);
        })
    })

    describe('With index greater than list length', () => {
        it('Does not append anything', () => {
            const list = LinkedList.fromData(10, 20);
            list.appendAtIndex(5, 30);

            expect(list.length).toBe(2);
        })
    })
    describe('With index 0', () => {
        it('Append at the head', () => {
            const list = LinkedList.fromData(10, 20);
            list.appendAtIndex(0, 30);

            expect(list.head.data).toBe(30);
            expect(list.head.next.data).toBe(10);
            expect(list.length).toBe(3);
        })
    })

    describe('With index in the middle', () => {
        it('Append at the given index', () => {
            const list = LinkedList.fromData(10, 20, 30, 40);
            list.appendAtIndex(2, 50);
            const insertedNode = list.getByIndex(2);

            expect(insertedNode.data).toBe(50);
            expect(insertedNode.next.data).toBe(30);
            expect(list.length).toBe(5);
        })
    })
})

describe('Testing LinkedList removeAtHead method', () => {
    it('it removes a node at the list head', () => {
        const list = new LinkedList.fromData(10, 20, 30);
        list.removeAtHead()

        expect(list.head.data).toBe(20);
        expect(list.head.next.data).toBe(30);
        expect(list.length).toBe(2);
    })
})

describe('Testing LinkedList removeAtIndex method', () => {
    describe('With index less than 0', () => {
        it('Does not remove anything', () => {
            const list = LinkedList.fromData(10, 20);
            list.removeAtIndex(-1);

            expect(list.length).toBe(2);
        })
    })

    describe('With index greater than list length', () => {
        it('Does not remove anything', () => {
            const list = LinkedList.fromData(10, 20);
            list.removeAtIndex(5);

            expect(list.length).toBe(2);
        })
    })
    describe('With index 0', () => {
        it('Remove at the head', () => {
            const list = LinkedList.fromData(10, 20, 30);
            list.removeAtIndex(0);

            expect(list.head.data).toBe(20);
            expect(list.head.next.data).toBe(30);
            expect(list.length).toBe(2);
        })
    })

    describe('With index in the middle', () => {
        it('Remove at the given index', () => {
            const list = LinkedList.fromData(10, 20, 30, 40);
            list.removeAtIndex(2);
            const previousNode = list.getByIndex(1);

            expect(previousNode.data).toBe(20);
            expect(previousNode.next.data).toBe(40);
            expect(list.length).toBe(3);
        })
    })
})

describe('Testing LinkedList appendAtTail method', () => {
    it('it appends a new node at the list tail', () => {
        const list = new LinkedList.fromData(10, 20, 30);
        list.appendAtTail(40)
        let current = list.head;
        while(current.next) {
            current = current.next;
        }

        expect(current.data).toBe(40);
        expect(current.next).toBeNull();
        expect(list.length).toBe(4);
    })
})

describe('Testing LinkedList removeAtTail method', () => {
    it('removes a node at the list tail', () => {
        const list = new LinkedList.fromData(10, 20, 30);
        list.removeAtTail()
        let current = list.head;
        while(current.next) {
            current = current.next;
        }

        expect(current.data).toBe(20);
        expect(current.next).toBeNull();
        expect(list.length).toBe(2);
    })
})

describe('Testing LinkedList sort method', () => {
    it('sorts the LinkedList nodes from descendant to ascendant', () => {
        const list = new LinkedList.fromData(20, 10, 40, 30);
        list.sort();
        const Node = list.getByIndex(2);

        expect(list.head.data).toBe(10);
        expect(list.head.next.data).toBe(20);
        expect(Node.data).toBe(30);
    })
})

describe('Testing LinkedList reverse method', () => {
    it('reverses the LinkedList nodes current order', () => {
        const list = new LinkedList.fromData(10, 20, 30, 40);
        list.reverse();
        const Node = list.getByIndex(2);

        expect(list.head.data).toBe(40);
        expect(list.head.next.data).toBe(30);
        expect(Node.data).toBe(20);
    })
})