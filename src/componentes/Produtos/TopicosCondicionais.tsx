 interface variaveis{
    ofertasProdutos: string,
    makeupsProduto: string,
    categoriaProduto: string
 }
 
 export default function TopicosProdutos(props: variaveis){
   
    const ofertasProdutos = props.ofertasProdutos
    const makeupsProduto= props.makeupsProduto
    const categoriaProduto = props.categoriaProduto

    return(
        <>
         {(ofertasProdutos === 'price_less_than=10')?
        <h2>Promoções abaixo dos $10,00.</h2>
        :
        null
        }
        {(ofertasProdutos === 'price_less_than=20')?
        <h2>Promoções abaixo dos $20,00.</h2>
        :
        null
        }
        {(ofertasProdutos === 'price_greater_than=20')?
        <h2>Ofertas acima dos $20,00.</h2>
        :
        null
        }

        {(makeupsProduto === 'product_type=blush')?
        <h2>Todos produtos do tipo Blush.</h2>
        :
        null
        }   
        
        {(makeupsProduto === 'product_type=eyeliner')?
        <h2>Todos produtos do tipo Eyeliner.</h2>
        :
        null
        }
        {(makeupsProduto === 'product_type=eyeshadow')?
        <h2>Todos produtos do tipo Eyeshadow.</h2>
        :
        null
        }
        
        {(makeupsProduto === 'product_type=lip_liner')?
        <h2>Todos produtos do tipo Lip Liner.</h2>
        :
        null
        }
        
        {(makeupsProduto === 'product_type=lipstick')?
        <h2>Todos produtos do tipo Lipstick.</h2>
        :
        null
        } 
        
        {(makeupsProduto === 'product_type=mascara')?
        <h2>Todos produtos do tipo Mascara.</h2>
        :
        null
        }  
        
        {(makeupsProduto === 'product_type=nail_polish')?
        <h2>Todos produtos do tipo Nail Polish.</h2>
        :
        null
        }     

        {(categoriaProduto === 'product_tags=Natural')?
        <h2>Todos produtos da categoria Natural.</h2>
        :
        null
        }  
        
        {(categoriaProduto === 'product_tags=Organic')?
        <h2>Todos produtos da categoria Organic.</h2>
        :
        null
        } 
        
        {(categoriaProduto === 'product_tags=Vegan')?
        <h2>Todos produtos da categoria Vegan.</h2>
        :
        null
        }

        </>
    )
}
//style dos topicos se encontra no produtosPage.module.css