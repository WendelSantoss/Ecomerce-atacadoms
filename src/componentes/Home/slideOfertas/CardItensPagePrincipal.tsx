import Image from "next/image";
import Link from "next/link";
import style from './ofertasSwiperCards.module.css';
import { useContext } from "react";
import { BuscaDoProduto } from "@/componentes/Produtos/hooksParaBuscardados-context/ContextoPageControlDados";
import ButtonPink from "@/componentes/buttonPadrao/ButtonPink";

export default function CardItens(props: any){
    const info = props.dados //dados vindo do fetch realizado em ofertas dps do map
    const categoriaDados = props.categoriaDados // categoria dos dados que o map esta mapeando.
    
    const {setCategoriaProduto, setOfertasProdutos, setMakeupsProduto}= useContext(BuscaDoProduto)
    // preciso chamar o useContext para setar o tipo de dados para ir pra page produtos.

    function selecionaTipoProduto(){
        if(categoriaDados === 'product_tags=vegan'){
            setCategoriaProduto('product_tags=vegan')
            setOfertasProdutos('')
            setMakeupsProduto('');
        }else{
            setOfertasProdutos('price_less_than=10')
            setCategoriaProduto('')
            setMakeupsProduto('')
        }
    }// condicional para setar quais dados irei buscar com meu hoock busca dados na pasta produtos.

    return(

        <div className={style.cardHome}>
            
            <Link onClick={selecionaTipoProduto} href={{
              pathname: 'produtos/unico',
              query: { brand: info.brand , name: info.name }
            }}> <Image width={220} height={200} src={`https:${info.api_featured_image}`} alt='Ofertas Images'></Image>
            </Link>
            
                <div className={style.infos}>
                        <Link onClick={selecionaTipoProduto} href={{
                          pathname: 'produtos/unico',
                          query: { brand: info.brand , name: info.name }
                        }}>  <h4>{info.name}</h4>
                        </Link>
                    <div className={style.marca}>
                        <h6>Marca:</h6> 
                        <p>{info.brand}</p>
                    </div>
                    <p>$ {info.price}</p>
                    {(info.price === '0.0')?
                        <div className={style.esgotado}>
                          <p>Produtos Indisponível</p>
                        </div>
                        :

                        <Link onClick={selecionaTipoProduto} href={{
                          pathname: 'produtos/unico',
                          query: { brand: info.brand , name: info.name }
                        }}>  
                          <ButtonPink grande text='Comprar'/>
                        </Link>
                      }
                </div>
                
            </div>
     
    )
}