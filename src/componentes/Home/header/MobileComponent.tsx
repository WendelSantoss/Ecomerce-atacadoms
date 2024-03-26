'use client';
import Image from "next/image";
import { useState, useContext } from "react"
import styles from './header.module.css'
import Mobile from './images/mobile.png'
import Link from "next/link";
import { UserLoginLogout } from "@/componentes/LoginAuthContext/controlLogin";


export default function MobileComponente(){
    const {user} = useContext(UserLoginLogout)

    const [ mobile, setMobile]= useState (false);
    const hangdleMobile= ()=> setMobile(prev=> !prev);
    
    return(
        <div className={styles.MenuMobile}>
        
        <Image onClick={hangdleMobile} src={Mobile} alt='iconMobile'></Image>

        {(mobile)?
        <div className={styles.listMenu}>
            <ul>
            <li><Link onClick={hangdleMobile} href='/'>Home</Link></li>
            <li><Link onClick={hangdleMobile} href='/produtos'>Produtos</Link></li> 
            {
            (user)?
                <li><Link onClick={hangdleMobile} href='/login&perfil'>Perfil e Pedidos</Link></li>
            :  
            <li><Link onClick={hangdleMobile}  href='/login&perfil'>Entrar/Cadastro</Link></li> 
            }
            </ul>
        </div>: <></>}

        </div>
    )
}

