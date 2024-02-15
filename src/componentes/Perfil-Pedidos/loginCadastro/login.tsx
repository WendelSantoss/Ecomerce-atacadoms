import styles from './login.module.css'
import{ useContext, useEffect, useState } from "react"
import { UserLoginLogout } from '@/componentes/LoginAuthContext/controlLogin'
import FormCadastro from './formCadastro'
import FormLogin from './formLogin'
import ErroIcon from './erroIcon'

interface StyleParaCartShop{
    loginCartShop?: boolean
}

export default function Login(props: StyleParaCartShop){
    const { login, cadastrar, loginGoogle, erro, setandoErro } = useContext(UserLoginLogout)
    //funcoes e estados vindo do hoock de controle do login

    const [email, setEmail]= useState<string>()
    const [senha, setSenha]= useState<string>()
    const [reSenha, setReSenha]= useState<string>()
    //constantes para armazenar dados de login e cadastro do usuario.

    const [formCadastro, setFormCadastro]= useState<boolean>(false)
    //constante para controle de formulario
    
    function mudaTipoForm(){
        setFormCadastro(prev=> !prev)
        setEmail('')
        setSenha('')
        setandoErro('')
    }//mudar o tipo do fomulário para cadastrar email e senha na aplicação.
    
    const StyleLoginOuCartShop = props.loginCartShop?  styles.loginCartShop : styles.login;
    /*condicional de estilo para o componente cartShop, pois esse componente login está sendo 
    importado lá também*/

    function erroFaltaEmailOuSenha(){
        if( senha != reSenha){
            setandoErro("Sua senhas não conferem")
        }else if(email){
            return (
                setandoErro("Digite a senha para efetuar o Login")
            )
        }else if(senha){    
            setandoErro("Digite o email para efetuar o Login")
        }else if(email == null && senha == null){
            setandoErro("Digite o email e sua senha para efetuar o Login")
        }
    }// controle de erros para msg para o cliente.

    function checkLogin(){
        if(email && senha){    
            login(email, senha)
        }else{
            erroFaltaEmailOuSenha();
        }
    }//check de dados para poder chamar a funcao de login do firebase
    
    function checkCadastro(){
        if(email && senha && senha === reSenha){
            cadastrar(email, senha)
        }else{
            erroFaltaEmailOuSenha();
        }
    }//check de dados para poder chamar a funcao de validar cadastro do firebase

    useEffect(()=>{
        setandoErro('')
    },[])
    
    return(
        <div className={StyleLoginOuCartShop}>
            
            <div className={styles.form}>

                {(formCadastro)?
                    <FormCadastro 
                        setEmail={setEmail} 
                        setSenha={setSenha} 
                        setReSenha={setReSenha} 
                        checkCadastro={checkCadastro}
                        mudaTipoForm={mudaTipoForm}
                    />
                :
                    <FormLogin 
                    setEmail={setEmail} 
                    setSenha={setSenha} 
                    checkLogin={checkLogin} 
                    loginGoogle={loginGoogle}
                    mudaTipoForm={mudaTipoForm}
                    />
                }
                
            </div>
            {(erro)?
                <div className={styles.erro}>
                  <p>{erro} </p>
                  <ErroIcon/>
                </div>
                :
                <></>
            }
         
        </div>
    )
}