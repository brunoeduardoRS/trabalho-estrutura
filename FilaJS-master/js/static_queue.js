class StaticQueue{
    constructor(){
        this.data = [];
    }
    enqueue(element) {
        this.data.push(element);
    }
    dequeue(){
        return this.data.shift();
    }
    front() {
        return this.data[0];
    }
    back(){
        return this.data[this.data.length-1];
    }
    isEmpty() {
        return (this.data.length===0);
    }
    size() {
        return this.data.length;
    }
    clear() {
        this.data = [];
    }
    print(separator=" - ") {
        return this.data.join(separator);
    }
}