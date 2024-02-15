import { useContext, useRef} from 'react'
import styles from './ProdutosPage.module.css'
import CardProdutos from './CardProdutos'
import TopicosProdutos from './TopicosCondicionais'
import { BuscaDoProduto } from './hooksParaBuscardados-context/ContextoPageControlDados'
import useBuscaVariosDados from './hooksParaBuscardados-context/useBuscaVariosDados'
import Loader from '../LoaderPadrao/Loader'
import Pagination from './pagination/Pagination'
import List from './ColunaListaProdutos/ListCategorias'

export default function ProdutosPage(){
    const myRef = useRef<any>('')
    const executeScroll = () => myRef.current.scrollIntoView()  
    // useref sendo utilizado para gerar um scroll na tela toda vez que houver mudança no pagination.

    const {pageAtual, setPageAtual, ofertasProdutos, 
    categoriaProduto, makeupsProduto}= useContext(BuscaDoProduto)
    // dados sendo usados para o controle do paginantion e Informaçoes nos Topicos de produtos.
    
    const {dados, loading} = useBuscaVariosDados();
    // dados vindo do hook para busca de dados e loader para a espera deles.

    const dadosPerPage= 15
    const pages = Math.ceil(dados.length / dadosPerPage)
    const indexInicial= (pageAtual* dadosPerPage);
    const indexFinal= indexInicial + dadosPerPage;
    const dadosAtuais = dados.slice(indexInicial, indexFinal); 
    /*lógica para composição do pagination e quantos elementos serao mostrados em telas perpage.
    Tal logica se mantem aqui pela necssidade de se passar os dados atuais pra o CardProduto.*/
    
    function trocaPage (e: any){
        setPageAtual(Number(e.target.value))
        executeScroll()
    }// função para troca de page e scrolar a tela para o topo.

    const opacidadeLoading = (loading)? styles.opacidade : styles.mostuario;
    //estilização da page enquanto dados carregam.
    return(
      
        <div className={styles.allPage}>
            
            <List/>
            
            <div ref={myRef} className={styles.cardsPaginacao}>
                
                <TopicosProdutos ofertasProdutos={ofertasProdutos} categoriaProduto={categoriaProduto} makeupsProduto={makeupsProduto}/>

                <div className={styles.carregamento}>
                    <Loader loading={loading}/>
                </div>
                
                <div className={opacidadeLoading}>
                    <CardProdutos dados={dadosAtuais}/>      
                </div>

                <Pagination  pageAtual={pageAtual} function={trocaPage} pages={pages}/>
            </div>
        
        </div>
    )
}