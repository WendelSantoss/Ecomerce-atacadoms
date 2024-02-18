import { Info } from "@/componentes/interfaces/InfoInterfaceDados";
import { useState, useEffect } from "react";

export default function useLocalStorage<T>(item: string, valorInicial : T){
    const [value, setValue] = useState<T>(valorInicial);
    const [loading, setLoading] = useState<boolean>(true)
    // de informe de carregamento no resgate de dados .

    useEffect(() => {
        if (typeof window != 'undefined') {
            let storedItem = localStorage.getItem(item);
            if (storedItem) {
                setValue(JSON.parse(storedItem)as T);
            }
            setLoading(false)
        }
    }, [item]);//resgate de dados do localStorage para renderizar no componente cart e na page Cart

    const atualizarLocalStorage = (dados: Info, name: string)=>{
        let cartItens= localStorage.getItem('cart-itens');
        let modeloDadoStorage= [{...dados, id: dados?.id , quantity: 1}]

        if(cartItens){
            let cartItensArray= JSON.parse(cartItens)
            let itemExisteNoCartIdx= cartItensArray.findIndex((item: { name: string; }) => item.name === dados?.name)
            if(itemExisteNoCartIdx !== -1){
                cartItensArray[itemExisteNoCartIdx].quantity += 1;
            }else{
                cartItensArray.push({...dados, name: name, quantity: 1})
            }

            localStorage.setItem('cart-itens', JSON.stringify(cartItensArray))
            setValue(cartItensArray as T); 
            // Atualiza a variável 'value' para ocorrer nova renderização.
        }else{
            localStorage.setItem('cart-itens', JSON.stringify(modeloDadoStorage))
            setValue(modeloDadoStorage as T); 
            // Atualiza a variável 'value' para ocorrer nova renderização.
        }
    };// função para atulizar localstorage adicionando mais um item no cart via produtos.
    
    const adicionaQuantity= (dados: Info)=>{
        let cartItens= localStorage.getItem('cart-itens');
        if(cartItens){
            let cartItensArray= JSON.parse(cartItens)
            let dadoFiltrado= cartItensArray.find((item:{name: string})=> item.name === dados.name)
            if(dadoFiltrado){
                dadoFiltrado.quantity += 1;
                localStorage.setItem('cart-itens', JSON.stringify(cartItensArray)); 
                setValue(cartItensArray as T);  
            } // Atualiza o localStorage com a quantidade +1.
    }}

    const reduzQuantity= (dados: Info)=>{
        let cartItens= localStorage.getItem('cart-itens');
        if(cartItens){
            let cartItensArray= JSON.parse(cartItens)
            let dadoFiltrado= cartItensArray.find((item:{name: string})=> item.name === dados.name)
            if(dadoFiltrado){
                if(dadoFiltrado.quantity === 1){
                    deletarProduct(dados)
                }//quando chegar no valor 1 de qntd se diminuir mais, excluirá o pedido.
                else {dadoFiltrado.quantity -= 1;
                localStorage.setItem('cart-itens', JSON.stringify(cartItensArray));
                setValue(cartItensArray as T);}  
            } // Atualiza o localStorage com a quantidade -1.
          
    }}

    const deletarProduct= (dados: Info)=>{
        let cartItens= localStorage.getItem('cart-itens');
        if(cartItens){
            let cartItensArray= JSON.parse(cartItens)
            let novoArray = cartItensArray.filter((item: Info) => item.name !== dados.name);
            localStorage.setItem('cart-itens', JSON.stringify(novoArray));
            setValue(novoArray as T);
            // Atualiza o localStorage deletando o item clicado atraves da lixeira.
        };
    };

    return {
        value,
        loading,
        atualizarLocalStorage,
        adicionaQuantity,
        reduzQuantity,
        deletarProduct

    };
}