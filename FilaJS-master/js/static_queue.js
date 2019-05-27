class StaticQueue{
    constructor(){
        this.data = []; //inicializando array, sem definição de tamanho
    }
    enqueue(element) { //adicionando elemento
        this.data.push(element); //adiciona elemento no array
    }
    dequeue(){ //remove elemento
        return this.data.shift(); //retorna elemento excluído
    }
    front() { //primeiro elemento da fila
        return this.data[0]; //retorna primeiro elemento do array
    }
    back(){ //último elemento da fila
        return this.data[this.data.length-1];  //retorna oque estiver na ultima posição do array
    }
    isEmpty() { //verifica se a fila está vazia
        return (this.data.length===0); //verifica e retorna se tamanho do array for igual a 0
    }
    size() {    //tamanho da fila
        return this.data.length;  //retorna o tamanho do array
    }
    clear() {   //limpa fila
        this.data = []; //limpa array
    }
    print(separator=" - ") {    //mostra toda a fila com o separador
        return this.data.join(separator);   //retorna o que tem no array com o separador
    }
}