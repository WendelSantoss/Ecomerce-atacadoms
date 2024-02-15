import styles from './pagination.module.css'

export default function Pagination(props: any){

    const pages = props.pages
    const setPageAtual= props.function 
    const pageAtual = props.pageAtual
    
  
    const R = -20   // variavel para ser acessada e transformada em reticências. 
    const L = -50   // variavel para ser acessada e transformada em reticências. 
    
    const modeloPagination= ( pages: number, pageAtual: number)=>{
        const atual = Math.min(pageAtual, pages);
        const totalPages = pages
    
        if(totalPages <= 7){
         
            return Array.from({length: totalPages}).map((x, i)=> i);
        }
        
        if(atual < 2){
            
            return [0, 1, 2, L, totalPages -2, totalPages - 1 ]
        }
        
        if(atual === 2){

            return [0, 1, 2, 3, L,totalPages -2, totalPages -1]
        }

        if(atual > totalPages - 3 ){

            return [0, 1, L,totalPages -3, totalPages -2, totalPages -1 ]
        }

        if(atual === totalPages - 3 ){
        
            return [0, 1, L,totalPages -4, totalPages -3 , totalPages -2, totalPages -1 ]
        }

        return [0, L, atual -1, atual, atual +1, R, totalPages -1 ]
        /*Total de pages nos finais dos arrays estao com menos 1, 
        pois a contagem do index começa no 0, para que n tenha um elemento a mais no array
        alterando o valor total de pages. */

    } //funçao modelo para renderização das paginas
 
    const pagesRenderizar = modeloPagination(pages, pageAtual);
    // elemento para rodar o map
    return(
        <div className={styles.pagination}>
            <ul>
                {pagesRenderizar.map((page)=>{
                    const selecionado = pageAtual == page? styles.selecionado : styles.normal;
                    const reticencias =  page === L || page === R
                    //logica para renderizar L e R como ...
                    if(reticencias){
                        return (
                               <span key={page}>...</span>    
                        )
                    }
                    return  <li 
                            key={page}
                            className={selecionado}
                            value={page} 
                            onClick={setPageAtual}> 
                                {page + 1} 
                            </li>
                    //page sendo adicionado +1 apenas para contagem visual começar a partir do 1
                })}
            </ul>
        </div>
    )
}
