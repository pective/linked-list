class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    #list = [];

    append(value) {
        const node = new Node(value);
        if (this.#list.length > 0) {
            this.#list[this.#list.length - 1].next = node;
        }
        this.#list.push(node);
    }

    prepend(value) {
        const node = new Node(value);
        if (this.#list.length > 0) {
            this.#list.push(node);
        } else {
            this.#list.unshift(node);
        }
    }

    size() {
        return this.#list.length;
    }

    head() {
        return this.#list[0];
    }

    tail() {
        return this.#list[this.size() - 1];
    }

    toString() {
        let output = "";
        let current = this.head();
        while (current) {
            output += `( ${current.data} ) -> `;
            current = current.next;
        }
        output += "null";
        console.log(output);
    }
}

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

list.toString();