import Link from 'next/link'
import styles from './CardProdutos.module.css'
import Image from 'next/image';
import ButtonPink from '../buttonPadrao/ButtonPink';

export default function CardProdutos(props: any){
    
  const dados= props.dados

    return(
      <>
       
      {dados.map((info: any) =>{
        return(  
          <div key={info.id}>
          
            <div className={styles.cardsItens}>
            
              <Link href={{
                pathname: 'produtos/unico',
                query: { brand: info.brand , name: info.name }
              }}>  
                <Image width={220} height={200} src={`https:${info.api_featured_image}`} alt='Ofertas Images'></Image>
              </Link>
                  
              <div className={styles.infos}>
        
                  <div className={styles.moverButton}>
                    <Link href={{
                          pathname: 'produtos/unico',
                          query: { brand: info.brand , name: info.name }
                    }}>  
                      <h4>{info.name}</h4>
                    </Link>

                    <div className={styles.marca}>
                      <h6>Marca:</h6> 
                      <p>{info.brand}</p>
                    </div>

                    <p>$ {info.price}</p>

                    {(info.price === '0.0')?

                      <div className={styles.esgotado}>
                        <p>Produtos Indisponível</p>
                      </div>
                      :
                      <Link href={{
                        pathname: 'produtos/unico',
                        query: { brand: info.brand , name: info.name }
                      }}>  
                        <ButtonPink grande text='Comprar'/>
                      </Link>
                    }
                    
                  </div>
                    
                </div>
              
              </div>
          </div>
        )})}
      </>
    )
}

