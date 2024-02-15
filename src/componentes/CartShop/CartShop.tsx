'use client'
import Image from 'next/image';
import style from './cartShop.module.css'
import useLocalStorage from './hoockCart/useLocalStorage';
import Lixeira from './LixeiraIconSvg';
import Loader from '../LoaderPadrao/Loader';
import { Info } from '../interfaces/InfoInterfaceDados';
import Pagamento from './pagameto';

export default function CartShop(){
    const { value, loading, adicionaQuantity, reduzQuantity, 
    deletarProduct }= useLocalStorage<Info[]>('cart-itens', [])
    //dados e funcoes vindo do hook de controle do local storage.
    
    return(
        <div className={style.allCart}>

            <div className={style.boxProducts}>

                {loading && 
                    <div className={style.centralizarLoading}>
                        <Loader loading={loading}/>
                    </div>
                }                

                {value.length > 0 && value.map((item: Info) => {
                    let subTotal = item.quantity? item.quantity * item.price : 0;
                    let subTotalDuasCasasDecimais= subTotal.toFixed(2);
                    //retorna uma string com duas casas decimais;

                    return (
                        <div key={item.id} className={style.cardProduto}>
                            <Image width={230} height={180} src={`https:${item.api_featured_image}`} alt='img' />
                        
                            <div className={style.dadosNamePrecoQuantity}>
                                <div className={style.nameLixeira}>
                                    <h3>{item.name}</h3>
                                    <div onClick={()=> deletarProduct(item)} className={style.lixeira}>
                                        <Lixeira />
                                    </div>
                                </div>
                                
                                <h3>Valor: ${item.price}</h3>
                                <div className={style.precoQuantity}> 
                                    <button onClick={() => reduzQuantity(item)}>-</button>
                                    <span>{item.quantity}</span>
                                    <button onClick={() => adicionaQuantity(item)}>+</button>
                                    <p>Subtotal: ${subTotalDuasCasasDecimais}</p>
                                    
                                </div>
                                
                            </div>
                        </div>
                )})}
                
                {value.length === 0 && loading == false &&
                    <div className={style.cartVazio}>
                        <h2>O Carrinho está vazio, procure ofertas e produtos na abas Produtos.</h2>
                    </div>
                }

            </div>
        
            <Pagamento dados={value}/>
        
        </div>
    );
};