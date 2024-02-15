'use client'
import {createContext, useState} from 'react'

export const BuscaDoProduto = createContext({} as any);

export default function ControlPageProductProvider(props: any){
    //estados para armazenar a escolha do usuario quais produtos ele deseja.
    const [makeupsProduto, setMakeupsProduto]= useState('');
    const [categoriaProduto, setCategoriaProduto]= useState('');
    const [ ofertasProdutos, setOfertasProdutos]= useState('price_less_than=10');
    const [ pageAtual, setPageAtual] = useState(0)
    
    // funcoes para setar produtos do tipo makeups.
    function blush(){
        setMakeupsProduto('product_type=blush')
        setCategoriaProduto('')
        setOfertasProdutos('')
        setPageAtual(0)
    }

    function eyeliner(){
        setMakeupsProduto('product_type=eyeliner')
        setCategoriaProduto('')
        setOfertasProdutos('')
        setPageAtual(0)
    }

    function eyeshadow(){
        setMakeupsProduto('product_type=eyeshadow')
        setCategoriaProduto('')
        setOfertasProdutos('')
        setPageAtual(0)
    }

    function lip_liner(){
        setMakeupsProduto('product_type=lip_liner')
        setCategoriaProduto('')
        setOfertasProdutos('')
        setPageAtual(0)
    }

    function lipstick(){
        setMakeupsProduto('product_type=lipstick')
        setCategoriaProduto('')
        setOfertasProdutos('')
        setPageAtual(0)
    }

    function mascara(){
        setMakeupsProduto('product_type=mascara')
        setCategoriaProduto('')
        setOfertasProdutos('')
        setPageAtual(0)
    }

    function nail_polish(){
        setMakeupsProduto('product_type=nail_polish')
        setCategoriaProduto('')
        setOfertasProdutos('')
        setPageAtual(0)
    }
    //funcoes para setar produtos de determinados publicos.
    function natural(){
        setCategoriaProduto('product_tags=Natural')
        setMakeupsProduto('')
        setOfertasProdutos('')
        setPageAtual(0)
    }
    function organico(){
        setCategoriaProduto('product_tags=Organic')
        setMakeupsProduto('')
        setOfertasProdutos('')
        setPageAtual(0)
    }
    function vegan(){
        setCategoriaProduto('product_tags=Vegan')
        setMakeupsProduto('')
        setOfertasProdutos('')
        setPageAtual(0)
    }
    // funcoes para setar produtos em ofertas com preçoes determinados.
    function abaixo10(){
        setOfertasProdutos('price_less_than=10')
        setMakeupsProduto('')
        setCategoriaProduto('')
        setPageAtual(0)
    }
    function abaixo20(){
        setOfertasProdutos('price_less_than=20')
        setMakeupsProduto('')
        setCategoriaProduto('')
        setPageAtual(0)
    }
    function acima20(){
        setOfertasProdutos('price_greater_than=20')
        setMakeupsProduto('')
        setCategoriaProduto('')
        setPageAtual(0)
    }

    return(
        <BuscaDoProduto.Provider value={{makeupsProduto, categoriaProduto, ofertasProdutos, pageAtual,
            setCategoriaProduto, setOfertasProdutos, setMakeupsProduto, setPageAtual, blush, eyeliner, eyeshadow, 
            lip_liner, lipstick, mascara, nail_polish, natural, organico, vegan, abaixo10, 
            abaixo20, acima20
        }}>

            {props.children}

        </BuscaDoProduto.Provider>
    )
}
/*se fex necessário o context para poder compartilhar o estado para busca de dados com alguns componentes
na home page, poderiamos realizar o controle via path de url, porem aproveitei a oportunidade para exercitar
essa feature do next.js*/