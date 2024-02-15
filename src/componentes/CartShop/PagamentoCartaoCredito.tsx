import { useState } from "react";
import style from './pagamento.module.css'
import ButtonPink from "../buttonPadrao/ButtonPink";

export default function PagamentoCartaoCredito(props: any){
    
    const [pagamentoCadastrado, setPagamentoCadastrato]= useState(false)
    /*estado que verificará se a conta que esta logada tem cartao de credito cadastrado.*/

    const [numeroParcelas, setNumeroParcelas] = useState(1);
    const mudaNumeroParcelas = (event: any) => {
    setNumeroParcelas(event.target.value);
    };//estados para determinar numero de parcelas funcao para setar novo valor no select.
   
    function calculoParcelas(){
        let valorTotal = parseFloat(props.valorTotal)
        let valorParcelas = parseFloat((valorTotal/numeroParcelas).toFixed(2));
        if(numeroParcelas == 1){
            return <p>Será {numeroParcelas} parcela de ${valorParcelas}.</p>
        }
        return(
            <p>Serão {numeroParcelas} parcelas de ${valorParcelas}.</p>
        )
    }//função para calculo do valor de parcelas.

    return(
        <>
        
            {(pagamentoCadastrado &&
            <form className={style.creditoCadastrado}>
                <h4>Metodo de Pagamento cadastrado</h4>
                <p>cartao cadastrado com final: **</p>
            </form>
            )}

            {(pagamentoCadastrado == false &&
            <form className={style.creditoNãoCadastrado}>
                <p>Numero do Cartao</p>
                <input type="number" placeholder="Digite nº de seu cartao"></input>

                <p>Validade do cartao</p>
                <input type="date"></input>

                <p>Codigo de segurança</p>
                <input type="number" placeholder="xxx"></input>
                <span>Codigo de 3 digitos na parte de trás do cartão.</span>
                
                <p>Numero do CPF do titular do cartao</p>
                <input type="number" placeholder="Digite nº do cpf"></input>
                
                <p>Nome do Titular do cartao</p>
                <input type="text" placeholder="Digite o nome impresso no cartao"></input>
                
                <select name="select" value={numeroParcelas} onChange={(e)=>mudaNumeroParcelas(e)}>
                    <option value="1">1 parcela</option>
                    <option value="2">2 parcelas</option>
                    <option value="3">3 parcelas</option>
                    <option value="4">4 parcelas</option>
                    <option value="5">5 parcelas</option>
                    <option value="6">6 parcelas</option>
                    <option value="7">7 parcelas</option>
                    <option value="8">8 parcelas</option>
                    <option value="9">9 parcelas</option>
                    <option value="10">10 parcelas</option>
                </select>
                {calculoParcelas()}

                <ButtonPink grande text='Efetuar Pagamento'/>
                    
                </form>
            )}
        </>
    )
}
//styles vindo do css module do componente pai.