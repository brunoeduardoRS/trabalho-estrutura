class ArrayList{

    constructor(){
        this.data = [];//incialização do array
    }

    show (separator=', '){ 
        return this.data.join(separator);//retorna o elementos com separador
    }
    
    append(element){ //acrescenta o element ao final da lista
        this.data.push(element);
    }

    insert(position, element){// inseri um valor em um determinada posição
        if(position>-1 && position<=this.size())//Se a posição for maior que -1 e menor que o tamanho final
            this.data.splice(position,0,element);//adiciona o elemento na posição escolhida
    }
    
    removeAt(position){//remove um elemento de uma determinada posição 
        if (position > -1 && position < this.size())//Se a posição for maior que -1 e menor que o tamanho final
            this.data.splice(position,1);//remova o elemento escolhido
    }
    
    remove(element){//remove um  elemento
        let index = this.indexOf(element);//recebimento do valor
        this.removeAt(index);//remove o elemento
    }
    
    indexOf(element){//retorna o indice do elemento desejado
        for (let index = 0; index < this.data.length; index++)//enquanto index for menor que o tamanho faça
            if(element===this.data[index]) //se o elemento for encontrado 
                return index;//exiba o indice 
        return -1;
    }
    
    isEmpty(){
        return this.size()===0;//verifica se está vazio
    }
    
    size(){
        return this.data.length;//retorna o tamanho
    }
    
    getElement(position){//retorna a posição de um elemento selecionado 
        if (position >= 0 && position < this.size())// se  a posição maior igual a 0 ou menor que o tamanho 
            return this.data[position];//retorne a posição
        return null;
    }

    search(value){//descobre se existe o valor selecionado
        return this.data.some((n)=> n===value)
    }
}