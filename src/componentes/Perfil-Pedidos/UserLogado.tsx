'use cliente'
import styles from './userLogado.module.css';
import AbaEndereço from './endereço/abaEndereço';
import AbaPagamento from './pagamentos/abaPagamentos';
import AbaPedidos from './pedidos/abaPedidos';
import DadosUsuario from './conta/usuarioDados';
import Image from 'next/image';
import Arrow from '../../../public/arrowIcon.png'
import {useState, useContext} from "react"
import Link from 'next/link';
import { ControlePaginas } from './controlDeAbasContext';
import { UserLoginLogout } from '../LoginAuthContext/controlLogin';


export default function Logado(){
    const {user, logout} = useContext(UserLoginLogout)

    const{contaPage, endereçoPage, pagamentoPage, pedidosPage, clickConta,
        clickEndereço, clickPagamento, clickPedidos} = useContext(ControlePaginas)

    const [ arrow, setArrow]=  useState(false);
    
    const hangdleArrow= ()=> {
        setArrow(prev=> !prev);
    }
    const reverse = arrow? styles.reverse : styles.colunaMobile ; 
    
    function list(){
        return  <>     
                    {(user.displayName)? 
                    <p>Seja bem vindo {user.displayName}</p>
                    :
                    <p>Seja bem vindo. Cadastre seus dados.</p>
                    }
                    
                    <ul>
                        <li onClick={hangdleArrow}><Link onClick={clickConta} href="#">Perfil</Link></li>
                        <li onClick={hangdleArrow}><Link onClick={clickEndereço} href="#">Endereço</Link></li>
                        <li onClick={hangdleArrow}><Link onClick={clickPagamento} href="#">Pagamento</Link></li>
                        <li onClick={hangdleArrow}><Link onClick={clickPedidos} href="#">Pedidos</Link></li>
                        <li onClick={hangdleArrow}><Link onClick={logout} href="http://localhost:3000/login&perfil">Sair da Conta</Link></li>
                        
                    </ul>
                </>
    }
   
    return(
        <section className={styles.perfilPedidos}>
            <div className={styles.coluna}>
                
              {list()}
    
            </div>

            <div className={styles.colunaMobile}>
                
                {(arrow)?  
                    <div className={styles.Mob}>
                        {list()}
                    </div>
                    :
                    <></>}

                <Image className={reverse} onClick={hangdleArrow} src={Arrow} alt='arrowAba'></Image>
            </div>

            <div className={styles.content}>
            {(contaPage && <DadosUsuario/>)}
            {(endereçoPage && <AbaEndereço/>)}
            {(pagamentoPage && <AbaPagamento/>)}
            {(pedidosPage && <AbaPedidos/>)}             
            </div>
        </section>

    )
}
