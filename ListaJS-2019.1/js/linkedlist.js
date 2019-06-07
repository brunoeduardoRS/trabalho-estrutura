class LinkedList {

    constructor() {
        this.head = null;//inicialização do head
        this.length = 0;//inicilização do tamanho
    }

    isEmpty() {//verifica se está vazio
        return this.head === null;//retorna o head vazio
    }

    append(element) {//acrescenta o valor 
        let node = new Node(element),//iniciar a variavel que irá receber o valor
            current = this.head;//current receberá o valor do head
        if (this.isEmpty()) {//se vazio faça
            this.head = node;//o valor do head se torna o valor do Node
        } else {
            while (current.next)
                current = current.next;//current  recebe o valor do proximo que seria current.next ( null)
            current.next = node;//current.next que era vazio se torna o valor de Node 
        }
        this.length++;//acrescenta o +1 ao tamanho
    }

    show(separator = ", ") {//exibição dos valores com separador
        let current = this.head,//inicia a variavel 
            output = '';
        if (current != null) {//se currrent for diferente de null
            output += current.content;//output + current.content é acrescentado 
            while (current.next) {
                current = current.next;//currente recebe o valor de current.next 
                output += separator + current.content; // output concatena  com separator e current.content
            }
        }
        return output;//no final retorna output
    }

    insert(position, element) {//inserir valor em um posição
        if (position > -1 && position <= this.size()) {// se a posição for maior que -1 e menor que o tamanho faça
            let node = new Node(element),//inicia  a variavél 
                current = this.head,// current recebe o valor de head
                previous = null,//previous se torna null
                index=0;//index inicia com 0
            if (position==0) {//se a posição for 0 faça
                node.next = this.head;// Node.next recebe o head(null)
                this.head = node;//o head que é null recebe o valor de null
            } else {
                while(index<position){// enquanto index for  menor que a posição
                    index++;//index recebe +1
                    previous=current;//previous que é null recebe o valor de current
                    current=current.next;//current recebe o valor de current.next(null)
                }
                node.next=current;//Node.next(null) 
                previous.next=node;//previous.next recebe Node
            }
            this.length++;//tamanho recebe +1
            return true;
        }
        return false;
    }

    removeAt(position) {//remove o valor de uma pisição
        if (position > -1 && position < this.size()) {//se a posição for maior que -1 e menor que tamanho
            let current = this.head,//inicia a variavel  recebendo head
                previous = null,
                index = 0;
            if(position===0){//se posição for igual a 0
                this.head = current.next;//head recebe currente.next (null)
            }else{
                while (index < position) {
                    index++;
                    previous = current;
                    current = current.next;
                }
                previous.next = current.next;
            }
            current.next = null
            this.length--;//tamanho recebe -1
            return current.content;
        }
        return null;
    }

    remove(element) {//remove um elemento
       let index = this.indexOf(element);//inicia a variavel recebendo o elemento 
       return this.removeAt(index);//retorna o elemento removido 
    }

    indexOf(element) {//busca o indice do elemento 
        let current = this.head,//inicia a variavel 
            index = 0;
        while(current!==null){//enquanto  current for diferent de null
            if(current.content===element) {//current.content recebe o valor do elemento
                return index;//retorna o index de onde o elemento está
            }
            index++//index recebe index ++ (+1)
            current = current.next;//current recebe current.next (null)
        }
        return -1;
    }


    size() {
        return this.length;//retorna o tamanho 
    }

    getElement(position) {//pega um valor de uma determinada posição
        if(position<0 && position>=this.length)//se essa posição for menor que 0 e maior que o largura (tamanho)
            return null;//retorna null
        let current = this.head,//inicia outra variavel 
            index = 0;
        while (current !== null) {//enquanto current for diferente de null
            if (index === position) {//se index for igual a posição 
                return current.content;//retorne o valor de current.content
            }
            index++
            current = current.next;
        }
    }

    search(value) {
        return this.indexOf(value)>=0;//retorna um valor de um index
    }

}