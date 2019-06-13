class BinaryTree{
    // inicializa a raiz como nula
    constructor(){
        this.root = null;
    }

    //insere o elemento da arvores
    insert(element){
        this.root = this.insertNode(this.root, element);
    }
    insertNode(rootNode, value){
        if (rootNode == null) {
            return new Node(value);
            // se rootNode igual a null retorna
            // o valor para dentro raiz da arvore
        }
        if(value>rootNode.content){
            rootNode.right = this.insertNode(rootNode.right, value);
            //se o valor for maior que o conteudo do nó raiz 
            //insere o valor no lado direito em relação a raiz
        }else{
            rootNode.left = this.insertNode(rootNode.left, value);
            //caso menor o valor é inserido na esquerda em relação a raiz
        }
        return rootNode;
        //rertona rootNode
    }

    //retorna true se o valor já existe na arvore
    search(value) {
        return this.searchNode(this.root, value);
    }
    searchNode(rootNode, value){
        if (rootNode == null) return false;
        //Valor de rootNode igual a vazio retorna falso
        if (rootNode.content == value) return true;
        //se o conteudo de rootNode tiver algum valor retorna verdadeiro
        if (value > rootNode.content)
            return this.searchNode(rootNode.right, value);
            //se o valor for maio que o conteudo de rootNode
            //retorna o valor da direita da arvore
        else
            return this.searchNode(rootNode.left, value);
            //se for manor retorna o valor de esquerda da arvore
    }


    //executa a função callback para cada nó, em ordem
    inOrderTraverse(callback){
        this.inOrder(this.root, callback);
    }
    inOrder(rootNode, callback) {
        if (rootNode == null) return;
        //rootNode igual a null returna nada
        this.inOrder(rootNode.left, callback);
        //mostrar o lemento da raiz para a direita
        callback(rootNode.content);
        //mostra o elemento do nó da raiz
        this.inOrder(rootNode.right, callback);
        //mostra o elemento da esquerda
    }

    //executa a função callback para cada nó, em pré-ordem
    preOrderTraverse(callback){
        this.preOrder(this.root, callback);
    }
    preOrder(rootNode, callback) {
        if (rootNode == null) return;
        //rootNode igual a null returna nada
        callback(rootNode.content);
        //mostra o elemento do nó da raiz
        this.preOrder(rootNode.left, callback);
        //mostrar o lemento da raiz para a direita
        this.preOrder(rootNode.right, callback);
        //mostra o elemento da esquerda
    }
    
    //executa a função callback para cada nó, em pós-ordem
    postOrderTraverse(callback) {
            this.posOrder(this.root, callback);
    }
    posOrder(rootNode, callback) {
        if (rootNode == null) return;
        //rootNode igual a null returna nada
        this.posOrder(rootNode.left, callback);
        //mostrar o lemento da raiz para a direita
        this.posOrder(rootNode.right, callback);
        //mostra o elemento da esquerda
        callback(rootNode.content);
        //mostra o elemento do nó da raiz
    }
    
    //remove um elemento existente na arvore o retorna
    remove(value){
        this.root = this.removeNode(this.root, value);
    }
    removeNode(rootNode, value){
        if(rootNode == null) 
            return null;
            //valor de rootNode igual a null retorna null
        if(value == rootNode.content){
            if(rootNode.left === null && rootNode.right === null){// é uma folha - Grau 0
                rootNode = null;
                //se rootNode.left igual a null e rootNode.right igual a null
                //o nó raiz recebe nada
            } else if (rootNode.right == null) { // tem filho na esqueda - Grau 1
                rootNode = rootNode.left;
                //mais se o conteudo da direita do nó raiz for igual a null
                //O nó raiz recebe nó raiz da esquerda
            } else if (rootNode.left == null) { // só tem filho na direita - Grau 1
                rootNode = rootNode.right;
                //mais se o conteudo da esquerda do nó raiz for igual a null
                //O nó raiz recebe nó raiz da direita
            } else{ // tem filho nos dois lados - Grau 2
                let i = rootNode.right;
                while(i.left != null){
                    i = i.left;
                    //enquanto o nó for diferente de null
                    //i continua recebendo i.left
                }
                i.left = rootNode.left;
                //i.left recebe rootNode.left
                rootNode = rootNode.right;
                //rootNode recebe rootNode.right
            }
        }else if(value>rootNode.content){
            rootNode.right = this.removeNode(rootNode.right, value);
            //valor maior que rootNode.content remover o valor de right
        }else{
            rootNode.left = this.removeNode(rootNode.left, value);
            //remove o valor de left
        }
        return rootNode;
        //retorna rootNode
    }

    //exibe a altura da arvore
    heigth(){
        return this.heigthNode(this.root);
    }
    heigthNode(node){
        if(node == null)
            return -1;
            //se node igual a null retorna -1
        let leftHeigth = this.heigthNode(node.left),
            rightHeigth = this.heigthNode(node.right);
            //altura da esquerda recebe nó da esquerda(node.left)
            //altura da direita recebe nó da direita(node.rigth)
        if(leftHeigth > rightHeigth){
            return 1 + leftHeigth;
            //se altura da esquerda maior que altura da direita 
            //retorna 1 + altura da esquerda
        }else{
            return 1 + rightHeigth;
            //se não retorna 1 + altura da direita
        }  
    }

    // informa quantos nós existem na arvore
    size(){
        return this.sumNodes(this.root);
    }
    sumNodes(node){
        if(node == null) 
            return 0;
        return 1 + this.sumNodes(node.left)+this.sumNodes(node.right);
        //se nó igual a null retorna 0
        //retorna 1 + Nó da esquerda + nó da direita 
    }

    //exibe o menor valor da arvore
    min() {
        let node = this.root;
        //variavel local node recebe root
        if (node == null) return null;//se node for igual a vazio retorna vazio
        //equnato o elemento do nó raiz da esquerda for diferente de null
        // node recebe o elemento da esquerda 
        //retorna o conteudo do nó
        while (node.left != null)
            node = node.left;
            //enquanto nó da esquerda for diferente de null
            //o nó recebe node.left(nó da esquerda)
        return node.content;
        //retorna o conteudo do nó
    }

    //exibe o maior valor da arvore
    max() {
        let node = this.root;
        //variavel local node recebe root
        if (node == null) return null;
        //se node for igual a null retorna null
        while (node.right != null)
            node = node.right;
        return node.content;
        //equnato o elemento do nó raiz da direita for diferente de null
        // node recebe o elemento da direita
        //retorna o conteudo do nó
    }
}