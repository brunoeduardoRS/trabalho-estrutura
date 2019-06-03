class StaticStack {

    constructor(){
        this.data = [];//incializa o array
    }
    
    push (element) {
        this.data.push(element); //insere um elemento novo no alto da pilha.
    }

    pop() {
        return this.data.pop(); // retira o elemento superior da pilha 
    }

    peek() {
        return this.data.length -1 ; //retorna o elemento do topo da lista -1
    }

    isEmpty() { //verifica se existe algo na pilha
        return (this.size()===0); //retorna se a pilha está vazia
    }

    size() {
        return this.data.length;//retorna o tamanho da pilha
    }

    clear() { //limpa a pilha
        this.data = [];//limpa o array
    }
    
    print(separator=' - ') {//mostra toda a pilha com o separador
        /*  Another implementation
        if(this.isEmpty()) return "";
        let text = this.data[this.peek()];
        for (let index = (this.peek()-1); index >= 0; index--) {
            text+=separator+this.data[index];
        }
        return text; 
        */
        let text = ""; // cria uma variavel local
        for (let index = (this.data.length - 1); index >= 0; index--) { // cria uma variavel local recebendo o tamanho do array menos 1, enquanto o valor de index for maior que zero será decrementado -1
            text += this.data[index] + separator;// variavel text recebe ela mesma e a variavel index com o separador 
        }
        return text.substr(0, text.length - separator.length); // retorna a variavel text com o separador menos depois do ultimo elemento da variavel text
    }
}