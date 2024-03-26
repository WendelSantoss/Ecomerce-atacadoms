import Image from 'next/image'
import styles from './productunico.module.css'
import Cart from '../../../../public/cart.png'
import useBuscaDadosUnicos from '../hooksParaBuscardados-context/useBuscaDadosUnicos'
import useLocalStorage from '@/componentes/CartShop/hoockCart/useLocalStorage'
import ButtonPink from '@/componentes/buttonPadrao/ButtonPink'
import Loader from '@/componentes/LoaderPadrao/Loader'
import List from '../ColunaListaProdutos/ListCategorias'
import Link from 'next/link'

interface dadosBusca{
    brand?: string
    name?: string
}

export default function ProductUnico(props: dadosBusca){
    const {brand, name}= props;

    const brandVerificado = brand? brand : ''
    const {dados, loading}= useBuscaDadosUnicos(brandVerificado);

    const dadoFiltrado = dados.find(info => { 
        return info.name === name ; 
    });//filtragem do fetch para selecionar o produto clicado.

    const {atualizarLocalStorage}= useLocalStorage('cart-itens', []) 
    const adicionaItenCart= ()=> {
        if (dadoFiltrado && name) {
          atualizarLocalStorage(dadoFiltrado, name);
        }
      }; // acesso a função de atualizar o localStorage adicionando itens.

    return(
       
        <div className={styles.productUnico}>
        <List/>
            
        <div className={styles.conteudo}>

            <h3>Produto</h3>

            <div className={styles.dados}>
                <div className={styles.boxImg}>
                    {(dadoFiltrado)?
                    <Image width={230} height={250} src={`https:${dadoFiltrado.api_featured_image}`}
                    alt='img'></Image>
                    :
                        <Loader loading={loading} fontsize={12}/>
                    }

                    {(dadoFiltrado == null && loading === false)?
                        <h5>Erro ao carregar dados</h5>
                    :
                        <></>
                    }
                </div>

                {(dadoFiltrado?
                    <div className={styles.descricao}>
                        <h1 style={{fontSize: 26}}>{dadoFiltrado?.name}</h1>
                        <p>{dadoFiltrado?.description}</p>
                        <p style={{fontWeight: 'bold', fontSize: 16, marginTop: 5}}>
                            Marca: {dadoFiltrado?.brand }
                        </p>
                      
                      <div className={styles.botaoPrecoCart}>
                          <div className={styles.precoCart}>
                                <h2>${dadoFiltrado?.price}</h2>
                                <Image onClick={adicionaItenCart} src={Cart} alt='carregando'></Image>
                          </div>
                        
                          <Link onClick={adicionaItenCart} href='/carrinho'>
                            <ButtonPink medio text='Comprar'></ButtonPink>
                          </Link>
                          
                        </div>
                    </div>
                    :
                    <div style={{justifyContent: 'center'}} className={styles.loaderErroCentral}>
                        <Loader loading={loading}/>
                    </div>
                    )}

                    {(dadoFiltrado == null && loading === false)?
                        <div className={styles.loaderErroCentral}>
                            <h5>Erro ao carregar dados</h5>
                        </div>
                        
                        :
                        <></>
                    }
            </div>   

        </div>

    </div>
 
    )
}