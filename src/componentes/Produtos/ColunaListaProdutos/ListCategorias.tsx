import Link from 'next/link'
import styles from './ListCategorias.module.css'
import { useContext, useState } from 'react'
import Image from 'next/image'
import Arrow from '../../../../public/arrowIcon.png'
import { BuscaDoProduto } from '../hooksParaBuscardados-context/ContextoPageControlDados'
import { UserLoginLogout } from '@/componentes/LoginAuthContext/controlLogin'


export default function List(){
    const[arrow, setArrow] = useState(false)
    const reverse = arrow? styles.reverse : styles.colunaMobileProdutos; 
    const hangdleArrow= ()=> {
        setArrow(prev=> !prev);
    }

    const {blush, eyeliner, eyeshadow,  abaixo10, abaixo20, acima20, 
    lip_liner, lipstick, mascara, nail_polish, natural, organico, vegan}= useContext(BuscaDoProduto)
    
    const{user, logout} = useContext(UserLoginLogout);

    function list(){
        
        return(
            <>
            <h2>Ofertas</h2>
            <ul>
                <li onClick={abaixo10}><Link onClick={hangdleArrow} href='/produtos'>Abaixo dos $10</Link></li>
                <li onClick={abaixo20}><Link onClick={hangdleArrow} href='/produtos'>Abaixo dos $20</Link></li>
                <li onClick={acima20}><Link onClick={hangdleArrow} href='/produtos'>Acima dos $20</Link></li>
            </ul>
            <h2>Linhas</h2>
            <ul>
                <li onClick={natural}><Link onClick={hangdleArrow} href='/produtos'>Natural</Link></li>
                <li onClick={organico}><Link onClick={hangdleArrow} href='/produtos'>Organic</Link></li>
                <li onClick={vegan}><Link onClick={hangdleArrow} href='/produtos'>Vegan</Link></li>
            </ul>
            <h2>Maquiagens</h2>
            <ul>
                <li onClick={blush}><Link onClick={hangdleArrow} href='/produtos'>Blush</Link></li>
                <li onClick={eyeliner}><Link onClick={hangdleArrow} href='/produtos'>Eyeliner</Link></li>
                <li onClick={eyeshadow}><Link onClick={hangdleArrow} href='/produtos'>Eyeshadow</Link></li>
                <li onClick={lip_liner}><Link onClick={hangdleArrow} href='/produtos'>Lip liner</Link></li>
                <li onClick={lipstick}><Link onClick={hangdleArrow} href='/produtos'>Lipstick</Link></li>
                <li onClick={mascara}><Link onClick={hangdleArrow} href='/produtos'>Mascara</Link></li>
                <li onClick={nail_polish}><Link onClick={hangdleArrow} href='/produtos'>Nail polish</Link></li>
                {(user)?
                <Link onClick={logout} href='/login&perfil'>Sair da conta</Link>   
                :
                <Link href='/login&perfil'>Faça seu Login</Link>
                }
            </ul>
            </>
        )}
    
    return (
          <>
            <div className={styles.colunaProdutos}>
                {list()}
            </div>
       
            <div className={styles.colunaMobileProdutos}>

                {(arrow)?
                    <div className={styles.mobProdutos}>
                        {list()}
                    </div>
                    :
                    null   
                }

                <Image className={reverse} src={Arrow} alt='SetaMenu' onClick={hangdleArrow}></Image>

            </div>
          
        </>
        
    )     
} 