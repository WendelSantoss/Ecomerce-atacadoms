'use client'
import styles from './header.module.css'
import { useContext } from 'react'
import Link from 'next/link'
import { UserLoginLogout } from '@/componentes/LoginAuthContext/controlLogin'


export default function MenuDesktop(){
    const {user} = useContext(UserLoginLogout)

    return(
      <div className={styles.links}>
        <Link href='http://localhost:3000/'><p>Home</p></Link>
        <Link href='http://localhost:3000/produtos'><p>Produtos</p></Link>
        {
          (user)?
            <Link href='http://localhost:3000/login&perfil'><p>Perfil/Pedidos</p></Link>
          :  
            <Link href='http://localhost:3000/login&perfil'><p>Entrar/Cadastro</p></Link>
        }  
      </div>

    )
}