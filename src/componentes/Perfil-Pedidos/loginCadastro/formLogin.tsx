import Link from "next/link"
import GoogleIcon from "./iconGoogle"

interface modelFormLogin{
    setEmail: (e:string)=> void,
    setSenha:(e:string)=> void,
    checkLogin:()=> void,
    loginGoogle: ()=> void,
    mudaTipoForm: ()=> void
}

export default function FormLogin(props: modelFormLogin){
    const setEmail= props.setEmail
    const setSenha= props.setSenha
    const checkLogin= props.checkLogin
    const loginGoogle= props.loginGoogle
    const mudaTipoForm= props.mudaTipoForm

    return(
        <>
            <h2>Faça seu Login </h2>
            <p>Email</p>
            <input onChange={e => setEmail(e.target.value)} type="text" placeholder="Digite seu username" name='Email'></input>
            <p>Senha</p>
            <input onChange={e => setSenha(e.target.value)} type="password" placeholder="Digite sua senha"></input>
            <Link href='#'>Esqueceu sua senha?</Link>
            <button onClick={checkLogin}>Entrar</button>
            <button onClick={loginGoogle}>Entrar com o Google <GoogleIcon/></button>
            <span onClick={mudaTipoForm}> Crie uma conta.</span>
        </>
    )
}//todo stye sendo importado do login.module