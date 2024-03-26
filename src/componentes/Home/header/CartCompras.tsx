'use client'
import  useLocalStorage  from "@/componentes/CartShop/hoockCart/useLocalStorage"
import styles from './cartCompras.module.css'
import Link from "next/link"
import Image from "next/image"
import Cart from '../../../../public/cart.png'
import { useEffect, useState } from "react"
import { Info } from "@/componentes/interfaces/InfoInterfaceDados"


export default function CartCompras(){
    const { value }= useLocalStorage<Info[]>('cart-itens', [])
    const [quantidade, setQuantidade]= useState<number>(0);
    
    useEffect(()=>{
        if (typeof window != 'undefined') {
            let storedItem = localStorage.getItem('cart-itens');
            if (storedItem) {
                let itemArray= JSON.parse(storedItem)
                setQuantidade(itemArray.length)
            }}
    }, [value])
 
    return(
        <div className={styles.cartIcon}>

            <Link href='/carrinho'>
                <Image src={Cart} alt='iconCart'></Image>
                {quantidade> 0 &&  <div className={styles.valor}><p>{quantidade}</p></div> }
            
            </Link>
     
        </div>
    )
}