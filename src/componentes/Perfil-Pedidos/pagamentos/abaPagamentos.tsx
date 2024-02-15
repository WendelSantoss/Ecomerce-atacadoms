import ButtonPink from '@/componentes/buttonPadrao/ButtonPink';
import styles from  './abaPagamentos.module.css';

export default function AbaPagamento(){
    return(
        <div className={styles.pagamentos}>
           <form >
                <h2>Dados de Pagamentos</h2>
                <p>Numero do Cartao</p>
                <input type="number" placeholder="Digite nº de seu cartao"></input>
                <p>Validade do cartao</p>
                <input type="date"></input>
                <p>Codigo de segurança</p>
                <input type="number" placeholder="xxx"></input>
                <span>Codigo de 3 digitos que fica na parte de trás do cartão.</span>
                <p>Numero do CPF do titular do cartao</p>
                <input type="number" placeholder="Digite nº do cpf"></input>
                <p>Nome do Titular do cartao</p>
                <input type="text" placeholder="Digite o nome impresso no cartao"></input>
           </form>
           
                <ButtonPink text='Salvar' />
           
        </div>
    )
}

// 