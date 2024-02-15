import styles from './Loader.module.css'

interface carregando {
    loading: boolean
    fontsize?: number
}

export default function Loader(props: carregando){

    const loading = props.loading
    const tamanhoFonte= props.fontsize?  props.fontsize : 20;
    return(
        <> 
            {(loading)?
                <div className={styles.loading}> 
                    
                    <p style={{fontSize: tamanhoFonte}}>Dados sendo carregados  </p>
                    <div className={styles.icon}></div>
                
                </div>            
            :
            null
        }
        </>
    )
    
}
//Loader padrao para melhorar a experiencia do usuário.