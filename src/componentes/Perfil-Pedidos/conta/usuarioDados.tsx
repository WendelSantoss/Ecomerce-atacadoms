import ButtonPink from '@/componentes/buttonPadrao/ButtonPink'
import styles from './usuariosDados.module.css'
export default function DadosUsuario(){
    return(
        <div className={styles.dadosUsuario}>
            <form>
            <h2>Dados Cadastrais</h2>
              
                <p>Nome</p>
                <input type="text" placeholder="Digite o seu nome completo"></input>
                <p>CPF</p>
                <input type="number" placeholder="Digite nº de seu CPF"></input>
                <p>Nascimento</p>
                <input type="date"></input>
                <p>Digite seu Contato</p>
                <input type="number" placeholder="Nº de seu celular: (dd) 9xxxxxxxx"></input>
                <p>Email</p>
                <input type="text" placeholder="Digite seu endereço de Email"></input>

            </form>
            <div className={styles.moveButton}>
                <ButtonPink text='Salvar'/>
            </div>
        </div>
    )
}