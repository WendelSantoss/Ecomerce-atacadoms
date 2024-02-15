'use client'
import { useContext, useEffect, useState } from "react"
import { BuscaDoProduto } from "./ContextoPageControlDados"
import { Info } from "@/componentes/interfaces/InfoInterfaceDados"


export default function useBuscaVariosDados(){
    const {makeupsProduto, categoriaProduto, ofertasProdutos}= useContext(BuscaDoProduto)
    // usecontext sendo utilizado para controlar que tipo de busca e produtos estao sendo requisitados.
    const [ dados, setDados]= useState<Info[]>([])
    const [loading, setLoading] = useState<boolean>(true)
    
    useEffect(()=>{
        setLoading(true)
        

        if(ofertasProdutos){    
            fetch(`http://makeup-api.herokuapp.com/api/v1/products.json?${ofertasProdutos}`)
            .then(response => response.json())
            .then(data => {
                setDados(data) 
                setLoading(false)})
            .catch(error => {
                console.error('Erro na requisição:', error)
                return(
                    <div>
                        <p>Ocorreu um erro ao buscar os dados.</p>
                        <p>Por favor, verifique sua conexão com a internet e tente novamente.</p>
                    </div>
                )
            })
        }
    
        if(categoriaProduto){
            fetch(`http://makeup-api.herokuapp.com/api/v1/products.json?${categoriaProduto}`)
            .then(response => response.json())
            .then(data => {
                setDados(data) 
                setLoading(false)})
            .catch(error => {
                console.error('Erro na requisição:', error)
                return(
                    <div>
                        <p>Ocorreu um erro ao buscar os dados.</p>
                        <p>Por favor, verifique sua conexão com a internet e tente novamente.</p>
                    </div>
                )
            })
        }

        if(makeupsProduto){
            fetch(`http://makeup-api.herokuapp.com/api/v1/products.json?${makeupsProduto}`)
            .then(response => response.json())
            .then(data => {
                setDados(data) 
                setLoading(false)})
            .catch(error => {
                console.error('Erro na requisição:', error)
                return(
                    <div>
                        <p>Ocorreu um erro ao buscar os dados.</p>
                        <p>Por favor, verifique sua conexão com a internet e tente novamente.</p>
                    </div>
                )
            })
        }
    // useEfect para dar o fetch nos dados e alterar estados de loading e dados.
    }, [makeupsProduto, categoriaProduto, ofertasProdutos])

    return{
        dados,
        loading
    }

}