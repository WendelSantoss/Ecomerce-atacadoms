'use client'

import ProductUnico from "@/componentes/Produtos/produtoUnico/PageProductUnico";
import { useSearchParams } from "next/navigation";


export default function ProductUnicopage(){
    const parahms = useSearchParams();
    const brand = parahms.get('brand')
    const name = parahms.get('name')

    
    return(
   
       <ProductUnico brand={brand as string} name={name as string}/>
   
    )
}