'use client'
import Link from "next/link";
import Lupa from './images/lupaIcon1.png';
import Image from "next/image";
import styles from './header.module.css'
import { useState } from "react";

export default function InputSearch(){
    const [pesquisa, setPesquisa]= useState('')

    return(
        <div className={styles.search}>

            <input 
            onChange={(e)=> setPesquisa(e.target.value)} 
            type='text' 
            name='quickSearch' 
            placeholder='O que você procura?'
            /> 
            <div className={styles.searchIcon}>
            <Link href={{
                pathname: '/search',
                query: { busca: pesquisa }
            }}>
                <Image src={Lupa} alt='iconLupa'></Image> 
            </Link>
            </div>
        </div>
    )
}
//styles sendo importado do css modules do componente header.