class DinamicStack {

    constructor() {
        this.top = null;// topo inicia com vazio
        this.length = 0;// inicializa o tamanho em zero
    }

    push(element) { // adiciona um elemento no topo da pilha
        let node  = new Node(element);
        if (!this.isEmpty()) {
            node.next = this.top; 
        }
        this.top = node;
        this.length++;
    }

    pop() {// remove um elemento no topo da pilha
        if(this.isEmpty()) // verifica se está vazio
            return null; // caso sim retorna null
        let diedNode = this.top; // a variavel recebe o conteudo de top
        this.top = this.top.next;
        diedNode.next = null;
        this.length--;
        return diedNode.content;// retorna o conteudo da variavel
    }

    peek() {
        return this.length-1; // retorna o ultimo elemento anterior ao elemento null
    }

    isEmpty() { //verifica se existe algo na pilha
        return this.top===null; // retorna 
    }

    size() {
        return this.length; // retorna o tamanho da pilha
    }

    clear() { //limpa a pilha
        this.top=null ;// topo recebe vazio
        this.length = 0;//tamanho passa a ser 0
    }

    print(separator = ' - ') {  //mostra toda a pilha com o separador
        let text = "", current = this.top;// variavel local text recebe current que recebe this.top
        while (current!==null) { // enquanto current for diferente de vazio
            text += current.content + separator;// mostra a varialvel local text com seu atual conteudo com o separador
            current = current.next
        }
        return text.substr(0, text.length - separator.length);// retorna a variavel text com o separador menos depois do ultimo elemento da variavel text
    }
}