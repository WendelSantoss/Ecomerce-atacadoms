import { Info } from "../interfaces/InfoInterfaceDados"
import style from './pagamento.module.css'
import FormaPagamento from "./formaPagamento"
import { useContext } from "react"
import { UserLoginLogout } from "../LoginAuthContext/controlLogin"
import Login from "../Perfil-Pedidos/loginCadastro/login"


export default function Pagamento(props: any){
    const{ user }= useContext(UserLoginLogout)
    const value = props.dados
    let total = 0
    let totalDuasCasasDecimais= ''

    if (value.length > 0) {
        value.forEach((item: Info) => {
            let subTotal = item.quantity ? item.quantity * item.price : 0;
            total += subTotal;
            return  totalDuasCasasDecimais = total.toFixed(2);
    });}//condicional para setar valor do total, com duas casas decimais.

    return (

        <div className={style.boxPagamento}>
            <h3>Resumo da Compra</h3>
          
            {value.length > 0 && value.map((item: Info) => {
                let subTotal = item.quantity ? item.quantity * item.price : 0;
                let subTotalDuasCasasDecimais= subTotal.toFixed(2)
                //retorna uma string com duas casas decimais;

                if(subTotal > 0){
                    return(
                        <div key={item.id} className={style.resumoTotal}>
                            <h6>{item.name}</h6>
                            <p>${subTotalDuasCasasDecimais}</p>
                        </div>
                    )
                }
            })}

            <hr/>

            <div className={style.resumoTotal}>
                <h3>Total:</h3> 
                <p>${totalDuasCasasDecimais}</p>
            </div>

            <div className={style.dadosPagamento}>
                {(user)?
                    <>
                        <h3>Forma de Pagamento</h3>
                        <FormaPagamento valorTotal={totalDuasCasasDecimais}/>
                    </>
                :   
                    <>

                        <h5>Faça o login para efeturar compras</h5>
                        <Login loginCartShop/>
                      
                    </>
                }
            </div>
        
        </div>
            
    )
}