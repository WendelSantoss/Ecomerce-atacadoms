'use client'
import { useContext, useEffect, useState } from "react"
import { BuscaDoProduto } from "./ContextoPageControlDados"
import { Info } from "@/componentes/interfaces/InfoInterfaceDados"


export default function useBuscaDadosUnicos(brand: string){
    const {makeupsProduto, categoriaProduto, ofertasProdutos}= useContext(BuscaDoProduto)
    const [ dados, setDados]= useState<Info[]>([])
    const [loading, setLoading] = useState<boolean>(true)
    
    useEffect(()=>{

        if(ofertasProdutos){  
            fetch(`http://makeup-api.herokuapp.com/api/v1/products.json?brand=${brand}&${ofertasProdutos}`)
            .then(response => response.json())
            .then(data =>{
                setDados(data)
                setLoading(false)} )
            .catch(error => {
                console.error('Erro na requisição:', error)
                return(
                    <div>
                        <p>Ocorreu um erro ao buscar os dados.</p>
                        <p>Por favor, verifique sua conexão com a internet e tente novamente.</p>
                    </div>
                )
            })
        };

        if(makeupsProduto){    
            fetch(`http://makeup-api.herokuapp.com/api/v1/products.json?brand=${brand}&${makeupsProduto}`)
            .then(response => response.json())
            .then(data =>{
                setDados(data)
                setLoading(false)} )
            .catch(error => {
                console.error('Erro na requisição:', error)
                return(
                    <div>
                        <p>Ocorreu um erro ao buscar os dados.</p>
                        <p>Por favor, verifique sua conexão com a internet e tente novamente.</p>
                    </div>
                )
            })
        };    

        if(categoriaProduto){    
            fetch(`http://makeup-api.herokuapp.com/api/v1/products.json?brand=${brand}&${categoriaProduto}`)
            .then(response => response.json())
            .then(data =>{
                setDados(data)
                setLoading(false)} )
            .catch(error => {
                console.error('Erro na requisição:', error)
                return(
                    <div>
                        <p>Ocorreu um erro ao buscar os dados.</p>
                        <p>Por favor, verifique sua conexão com a internet e tente novamente.</p>
                    </div>
                )
            })
        };
    },[])

    return{
        dados,
        loading
    }

}