import { createContext, useState } from "react";

export const ControlePaginas = createContext({} as any);

export default function ControlPagesProvider(props: any){
    const [contaPage, setContaPage]= useState(true);
    const [endereçoPage, setEndereçoPage]= useState(false);
    const [pagamentoPage, setPagamentoPage]= useState(false);
    const [pedidosPage, setPedidosPage]= useState(false); 
           

    const clickConta= ()=> {
        setContaPage(true);
        setEndereçoPage(false);
        setPagamentoPage(false);
        setPedidosPage(false);   
    }    
    const clickEndereço= ()=> {
        setContaPage(false);
        setEndereçoPage(true);
        setPagamentoPage(false);
        setPedidosPage(false);
    }

    const clickPagamento= ()=> {
        setContaPage(false);
        setEndereçoPage(false);
        setPagamentoPage(true);
        setPedidosPage(false);
    }
    const clickPedidos= ()=> {
        setContaPage(false);
        setEndereçoPage(false);
        setPagamentoPage(false);
        setPedidosPage(true);
    }
    return (
                
        <ControlePaginas.Provider value={{
            contaPage, endereçoPage, pagamentoPage, pedidosPage, clickConta,
            clickEndereço, clickPagamento, clickPedidos
        }}>
    
           {props.children}
        
        </ControlePaginas.Provider>
    
    
    )

}

// context para controlar estados de quais abas seriam exibidas.