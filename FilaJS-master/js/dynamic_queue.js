class DynamicQueue{
    constructor(){
        this.head = null;  //iniciada variável cabeça como vazio; O começo. 
        this.tail = null;  //iniciada variável calda como vazio; O fim.
        this.length = 0; //tamanho inicial 0;
    }

    enqueue(element) { //adicionando elemento
        let node = new Node(element); //criada variável local chamada node, sendo passada como parametro o elemento
        if(this.isEmpty()){ //se não existir nenhum valor então a cabeça receberá o elemento
            this.head=node; //cabeça recebe oque tem na variável node
        }else{
            this.tail.next = node; //se existir algum elemento na fila, então cauda aponte para o próximo elemento
        }
        this.tail = node; //cauda recebe o elemento 
        this.length++; //aumente o tamanho da fila
    }

    dequeue(){ ///remove o elemento
        let deadElement = null; //iniada variável local como vazia;
        if(this.length===1){ //verifica se o tamanho é igual a 1
            deadElement = this.tail.content;    //pegue o conteúdo da cauda e adicione na variável deadElement
            this.clear();   //chama o método limpar;
        }else if(this.length>1){ //se o tamanho for maior que 1 faça
            let deadNode = this.head;   //variável local criada que recebe a cabeça
            this.head = this.head.next; //aponta para o próximo elemento
            deadNode.next = null; //variável próxima não aponta pra ninguém
            deadElement = deadNode.content; //variável deadElement recebe o conteúdo que tem em deadNode
            this.length--; //diminui o tamanho da fila
        }
        return deadElement; //retorna o elemento apagado
        }
    front() { //primeiro elemento
        return this.head.content; //retorna o conteúdo da cabeça da fila
    }
    back() {    //ultimo elemento da fila
        return this.tail.content; //retorna o conteúdo da cauda;
    }
    isEmpty() { //verifica se existe alguma coisa na fila;
        return this.tail===null; //verifica se a cauda é vazia;
    }
    size() {    //verifica o tamanho da fila;
        return this.length; //retorna o tamanho da fila
    }
    clear() {   //método para limpar
        this.tail= this.head=null;  //cabeça recebe vazio, e a cauda recebe a cabeça
        this.length=0;  //tamanho da fila passa a ser 0 após apagar dados
    }
    print(separator=" - ") { //mostra o elemento mostrando um separador passado no método
        let output = ""; //variável local iniciada como string;
        for (let node = this.head; node!=null; node = node.next) {  
            output+=node.content+separator; 
        }
        return output.substr(0, output.length-separator.length); //retorna todos os elementos na tabela com separador, retirando substring no final;
    }
}