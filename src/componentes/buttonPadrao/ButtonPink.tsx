import styles from './ButtonPink.module.css'

interface button {
    text: string
    grande?: boolean
    medio?: boolean
    funciton?: void
}

export default function ButtonPink(props: button){
    

    const grandeOuPequeno = props.grande? styles.grande : props.medio? styles.medio : styles.pink;
    return(
        <div className={styles.moveButton}>
            <button className={grandeOuPequeno}>
                {props.text}
            </button>
        </div>
    )
}
/*button sendo compartilhado em diferentes partes da aplicações com parametros para dizer se ele
vai ser grande, medio ou pequeno*/