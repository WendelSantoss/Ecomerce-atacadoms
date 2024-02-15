import ButtonPink from '@/componentes/buttonPadrao/ButtonPink'
import styles from './endereço.module.css'

export default function AbaEndereço(){
    return(
        <div className={styles.endereco}>
            <form>
                <h2>Dados de endereço para entrega</h2>
                <p>CEP</p>
                <input type="number" placeholder="Digite nº de seu CEP"></input>
                <p>Rua</p>
                <input type="text" placeholder="Digite o nome da sua Rua"></input>
                <p>Bairro</p>
                <input type="text" placeholder="Digite o nome do sua Bairro"></input>
                <p>Complemento</p>
                <input type="text" placeholder="Digite algum complemento"></input>
                <p>Ponto de Referência</p>
                <input type="text" placeholder="Digite um ponto de referência"></input>
                <p>Cidade</p>
                <input type="text" placeholder="Digite o nome da sua Cidade"></input>
                <p>Estado</p>
                <input type="text" placeholder="Digite o nome de sua Estado"></input>
            </form>
            
            <ButtonPink text='Salvar' />

        </div>

    )
}