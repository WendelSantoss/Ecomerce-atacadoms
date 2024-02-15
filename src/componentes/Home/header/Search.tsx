'use client'
import { useEffect, useRef, useState } from "react"
import useSearch from "./hoockSearch/useSearch"
import style from './Search.module.css'
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import Pagination from "@/componentes/Produtos/pagination/Pagination"
import Loader from "@/componentes/LoaderPadrao/Loader"

export default function Search(){
    const parahms= useSearchParams();
    const busca = parahms.get('busca');
    // trazendo a busca do cliente por parametros da url.

    const {DadosFiltrados, setPesquisa, loading} = useSearch()
    //constante e função do hook para busca do item pesquisado.

    useEffect(()=>{
        (busca && setPesquisa(busca))

    },[parahms])// setando o item buscado para o hook filtrar.

    const myRef = useRef<any>('')
    const executeScroll = () => myRef.current.scrollIntoView()  
    // useref sendo utilizado para gerar um scroll na tela toda vez que houver mudança no pagination.


    const [pageAtual, setPageAtual]= useState(0)

    const dadosPerPage= 10
    const pages = Math.ceil(DadosFiltrados.length / dadosPerPage)
    const indexInicial= (pageAtual* dadosPerPage);
    const indexFinal= indexInicial + dadosPerPage;
    const dadosAtuais = DadosFiltrados.slice(indexInicial, indexFinal); 
    /*lógica para composição do pagination e quantos elementos serao mostrados em telas perpage.
    Tal logica se mantem aqui pela necssidade de se passar os dados atuais para fazer o Map.*/
    
    function trocaPagePagination (e: any){
        setPageAtual(Number(e.target.value))
        executeScroll()
    }// função para troca de page e scrolar a tela para o topo.

    return(
        <>
        <div ref={myRef} className={style.resultadosPesquisas}>
            <h3>Resultado da pesquisa</h3>

            <Loader loading={loading} />
            {DadosFiltrados.length <= 0 && loading== false &&
                <h4>Não foi encontrado nenhum dado relacionado a "{busca}".</h4>
            }
            {dadosAtuais.map((item)=>{
                return(
                    <div className={style.produtosFiltrados} key={item.id}>

                        <Link href={{
                            pathname: 'produtos/unico',
                            query: { brand: item.brand , name: item.name }
                        }}> 
                            <Image width={130} height={130} src={`https:${item.api_featured_image}`} alt='Ofertas Images'></Image>
                        </Link>
                        
                        <div className={style.telaDesktop}>
                            <Link href={{
                                pathname: 'produtos/unico',
                                query: { brand: item.brand , name: item.name }
                            }}> 
                                <div className={style.info}>
                                    <h5>{item.name}</h5>
                                    <h6>Marca: {item.brand}</h6>
                                    <p>{item.description}</p>
                                </div> 
                            </Link>
                        </div>

                        <div className={style.telaSmartphone}>
                            <Link href={{
                                pathname: 'produtos/unico',
                                query: { brand: item.brand , name: item.name }
                            }}> 
                                <div className={style.info}>
                                    <h5>{item.name}</h5>
                                    <h6>Marca: {item.brand}</h6>
                                    <h4>Clique para saber mais.</h4>
                                </div> 
                            </Link>
                        </div>

               
                                                  
                    </div>
                )
            })}
        </div>

        <Pagination  pageAtual={pageAtual} function={trocaPagePagination} pages={pages}/>
       
        </>
    )
}